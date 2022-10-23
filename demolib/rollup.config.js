import typescript from 'rollup-plugin-typescript2';
import { nodeResolve as resolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

import pkg from './package.json';

export default {
  input: 'src/index.ts',
  output: [
    {
      // Build cho trình duyệt.
      name: 'Cee',
      file: 'dist/hello.min.js',
      format: 'iife',
    },
    {
      // Build cho môi trường sử dụng ES modules.
      name: 'Cee',
      file: 'dist/hello.esm.js',
      format: 'es',
    },
    {
      // Build cho môi trường Node.js và trình duyệt.
      name: 'Cee',
      file: 'dist/hello.umd.js',
      format: 'umd',
    },
  ],
  plugins: [
    // babel({
    //   exclude: 'node_modules/**',
    // }),
    resolve({
      browser: true
    }),
    commonjs(),
    typescript({
      typescript: require('typescript'),
    }),
    // terser()
  ],
};
