import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // 빌드된 파일이 생성될 경로 설정
    rollupOptions: {
      input: './index.html', // 진입점을 index.html로 설정
    },
  },
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
    },
  },
});
