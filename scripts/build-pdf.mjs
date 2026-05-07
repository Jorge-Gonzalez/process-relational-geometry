import { execSync } from 'child_process'
import { mkdirSync, renameSync, existsSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const texFile = resolve(root, 'paper/process_relational_geometry.tex')
const logsDir = resolve(root, 'logs')
const distDir = resolve(root, 'dist')

mkdirSync(logsDir, { recursive: true })
mkdirSync(distDir, { recursive: true })

const pdflatexArgs = [
  '-interaction=nonstopmode',
  `-output-directory=${logsDir}`,
  `"${texFile}"`,
].join(' ')

console.log('Compiling LaTeX...')

try {
  // Run pdflatex twice to resolve references/TOC
  execSync(`pdflatex ${pdflatexArgs}`, { stdio: 'inherit' })
  execSync(`pdflatex ${pdflatexArgs}`, { stdio: 'inherit' })

  const src = resolve(logsDir, 'process_relational_geometry.pdf')
  const dest = resolve(distDir, 'process_relational_geometry.pdf')

  if (existsSync(src)) {
    renameSync(src, dest)
    console.log('\nSuccess: PDF moved to dist/process_relational_geometry.pdf')
  } else {
    console.error('\nError: PDF was not generated.')
    process.exit(1)
  }
} catch (err) {
  console.error('\nError: LaTeX compilation failed.')
  process.exit(1)
}
