import React from 'react';
import { Unstyled } from '@storybook/addon-docs/blocks';
import { colors } from '../../src/stylesheets/colors';
import * as palette from '../../src/stylesheets/palette';
import * as sizing from '../../src/stylesheets/sizing';
import * as typography from '../../src/stylesheets/typography';

// Tables for the token pages. They read the generated stylesheets, so a token change shows up here by itself.

type Row = { name: string; value: string; sample: React.ReactNode; cssVars?: string[] };

const cell: React.CSSProperties = {
  padding: '0.5rem 0.75rem', textAlign: 'left', verticalAlign: 'middle', borderBottom: '1px solid #DCE4EC',
};
const text: React.CSSProperties = { fontFamily: 'sans-serif', fontSize: '0.875rem', color: '#393C48' };

const cssVarsOf = (value: string) => value.match(/--[\w-]+/g) ?? [];
// The value used when no CSS variable is set: what is left inside the innermost var().
const fallbackOf = (value: string): string => {
  const [, inner] = /^var\([^,]+,\s*(.+)\)$/.exec(value) ?? [];
  return inner ? fallbackOf(inner) : value;
};
const remToPx = (value: string) => parseFloat(value) * 16;
const withPx = (value: string) => (value.endsWith('rem') ? `${value} (${remToPx(value)}px)` : value);

function Table({ caption, rows }: { caption: string; rows: Row[] }) {
  const hasVars = rows.some((row) => row.cssVars);
  return (
    <Unstyled>
      <div style={{ overflowX: 'auto', margin: '1rem 0 2rem' }}>
        <table style={{ ...text, width: '100%', borderCollapse: 'collapse' }} aria-label={caption}>
          <thead>
            <tr>
              <th scope="col" style={cell}>Sample</th>
              <th scope="col" style={cell}>Token</th>
              <th scope="col" style={cell}>{hasVars ? 'Default value' : 'Value'}</th>
              {hasVars && <th scope="col" style={cell}>CSS variables, first one set wins</th>}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.name}>
                <td style={cell}>{row.sample}</td>
                <td style={cell}><code>{row.name}</code></td>
                <td style={cell}>{row.value}</td>
                {hasVars && (
                  <td style={cell}>{row.cssVars?.map((v) => <div key={v}><code>{v}</code></div>)}</td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Unstyled>
  );
}

const checkerboard = 'repeating-conic-gradient(#B0BDC9 0% 25%, #FFFFFF 0% 50%) 0 0 / 0.75rem 0.75rem';

const colorRow = (name: string, value: string): Row => ({
  name,
  value: fallbackOf(value),
  cssVars: cssVarsOf(value),
  sample: (
    <div style={{ width: '4rem', height: '2rem', borderRadius: '0.25rem', border: '1px solid #B0BDC9', background: checkerboard, overflow: 'hidden' }}>
      <div style={{ width: '100%', height: '100%', background: value }} />
    </div>
  ),
});

/** Colors of one group of the exported `colors` object. */
export function ColorTable({ group }: { group: keyof typeof colors }) {
  const rows = Object.entries(colors[group]).map(([key, value]) => colorRow(`colors.${group}.${key}`, value));
  return <Table caption={`${group} colors`} rows={rows} />;
}

/** Colors the library uses that are not in the exported `colors` object. */
export function OtherColorTable() {
  const exported = new Set<string>(Object.values(colors).flatMap((group) => Object.values(group)));
  const rows = Object.entries(palette)
    .filter(([, value]) => !exported.has(value))
    .map(([name, value]) => colorRow(name, value));
  return <Table caption="Other colors" rows={rows} />;
}

const bySize = ([, a]: [string, string], [, b]: [string, string]) => parseFloat(a) - parseFloat(b);
const tokensNamed = (module: Record<string, string>, prefix: string) => (
  Object.entries(module).filter(([name]) => name.startsWith(prefix)).sort(bySize)
);

export function SpacingTable() {
  const rows = tokensNamed(sizing, 'spacing').map(([name, value]) => ({
    name, value: withPx(value), sample: <div style={{ width: value, height: '1rem', background: palette.colorBrand1 }} />,
  }));
  return <Table caption="Spacing" rows={rows} />;
}

export function RadiusTable() {
  const rows = tokensNamed(sizing, 'borderRadius').map(([name, value]) => ({
    name,
    value: withPx(value),
    sample: <div style={{ width: '4rem', height: '4rem', borderRadius: value, border: `2px solid ${palette.colorBrand1}` }} />,
  }));
  return <Table caption="Border radius" rows={rows} />;
}

export function FontSizeTable() {
  const rows = tokensNamed(typography, 'fontSize').map(([name, value]) => ({
    name, value: withPx(value), sample: <span style={{ fontSize: value }}>BigBlueButton</span>,
  }));
  return <Table caption="Font size" rows={rows} />;
}

export function FontWeightTable() {
  const rows = tokensNamed(typography, 'fontWeight').map(([name, value]) => ({
    name, value, sample: <span style={{ fontSize: '1rem', fontWeight: value }}>BigBlueButton</span>,
  }));
  return <Table caption="Font weight" rows={rows} />;
}
