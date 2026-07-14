/**
 * Regenerate the JSON seed files under backend/db/seed/ from the TypeScript
 * source data. Uses the TypeScript compiler (pure JavaScript — no native
 * binary), so it works identically on Windows, macOS, Linux and WSL, even
 * when node_modules was installed on a different OS.
 *
 * Usage (from the project root):  node scripts/gen-seed.mjs
 */
import ts from 'typescript'
import { createRequire } from 'node:module'
import {
  readdirSync,
  mkdirSync,
  writeFileSync,
  readFileSync,
  rmSync,
} from 'node:fs'
import { resolve, join, dirname } from 'node:path'

const root = process.cwd()
const tmp = resolve(root, 'scripts/.seedtmp')
rmSync(tmp, { recursive: true, force: true })

// The project's package.json declares "type": "module", which would make Node
// treat the transpiled .js files as ESM. A local package.json pins this temp
// tree to CommonJS so require() + extensionless imports resolve correctly.
mkdirSync(tmp, { recursive: true })
writeFileSync(join(tmp, 'package.json'), '{"type":"commonjs"}\n')

/** Transpile one .ts file to CommonJS .js (types stripped, no type-checking). */
function transpileTo(srcFile, outFile) {
  const source = readFileSync(srcFile, 'utf8')
  const { outputText } = ts.transpileModule(source, {
    fileName: srcFile,
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
      esModuleInterop: true,
    },
  })
  mkdirSync(dirname(outFile), { recursive: true })
  writeFileSync(outFile, outputText)
}

// Transpile every data module (CommonJS require() resolves the extensionless
// relative imports between them), plus the export entrypoint.
const dataDir = resolve(root, 'src/data')
for (const file of readdirSync(dataDir)) {
  if (file.endsWith('.ts')) {
    transpileTo(join(dataDir, file), join(tmp, 'src/data', file.replace(/\.ts$/, '.js')))
  }
}
transpileTo(resolve(root, 'scripts/export-data.ts'), join(tmp, 'scripts/export-data.js'))

// Run the transpiled exporter (it writes backend/db/seed/*.json as a side effect).
const require = createRequire(import.meta.url)
require(join(tmp, 'scripts/export-data.js'))

rmSync(tmp, { recursive: true, force: true })
