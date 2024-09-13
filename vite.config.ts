import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 8000, // Port in Docker
    watch: {
      usePolling: true // fix for windows hot loading issue
    }
  }
})
