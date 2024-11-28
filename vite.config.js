import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/SolarSystem/', // GitHub Pages base URL
  build: {
    outDir: 'dist', // Output directory for the build
    assetsDir: 'assets', // Directory for static assets
    rollupOptions: {
      // Multi-page setup
      input: {
        main: resolve(__dirname, 'index.html'), // Entry for main page
        planetinfo: resolve(__dirname, 'planet-info.html'), // Entry for planet info page
      },
    },
  },
});
