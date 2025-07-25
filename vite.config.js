import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    // Enable source maps for debugging
    sourcemap: true,
    
    // Optimize chunk splitting
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          icons: ['lucide-react']
        }
      }
    },
    
    // Enable minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    
    // Optimize assets
    assetsInlineLimit: 4096,
    
    // Enable CSS code splitting
    cssCodeSplit: true
  },
  
  // Development server options
  server: {
    port: 3000,
    open: true
  },
  
  // Preview server options
  preview: {
    port: 4173,
    open: true
  }
});