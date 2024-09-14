import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'src/components/index.ts',  // Entry point for your component library
  output: [
    {
      file: 'dist/bundle.cjs.js',    // CommonJS output
      format: 'cjs',
      sourcemap: true,               // Enable sourcemaps for debugging
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
      },
    },
    {
      file: 'dist/bundle.esm.js',    // ES Module output for tree-shaking
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    // Prevents bundling peer dependencies (React, ReactDOM)
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
      declaration: true,  // Generates .d.ts files
      declarationDir: 'dist/types',
      sourceMap: true,
    }),

    // Babel for transpiling ES6+, React, and TypeScript
    babel({
      babelHelpers: 'bundled',
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
      exclude: 'node_modules/**',   // Prevents node modules from being transpiled
    }),

    // CSS handling (PostCSS)
    postcss({
      plugins: [],
      minimize: true,  // Minimize CSS output
      sourceMap: true,
      extract: false,  // Keep styles in JS for component encapsulation
    }),

    // Minify the output
    terser({
      compress: {
        drop_console: true,        // Remove console logs in production
        drop_debugger: true,       // Remove debuggers
        passes: 2,                 // Perform multiple passes for better compression
      },
      output: {
        comments: false,           // Remove comments
      },
    }),
  ],

  // Externalize dependencies like React, ReactDOM, etc.
  external: ['react', 'react-dom'],

  // Watch for changes in the source files during development
  watch: {
    include: 'src/**',
  },
};