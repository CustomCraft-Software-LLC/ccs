import path from 'path';
import typescript from 'rollup-plugin-typescript2';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: path.resolve(__dirname, 'src/index.ts'),
  output: [
    {
      file: path.resolve(__dirname, 'dist/bundle.cjs.js'),
      format: 'cjs',
      sourcemap: true,
      globals: {
        react: 'React',
        'react-native': 'ReactNative',
      },
    },
    {
      file: path.resolve(__dirname, 'dist/bundle.esm.js'),
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve({
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }),
    commonjs(),
    typescript({
      tsconfig: path.resolve(__dirname, 'tsconfig.json'),
      declaration: true,
      declarationDir: path.resolve(__dirname, 'dist/types'),
      sourceMap: true,
    }),
    babel({
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
      exclude: 'node_modules/**',
    }),
    terser({
      compress: {
        drop_console: true,
        drop_debugger: true,
        passes: 2,
      },
      output: {
        comments: false,
      },
    }),
  ],
  external: ['react', 'react-dom', 'react-native'],
  watch: {
    include: 'src/**',
  },
};