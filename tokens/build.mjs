// Style Dictionary build: tokens/tokens.json -> src/stylesheets/{palette,sizing,typography,shadows,colors}.ts
// and the token lists in src/docs/*.mdx
import fs from 'node:fs';
import path from 'node:path';
import StyleDictionary from 'style-dictionary';

const here = import.meta.dirname;

const NS = 'org.bigbluebutton';
const ext = (token) => token.$extensions?.[NS] ?? {};
const MODULES = { color: 'palette', spacing: 'sizing', border: 'sizing', font: 'typography', shadow: 'shadows' };

// color.brand.1 -> colorBrand1, spacing.xx-large -> spacingXXLarge (lodash camelCase would give spacingXxLarge)
StyleDictionary.registerTransform({
  name: 'bbb/name/ts',
  type: 'name',
  transform: (token) => token.path.flatMap((s) => s.split('-'))
    .map((w, i) => (i === 0 ? w : /^x+$/.test(w) ? w.toUpperCase() : w[0].toUpperCase() + w.slice(1)))
    .join(''),
});

// DTCG color object -> #RRGGBB, or rgba(r, g, b, a) when translucent.
// `components` is what DTCG requires; `hex` is what people read, so a mismatch fails the build.
StyleDictionary.registerTransform({
  name: 'bbb/color/css',
  type: 'value',
  filter: (token) => token.$type === 'color' && typeof token.$value === 'object',
  transform: (token) => {
    const [r, g, b] = token.$value.components.map((c) => Math.round(c * 255));
    const a = token.$value.alpha ?? 1;
    const hex = '#' + [r, g, b].map((c) => c.toString(16).padStart(2, '0')).join('').toUpperCase();
    if (token.$value.hex && token.$value.hex.toUpperCase() !== hex) {
      throw new Error(`${token.path.join('.')}: hex ${token.$value.hex} does not match components (${hex})`);
    }
    return a === 1 ? hex : `rgba(${r}, ${g}, ${b}, ${a})`;
  },
});

StyleDictionary.registerTransform({
  name: 'bbb/dimension',
  type: 'value',
  filter: (token) => token.$type === 'dimension' && typeof token.$value === 'object',
  transform: (token) => `${token.$value.value}${token.$value.unit}`,
});

StyleDictionary.registerTransform({
  name: 'bbb/fontWeight',
  type: 'value',
  filter: (token) => token.$type === 'fontWeight',
  transform: (token) => String(token.$value),
});

StyleDictionary.registerTransform({
  name: 'bbb/fontFamily',
  type: 'value',
  filter: (token) => token.$type === 'fontFamily',
  transform: (token) => [token.$value].flat().map((f) => (f.includes(' ') ? `"${f}"` : f)).join(', '),
});

// Runtime override layer: wrap the resolved value in the token's CSS var chain.
// Transitive, so an alias to another semantic token nests inside that token's own chain.
StyleDictionary.registerTransform({
  name: 'bbb/css-var-chain',
  type: 'value',
  transitive: true,
  filter: (token) => ext(token).cssVars?.length > 0,
  transform: (token) => ext(token).cssVars.reduceRight((acc, v) => `var(${v}, ${acc})`, token.$value),
});

// One shadow, or a list of layers. The color is already a CSS value, with its own var() chain.
const shadowLayer = ({ offsetX, offsetY, blur, spread, color, inset }) => (
  `${inset ? 'inset ' : ''}${[offsetX, offsetY, blur, spread].map((d) => (d.value ? `${d.value}${d.unit}` : '0')).join(' ')} ${color}`
);

StyleDictionary.registerTransform({
  name: 'bbb/shadow',
  type: 'value',
  transitive: true,
  filter: (token) => token.$type === 'shadow' && typeof token.$value === 'object',
  transform: (token) => [token.$value].flat().map(shadowLayer).join(', '),
});

const header = '// Generated from tokens/tokens.json by `npm run tokens`. Do not edit.\n';
const quote = (v) => `'${v.replaceAll("'", "\\'")}'`;

StyleDictionary.registerFormat({
  name: 'bbb/ts/module',
  format: ({ dictionary }) => header + dictionary.allTokens
    .map((t) => `export const ${t.name} = ${quote(t.$value)};`).join('\n') + '\n',
});

