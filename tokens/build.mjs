// Style Dictionary build: tokens/tokens.json -> src/stylesheets/{palette,sizing,typography,colors}.ts
import path from 'node:path';
import StyleDictionary from 'style-dictionary';

const here = import.meta.dirname;

const NS = 'org.bigbluebutton';
const ext = (token) => token.$extensions?.[NS] ?? {};
const MODULES = { color: 'palette', spacing: 'sizing', border: 'sizing', font: 'typography' };

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

// Runtime override layer: wrap the resolved value in the token's CSS var chain.
// Transitive, so an alias to another semantic token nests inside that token's own chain.
StyleDictionary.registerTransform({
  name: 'bbb/css-var-chain',
  type: 'value',
  transitive: true,
  filter: (token) => ext(token).cssVars?.length > 0,
  transform: (token) => ext(token).cssVars.reduceRight((acc, v) => `var(${v}, ${acc})`, token.$value),
});

const header = '// Generated from tokens/tokens.json by `npm run tokens`. Do not edit.\n';
const quote = (v) => `'${v}'`;

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

const valueTransforms = ['bbb/color/css', 'bbb/dimension', 'bbb/fontWeight', 'bbb/css-var-chain'];

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
        ...['palette', 'sizing', 'typography'].map((m) => ({
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
