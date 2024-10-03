import path from 'path';
import typescript from 'rollup-plugin-typescript2';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import replace from '@rollup/plugin-replace';

const isClientBuild = process.env.BUILD_ENV === 'client';

export default {
  input: path.resolve(__dirname, 'src/components/index.ts'),
  output: [
    {
      file: path.resolve(__dirname, 'dist/bundle.cjs.js'),
      format: 'cjs',
      sourcemap: true,
      globals: {
        react: 'React'
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
      preferBuiltins: true,
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }),
    commonjs(),
    typescript({
      tsconfig: path.resolve(__dirname, 'tsconfig.json'),
      useTsconfigDeclarationDir: true,
    }),
    babel({
      babelHelpers: 'bundled',
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
    json(),
    // Add the 'use client' directive when building for client
    replace({
      preventAssignment: true,
      'process.env.BUILD_ENV': JSON.stringify(process.env.BUILD_ENV || 'client'),
      'use client': isClientBuild ? "'use client';" : '',
    }),
  ],
  external: ['react', 'react-dom'],
  watch: {
    include: 'src/**',
  },
};