import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    open: true,        // automatically system browser mein open karega
    port: 5173,        // port fix
    host: false,
  },
})