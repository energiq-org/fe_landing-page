import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "https://energiq-org.github.io/fe_landing-page/",
  plugins: [react()],
})
