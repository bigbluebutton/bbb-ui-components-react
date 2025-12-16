import path from 'path';

export default {
  entry: {
    Accordion: './src/components/Accordion/index.ts',
    Button: './src/components/Button/index.ts',
    Checkbox: './src/components/Checkbox/index.ts',
    Divider: './src/components/Divider/index.ts',
    Hint: './src/components/Hint/index.ts',
    Modal: './src/components/Modal/index.ts',
    Navigation: './src/components/Navigation/index.ts',
    Select: './src/components/Select/index.ts',
    Spinner: './src/components/Spinner/index.ts',
    TextAreaInput: './src/components/TextAreaInput/index.ts',
    TextInput: './src/components/TextInput/index.ts',
    Toggle: './src/components/Toggle/index.ts',
    Typography: './src/components/Typography/index.ts',
    index: './src/index.ts',
  },
  output: {
    path: path.resolve('./dist/components'),
    filename: '[name].js',
    library: {
      type: 'umd',
    },
    globalObject: 'this',
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
    'styled-components': 'styled-components',
    'react-modal': 'react-modal',
    'react-icons': 'react-icons',
    '@tippyjs/react': '@tippyjs/react',
    'tippy.js': 'tippy.js',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
    fallback: {
      fs: false,
      net: false,
      tls: false,
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
