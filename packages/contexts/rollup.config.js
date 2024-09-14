import path from 'path';
import typescript from 'rollup-plugin-typescript2';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';

const packageJson = require('./package.json');

export default {
  input: path.resolve(__dirname, 'src/index.ts'),
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    typescript({
      tsconfig: path.resolve(__dirname, 'tsconfig.json'),
    }),
    terser(), // Optional: Minify the output
  ],
  external: [
    'react',
    'react-dom',
    'axios',
  ],
};