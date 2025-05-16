import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Movie-Streaming-App/', // 👈 Add this line
  plugins: [react()],
})
