import { defineConfig } from 'vite';
import { react } from '@vitejs/plugin-react';

export default defineConfig({
  server: {
    proxy: {
      "/v2": "https://newsapi.org"
    }
  },
  plugins: [react]
})
