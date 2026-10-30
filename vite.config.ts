import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import { viteSingleFile } from 'vite-plugin-singlefile'

// base './' keeps asset paths relative, so the same build works on jcsystemscr.com and in a preview.
// `npm run vista-local` builds everything into one HTML file that opens with a double-click (file://),
// which a normal build can't do because browsers block module scripts loaded from disk.
export default defineConfig(({ mode }) => ({
  base: './',
  plugins: [react(), tailwindcss(), ...(mode === 'archivo' ? [viteSingleFile()] : [])],
  build: mode === 'archivo' ? { outDir: 'vista-local', assetsInlineLimit: Infinity } : undefined,
}))
