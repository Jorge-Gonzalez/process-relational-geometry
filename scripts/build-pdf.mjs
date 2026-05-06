import { execFile } from 'child_process'
import { mkdirSync, copyFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const texFile = resolve(root, 'paper/process_relational_geometry.tex')
const logsDir = resolve(root, 'logs')
const distDir = resolve(root, 'dist')

mkdirSync(logsDir, { recursive: true })
mkdirSync(distDir, { recursive: true })

const args = [
  '-interaction=nonstopmode',
  `-output-directory=${logsDir}`,
  texFile,
]

console.log('Compiling LaTeX...')

execFile('pdflatex', args, (err, stdout, stderr) => {
  if (err) {
    console.error(stdout || stderr)
    process.exit(1)
  }

  // Run twice to resolve references/TOC
  execFile('pdflatex', args, (err2, stdout2, stderr2) => {
    if (err2) {
      console.error(stdout2 || stderr2)
      process.exit(1)
    }

    const src = resolve(logsDir, 'process_relational_geometry.pdf')
    const dest = resolve(distDir, 'process_relational_geometry.pdf')
    copyFileSync(src, dest)
    console.log('PDF written to dist/process_relational_geometry.pdf')
  })
})
