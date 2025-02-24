import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,  // Enables global test functions (describe, it, expect)
    environment: 'jsdom', // Simulates a browser environment
    setupFiles: './src/setupTests.js', // Setup file for global test configurations
  },
});