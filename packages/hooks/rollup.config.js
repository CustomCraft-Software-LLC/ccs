import path from 'path';
import typescript from 'rollup-plugin-typescript2';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import packageJson from './package.json';

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
    terser(), 
  ],
  external: [
    'react',
    'react-dom',
    'tslib', 
  ],
};