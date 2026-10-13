import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    allowedHosts: [
      'wholesome-reflection-production-9cb3.up.railway.app',
      'staraquaservices.in',
      'www.staraquaservices.in',
    ],
  },
})