import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

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
  plugins: [react()]
})
