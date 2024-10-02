import path from 'path';
import typescript from 'rollup-plugin-typescript2';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import babel from 'rollup-plugin-babel'; // Old version of the Babel plugin
import commonjs from 'rollup-plugin-commonjs'; // Old version of the CommonJS plugin
import resolve from 'rollup-plugin-node-resolve'; // Old version of the Node Resolve plugin

export default {
  input: path.resolve(__dirname, 'src/components/index.ts'), // Entry point for your React component library
  output: [
    {
      file: path.resolve(__dirname, 'dist/bundle.cjs.js'), // CommonJS output
      format: 'cjs',
      sourcemap: true,
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
      },
    },
    {
      file: path.resolve(__dirname, 'dist/bundle.esm.js'), // ES Module output
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
  external: ['react', 'react-dom'], // External dependencies
  watch: {
    include: 'src/**', // Watching for changes
  },
};