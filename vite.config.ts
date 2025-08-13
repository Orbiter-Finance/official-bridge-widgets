// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  build: {
    outDir: 'lib',
    cssCodeSplit: false,
    // sourcemap: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'cjs'],
      name: 'Bundle',
      fileName: `index`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        assetFileNames: 'index.[ext]',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  plugins: [
    react(),
    tailwindcss(),
    dts({
      tsconfigPath: './tsconfig.app.json'
    })
  ]
})
