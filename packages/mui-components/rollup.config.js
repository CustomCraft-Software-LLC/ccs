import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import { visualizer } from 'rollup-plugin-visualizer';

export default {
  input: 'src/components/index.ts',  // Entry point
  output: [
    {
      file: 'dist/bundle.cjs.js',   // CommonJS output
      format: 'cjs',
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
      },
    },
    {
      file: 'dist/bundle.esm.js',   // ES Module output for tree-shaking
      format: 'esm',
    },
  ],
  plugins: [
    // Prevents bundling peer dependencies
    peerDepsExternal(),

    // Resolves node modules (including MUI and React)
    resolve({
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }),

    // Convert CommonJS modules to ES6
    commonjs(),

    // TypeScript plugin for Rollup
    typescript({
      tsconfig: './tsconfig.json',
    }),

    // Babel for transpiling ES6+, React, and TypeScript
    babel({
      babelHelpers: 'bundled',
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
    }),

    // CSS handling (PostCSS)
    postcss({
      plugins: [],
      minimize: true,
    }),

    // Minify the output
    terser(),

    // Analyze the output bundle
    visualizer({
      filename: 'bundle-analysis.html',  // Generates a report on bundle size
      open: true,
    }),
  ],

  // Externalize dependencies like React, ReactDOM, etc.
  external: ['react', 'react-dom'],
};