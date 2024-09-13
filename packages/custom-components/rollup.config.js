import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import typescript from '@rollup/plugin-typescript';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs',
    name: '@custom-craft-software/custom-components',
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM',
    },
    sourcemap: false, // Disable source maps for production
  },
  plugins: [
    peerDepsExternal(), // Exclude peer dependencies from bundle
    resolve(), // Resolve node_modules
    commonjs(), // Convert CommonJS modules to ES6
    typescript({
      tsconfig: './tsconfig.json', // Use the tsconfig.json for TypeScript configuration
      sourceMap: false, // Disable TypeScript source maps for production
      declaration: false, // Skip declaration file generation if not needed
    }),
    babel({
      babelHelpers: 'bundled',
      presets: ['@babel/preset-env', '@babel/preset-react'],
      exclude: 'node_modules/**', // Exclude dependencies from Babel processing
    }),
    postcss({
      plugins: [
        require('autoprefixer')(), // Initialize autoprefixer
        require('cssnano')({ preset: 'default' }), // Minify CSS
      ],
      extract: true, // Extract CSS to a separate file
      minimize: true, // Minimize CSS
    }),
    terser(), // Minify JavaScript
    sizeSnapshot(), // Snapshot the size of the bundle
  ],
};