import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    proxy: {
      '/api': {
        target: 'https://victorious-vacation-03e7c67dc.strapiapp.com',
        changeOrigin: true,
        secure: false,
      }
    }
  }
})