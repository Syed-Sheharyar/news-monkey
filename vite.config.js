import { defineConfig } from 'vite';
import { react } from '@vitejs/plugin-react';

export default defineConfig({
  server: {
    proxy: {
      "/v2/top-headlines": "https://newsapi.org",
      "/v2/everything": "https://newsapi.org"
    }
  },
  plugins: [react]
})