// colors.ts is a curated, grouped view over palette exports; the grouping is token metadata.
StyleDictionary.registerFormat({
  name: 'bbb/ts/colors',
  format: ({ dictionary }) => {
    const groups = {};
    const used = dictionary.allTokens.filter((t) => ext(t).colorsKey);
    for (const t of used) {
      const [group, key] = ext(t).colorsKey.split('.');
      (groups[group] ??= []).push(`    ${key}: ${t.name},`);
    }
    const body = Object.entries(groups).map(([g, lines]) => `  ${g}: {\n${lines.join('\n')}\n  },`).join('\n');
    return `${header}import {\n  ${used.map((t) => t.name).join(', ')},\n} from './palette';\n\n`
      + `export const colors = {\n${body}\n} as const;\n\nexport type Colors = typeof colors;\n`;
  },
});

const valueTransforms = ['bbb/color/css', 'bbb/dimension', 'bbb/fontWeight', 'bbb/fontFamily', 'bbb/shadow', 'bbb/css-var-chain'];

const sd = new StyleDictionary({
  source: [path.join(here, 'tokens.json')],
  usesDtcg: true,
  // A failed transform is only a warning by default, and the output gets `[object Object]`.
  log: { warnings: 'error', verbosity: 'verbose' },
  platforms: {
    ts: {
      transforms: ['bbb/name/ts', ...valueTransforms],
      buildPath: path.join(here, '../src/stylesheets/'),
      files: [
        ...['palette', 'sizing', 'typography', 'shadows'].map((m) => ({
          destination: `${m}.ts`,
          format: 'bbb/ts/module',
          filter: (t) => MODULES[t.path[0]] === m,
        })),
        { destination: 'colors.ts', format: 'bbb/ts/colors', filter: (t) => t.path[0] === 'color' },
      ],
    },
  },
});

await sd.buildAllPlatforms();

// The token pages in Storybook. Agents read their source, not what they render, so the lists are
// written out in it, between BEGIN and END comments. The text around them is edited by hand.
const { allTokens } = await sd.getPlatformTokens('ts');

// The value used when no CSS variable is set: what is left inside the innermost var().
const fallbackOf = (value) => {
  const inner = /^var\([^,]+,\s*(.+)\)$/.exec(value)?.[1];
  return inner ? fallbackOf(inner) : value;
};
const withPx = (value) => (value.endsWith('rem') ? `${value} (${parseFloat(value) * 16}px)` : value);
const bySize = (a, b) => parseFloat(a.$value) - parseFloat(b.$value);

// When to use the token, left out when that has not been decided, and its names in Figma.
const usage = (t) => ({
  ...(t.$description ? { purpose: t.$description } : {}),
  ...(ext(t).figma ? { figma: ext(t).figma } : {}),
});

const sizeRow = (t) => ({ name: t.name, value: withPx(t.$value), ...usage(t) });
const sized = (prefix) => allTokens.filter((t) => t.name.startsWith(prefix)).sort(bySize).map(sizeRow);

// The Color page follows the layers: primitives, then colors with a role, then colors for one component.
const colorTokens = allTokens.filter((t) => t.path[0] === 'color');
const colorName = (t) => (ext(t).colorsKey ? `colors.${ext(t).colorsKey}` : t.name);
const docName = (t) => (t.path[0] === 'palette' ? t.path.join('.') : colorName(t));
const tokenOf = new Map(allTokens.map((t) => [t.path.join('.'), t]));
const target = (t) => tokenOf.get(/^\{(.+)\}$/.exec(t.original.$value)?.[1]);

const colorRow = (figma) => (t) => ({
  name: colorName(t), value: fallbackOf(t.$value), pointsTo: docName(target(t)),
  ...usage(t), ...(figma && ext(t).figma ? { figma: ext(t).figma.filter(figma) } : {}), cssVars: t.$value.match(/--[\w-]+/g) ?? [],
});

// A color's roles are the groups of its names in Figma. One with no name there keeps the group it has in `colors`,
// when that is a role too.
const ROLES = {
  text: 'Text', icon: 'Icon', surface: 'Background', border: 'Border', action: 'Action', feedback: 'Feedback', shadow: 'Shadow',
};
const rolesOf = (t) => {
  if (ext(t).figma) return [...new Set(ext(t).figma.map((f) => f.split('/')[0]))];
  const group = ext(t).colorsKey?.split('.')[0];
  return t.$description && group in ROLES ? [group] : [];
};
// The colors named after the role come first in its list.
const namedFirst = (role) => (a, b) => Number(isNamed(b, role)) - Number(isNamed(a, role));
const isNamed = (t, role) => [role, ROLES[role].toLowerCase()].includes(t.path[1]);
const isComponent = (t) => rolesOf(t).includes('component');
const componentGroups = [...new Set(colorTokens.filter(isComponent).map((t) => t.path[1]))].sort();

