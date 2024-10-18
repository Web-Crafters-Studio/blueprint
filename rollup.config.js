import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'
import postcss from 'rollup-plugin-postcss'

export default {
  input: 'src/index.ts',
  output: [
    {
      dir: 'dist',
      format: 'esm',
      sourcemap: true,
      preserveModules: true,
      preserveModulesRoot: 'src',
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve({
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      moduleDirectories: ['node_modules'],
      exportConditions: ['node', 'module', 'import'],
    }),
    typescript({
      tsconfig: './tsconfig.json',
      useTsconfigDeclarationDir: true,
    }),
    postcss(),
  ],
 /*  external: [
    // Exclure les dépendances de la compilation
    ...Object.keys(import ('./package.json').peerDependencies || {}),
  ], */
}
