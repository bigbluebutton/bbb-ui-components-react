import React from 'react';
import { Unstyled } from '@storybook/addon-docs/blocks';
import { colors } from '../../src/stylesheets/colors';
import * as palette from '../../src/stylesheets/palette';
import * as shadows from '../../src/stylesheets/shadows';
import * as sizing from '../../src/stylesheets/sizing';
import * as typography from '../../src/stylesheets/typography';

// Tables for the token pages.

type Kind = 'color' | 'spacing' | 'radius' | 'shadow' | 'fontFamily' | 'fontSize' | 'fontWeight';
type TokenRow = { name: string; value: string; pointsTo?: string; purpose?: string; figma?: string[]; cssVars?: string[] };
type Row = TokenRow & { sample: React.ReactNode };

const cell: React.CSSProperties = {
  padding: '0.5rem 0.75rem', textAlign: 'left', verticalAlign: 'middle', borderBottom: '1px solid #DCE4EC',
};
const text: React.CSSProperties = { fontFamily: 'sans-serif', fontSize: '0.875rem', color: '#393C48' };

function Table({ caption, rows }: { caption: string; rows: Row[] }) {
  const hasPurpose = rows.some((row) => row.purpose);
  const hasPointsTo = rows.some((row) => row.pointsTo);
  const hasFigma = rows.some((row) => row.figma);
  const hasVars = rows.some((row) => row.cssVars);
  return (
    <Unstyled>
      <div style={{ overflowX: 'auto', margin: '1rem 0 2rem' }}>
        <table style={{ ...text, width: '100%', borderCollapse: 'collapse' }} aria-label={caption}>
          <thead>
            <tr>
              <th scope="col" style={cell}>Sample</th>
              <th scope="col" style={cell}>Token</th>
              <th scope="col" style={cell}>{hasPointsTo ? 'Points to, default value' : hasVars ? 'Default value' : 'Value'}</th>
              {hasPurpose && <th scope="col" style={cell}>Use it for</th>}
              {hasFigma && <th scope="col" style={cell}>Figma name</th>}
              {hasVars && <th scope="col" style={cell}>CSS variables, first one set wins</th>}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.name}>
                <td style={cell}>{row.sample}</td>
                <td style={cell}><code>{row.name}</code></td>
                <td style={cell}>{row.pointsTo && <div><code>{row.pointsTo}</code></div>}{row.value}</td>
                {hasPurpose && <td style={cell}>{row.purpose ?? 'Not decided yet'}</td>}
                {hasFigma && <td style={cell}>{row.figma?.map((name) => <div key={name}>{name}</div>)}</td>}
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
const tokens: Record<string, string> = { ...palette, ...sizing, ...shadows, ...typography };
// A primitive is not exported, so it has none.
const currentValue = (name: string): string | undefined => {
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
  shadow: (value) => <div style={{ width: '4rem', height: '3rem', margin: '0.5rem', borderRadius: sizing.borderRadiusSmall, background: palette.colorBackgroundWhite, boxShadow: value }} />,
  fontFamily: (value) => <span style={{ fontFamily: value, fontSize: '1rem' }}>BigBlueButton</span>,
  fontSize: (value) => <span style={{ fontSize: value }}>BigBlueButton</span>,
  fontWeight: (value) => <span style={{ fontSize: '1rem', fontWeight: value }}>BigBlueButton</span>,
};

/** A list of tokens. `npm run tokens` writes the rows into the page, where agents can read them. */
export function TokenTable({ kind, caption, rows }: { kind: Kind; caption: string; rows: TokenRow[] }) {
  return <Table caption={caption} rows={rows.map((row) => ({ ...row, sample: samples[kind](currentValue(row.name) ?? row.value) }))} />;
}

type Swatch = { name: string; value: string; figma?: string[]; purpose?: string };

const swatchText: React.CSSProperties = { ...text, fontSize: '0.75rem', marginTop: '0.25rem', overflowWrap: 'anywhere' };
const swatchColor = (value: string) => (
  <div style={{ height: '2.5rem', borderRadius: '0.25rem', border: '1px solid #B0BDC9', background: checkerboard, overflow: 'hidden' }}>
    <div style={{ height: '100%', background: value }} />
  </div>
);

/** One row of primitives. `npm run tokens` writes the rows into the page, as for TokenTable. */
export function Swatches({ caption, rows }: { caption: string; rows: Swatch[] }) {
  return (
    <Unstyled>
      <div style={{ ...text, fontWeight: 600, margin: '1rem 0 0.5rem' }}>{caption}</div>
      <ul aria-label={caption} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(5rem, 1fr))', gap: '0.75rem', listStyle: 'none', margin: 0, padding: 0 }}>
        {rows.map((row) => (
          <li key={row.name}>
            {swatchColor(row.value)}
            <div style={swatchText}><code>{row.name.replace('palette.', '')}</code></div>
            <div style={swatchText}>{row.value}</div>
          </li>
        ))}
      </ul>
    </Unstyled>
  );
}

const LAYERS = ['Primitive', 'Semantic', 'Component'];

/** An example of how a color in each layer points to one in the layer before it. */
export function ColorChain({ steps }: { steps: Swatch[] }) {
  return (
    <Unstyled>
      <ol style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', listStyle: 'none', margin: '1rem 0 2rem', padding: 0 }}>
        {steps.map((step, i) => (
          <li key={step.name} style={{ flex: '1 1 12rem' }}>
            <div style={{ ...text, fontWeight: 600, marginBottom: '0.5rem' }}>{i > 0 && <span aria-hidden="true">→ </span>}{LAYERS[i]}</div>
            {swatchColor(currentValue(step.name) ?? step.value)}
            <div style={swatchText}><code>{step.name}</code></div>
            <div style={swatchText}>{step.purpose || step.value}</div>
          </li>
        ))}
      </ol>
    </Unstyled>
  );
}
