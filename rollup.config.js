import path from 'path'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@wessberg/rollup-plugin-ts'
import commonjs from '@rollup/plugin-commonjs'

// Files relative to current working directory
const PACKAGE_ROOT_PATH = process.cwd()
const pkg = require(path.join(PACKAGE_ROOT_PATH, 'package.json'))
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
    typescript(),
    commonjs()
  ]
}
