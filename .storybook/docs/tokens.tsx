import React from 'react';
import { Unstyled } from '@storybook/addon-docs/blocks';
import { colors } from '../../src/stylesheets/colors';
import * as palette from '../../src/stylesheets/palette';
import * as sizing from '../../src/stylesheets/sizing';
import * as typography from '../../src/stylesheets/typography';

// Tables for the token pages.

type Kind = 'color' | 'spacing' | 'radius' | 'fontSize' | 'fontWeight';
type TokenRow = { name: string; value: string; cssVars?: string[] };
type Row = TokenRow & { sample: React.ReactNode };

const cell: React.CSSProperties = {
  padding: '0.5rem 0.75rem', textAlign: 'left', verticalAlign: 'middle', borderBottom: '1px solid #DCE4EC',
};
const text: React.CSSProperties = { fontFamily: 'sans-serif', fontSize: '0.875rem', color: '#393C48' };

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

// The value of a token, with its CSS variables, so that the sample shows what is in use now.
const tokens: Record<string, string> = { ...palette, ...sizing, ...typography };
const currentValue = (name: string): string => {
  const [, group, key] = /^colors\.(\w+)\.(\w+)$/.exec(name) ?? [];
  return group ? (colors as Record<string, Record<string, string>>)[group][key] : tokens[name];
};

const samples: Record<Kind, (value: string) => React.ReactNode> = {
  color: (value) => (
    <div style={{ width: '4rem', height: '2rem', borderRadius: '0.25rem', border: '1px solid #B0BDC9', background: checkerboard, overflow: 'hidden' }}>
      <div style={{ width: '100%', height: '100%', background: value }} />
    </div>
  ),
  spacing: (value) => <div style={{ width: value, height: '1rem', background: palette.colorBrand1 }} />,
  radius: (value) => <div style={{ width: '4rem', height: '4rem', borderRadius: value, border: `2px solid ${palette.colorBrand1}` }} />,
  fontSize: (value) => <span style={{ fontSize: value }}>BigBlueButton</span>,
  fontWeight: (value) => <span style={{ fontSize: '1rem', fontWeight: value }}>BigBlueButton</span>,
};

/** A list of tokens. `npm run tokens` writes the rows into the page, where agents can read them. */
export function TokenTable({ kind, caption, rows }: { kind: Kind; caption: string; rows: TokenRow[] }) {
  return <Table caption={caption} rows={rows.map((row) => ({ ...row, sample: samples[kind](currentValue(row.name)) }))} />;
}