const chain = [];
for (let t = tokenOf.get('color.whiteboard.selected'); t; t = target(t)) chain.unshift(t);

const ramps = [];
for (const t of allTokens.filter((x) => x.path[0] === 'palette')) {
  // White and black are one value each, so they share a row.
  const name = t.path.length > 2 ? t.path[1] : 'white and black';
  let ramp = ramps.find((r) => r.name === name);
  if (!ramp) ramps.push(ramp = { name, tokens: [] });
  ramp.tokens.push(t);
}

const literal = (row) => `{ ${Object.entries(row)
  .map(([key, v]) => `${key}: ${Array.isArray(v) ? `[${v.map(quote).join(', ')}]` : quote(v)}`).join(', ')} }`;
const table = (kind, caption, rows) => (
  `<TokenTable kind="${kind}" caption="${caption}" rows={[\n${rows.map((r) => `  ${literal(r)},`).join('\n')}\n]} />`
);
const swatches = (rows, caption) => (
  `<Swatches caption="${caption}" rows={[\n${rows.map((r) => `  ${literal(r)},`).join('\n')}\n]} />`
);
const swatch = (t) => ({ name: docName(t), value: fallbackOf(t.$value), ...(ext(t).figma ? { figma: ext(t).figma } : {}) });
const title = (s) => s[0].toUpperCase() + s.slice(1);

const lists = {
  'Color.mdx': {
    chain: `<ColorChain steps={[\n${chain.map((t) => `  ${literal({ name: docName(t), value: fallbackOf(t.$value), purpose: t.$description ?? '' })},`).join('\n')}\n]} />`,
    primitives: ramps.map((r) => swatches(r.tokens.map(swatch), title(r.name))).join('\n\n'),
    semantic: Object.entries(ROLES).map(([role, label]) => `### ${label}\n\n${table('color', `${label} colors`, colorTokens
      .filter((t) => rolesOf(t).includes(role)).sort(namedFirst(role)).map(colorRow((f) => f.startsWith(`${role}/`))))}`).join('\n\n'),
    component: componentGroups.map((g) => `### ${title(g)}\n\n${table('color', `${title(g)} colors`, colorTokens
      .filter((t) => isComponent(t) && t.path[1] === g).map(colorRow()))}`).join('\n\n'),
    kept: table('color', 'Kept for existing apps', colorTokens.filter((t) => !rolesOf(t).length).map(colorRow())),
  },
  'Spacing.mdx': { spacing: table('spacing', 'Spacing', sized('spacing')) },
  'Radius.mdx': { radius: table('radius', 'Border radius', sized('borderRadius')) },
  'Shadow.mdx': {
    shadow: table('shadow', 'Shadow', allTokens.filter((t) => t.path[0] === 'shadow').map((t) => ({
      // The default value of the color, in place of its var() chain.
      name: t.name, value: t.$value.replace(/var\(.+\)$/, fallbackOf), ...usage(t), cssVars: t.$value.match(/--[\w-]+/g) ?? [],
    }))),
  },
  'Type.mdx': {
    'font family': table('fontFamily', 'Font family', sized('fontFamily')),
    'font size': table('fontSize', 'Font size', sized('fontSize')),
    'font weight': table('fontWeight', 'Font weight', sized('fontWeight')),
  },
};

for (const [file, blocks] of Object.entries(lists)) {
  const page = path.join(here, '../src/docs', file);
  let mdx = fs.readFileSync(page, 'utf8');
  for (const [name, body] of Object.entries(blocks)) {
    const begin = `{/* BEGIN ${name}: generated from tokens/tokens.json by npm run tokens. Do not edit. */}`;
    const end = `{/* END ${name} */}`;
    const [from, to] = [mdx.indexOf(begin), mdx.indexOf(end)];
    if (from < 0 || to < from) throw new Error(`${file}: the "${name}" BEGIN and END comments are missing`);
    mdx = `${mdx.slice(0, from + begin.length)}\n\n${body}\n\n${mdx.slice(to)}`;
  }
  fs.writeFileSync(page, mdx);
}
