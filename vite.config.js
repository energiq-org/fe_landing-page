import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default ({ mode }) => ({
  base: mode === 'production' ? '/' : '/fe_landing-page/',
  plugins: [react()],
});