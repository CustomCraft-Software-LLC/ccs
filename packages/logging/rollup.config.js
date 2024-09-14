import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import path from 'path';
import { terser } from '@rollup/plugin-terser'; // Correct import

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs', // CommonJS format
      exports: 'auto', // Automatically export named and default exports
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm', // ES Module format
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      tsconfig: path.resolve(__dirname, 'tsconfig.json'),
    }),
    terser(), // Minify the bundle
  ],
  external: [
    // List any external dependencies here
    'express',
    'lodash',
    // Add other external dependencies as needed
  ],
};