import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import envCompatible from 'vite-plugin-env-compatible'

// https://vitejs.dev/config/
export default defineConfig({
  envPrefix: "REACT_APP_",


  plugins: [
    envCompatible(),
    react()
  ],
  // server: {
  //   //Ensure karta hai ki server har route ko fallback karke index.html file serve kare.
  //   historyApiFallback: true,
  // },
  server: {
    proxy: {
      '/api': {
        target: 'https://localhost:2025', // Backend URL
        changeOrigin: true,
        secure: false, // If using self-signed certificates in development
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
