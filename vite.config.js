import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Caminhos relativos: funciona no Live Server, no Vite local e no GitHub Pages.
  base: './',
  plugins: [react()],
  preview: {
    port: 5500,
    open: true,
  },
});
