import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // Yahan 'plugin-react' add kiya hai
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})