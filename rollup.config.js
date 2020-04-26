import path from 'path'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'

const PACKAGE_ROOT_PATH = process.cwd()
const pkg = require(path.join(PACKAGE_ROOT_PATH, 'package.json'))
const tsconfigPath = path.join(PACKAGE_ROOT_PATH, 'tsconfig.build.json')
const inputFile = path.join(PACKAGE_ROOT_PATH, 'src/index.ts')

export default {
  input: inputFile,
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true
    }
  ],
  external: [
    ...Object.keys(pkg.peerDependencies || {})
  ],
  plugins: [
    resolve(),
    typescript({
      tsconfig: tsconfigPath
    }),
    commonjs()
  ]
}
