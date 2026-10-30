import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// base './' keeps asset paths relative, so the same build works on jcsystemscr.com and in a preview
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
})
