import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import copy from 'rollup-plugin-copy';

const packageJson = require('../package.json');

export default {
  input: 'src/index.ts',
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
    resolve({ preferBuiltins: true, mainFields: ['browser'] }),
    commonjs(),
    json(),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss(),
    copy({
      targets: [
        {
          src: 'src/variables.scss',
          dest: 'dist',
          rename: 'variables.scss',
        },
        {
          src: 'src/typography.scss',
          dest: 'dist',
          rename: 'typography.scss',
        },
      ],
    }),
  ],
};
