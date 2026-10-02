import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // GitHub Pages project subpath
  base: '/property-listing-website/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
