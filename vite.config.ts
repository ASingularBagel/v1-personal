import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { config } from 'dotenv';
config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      '@components': '/src/components',
      '@redux': '/src/redux',
      '@pages': '/src/pages',
      '@hooks': '/src/hooks',
    }
  },
  define: {
    'process.env': process.env,
  },
})
