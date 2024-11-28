import { defineConfig } from 'vite';

export default defineConfig({
    
  base: '/SolarSystem/', // GitHub Pages base URL
  build: {
    outDir: 'dist', // Output directory for the build
    assetsDir: 'assets', // Directory for static assets
  },
});
