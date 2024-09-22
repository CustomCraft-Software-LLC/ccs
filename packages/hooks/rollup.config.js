import path from 'path';
import typescript from 'rollup-plugin-typescript2';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';

export default {
  input: path.resolve(__dirname, 'src/index.ts'),
  output: [
    {
      file: path.resolve(__dirname, 'dist/index.cjs.js'),  // Output for CommonJS
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: path.resolve(__dirname, 'dist/index.esm.js'), // Output for ESM
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