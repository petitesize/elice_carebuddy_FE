import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      '@assets': '/src/assets',
      '@components': '/src/components',
      '@constants': '/src/constants',
      '@hooks': '/src/hooks',
      '@pages': '/src/pages',
      '@routes': '/src/routes',
      '@services': '/src/services',
      '@utils': '/src/utils',
    }
  }
})
