import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'src/components/index.ts',
  output: {
    file: 'dist/bundle.js',
    format: 'umd',
    name: '@custom-craft-software/mui-components',
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM',
    },
  },
  plugins: [
    peerDepsExternal(), // Automatically externalize peerDependencies in a rollup bundle
    resolve(), // Locate and bundle third-party dependencies in node_modules
    commonjs(), // Convert CommonJS modules to ES6
    typescript({
      tsconfig: './tsconfig.json',
    }),
    babel({
      babelHelpers: 'bundled',
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
    }),
    postcss(), // Process CSS with PostCSS
    terser(), // Minify the bundle
  ],
  external: ['react', 'react-dom'], // Ensure these dependencies are not bundled
};