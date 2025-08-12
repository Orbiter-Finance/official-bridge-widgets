import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  server: {
    port: 3456,
    host: true
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, '../src')
    }
  },
  plugins: [react(), tailwindcss()]
})
