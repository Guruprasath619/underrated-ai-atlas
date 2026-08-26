import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    // Copy public files to dist root during build
    {
      name: 'copy-public-files',
      apply: 'build',
      generateBundle() {
        const publicDir = path.resolve(__dirname, 'public')
        if (fs.existsSync(publicDir)) {
          const files = fs.readdirSync(publicDir)
          files.forEach(file => {
            const filePath = path.join(publicDir, file)
            const content = fs.readFileSync(filePath, 'utf-8')
            this.emitFile({
              type: 'asset',
              fileName: file,
              source: content,
            })
          })
        }
      }
    }
  ],
  base: '/underrated-ai-atlas/',
})
