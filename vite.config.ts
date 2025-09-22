import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react()],
    base: env.VITE_BASE || '/',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          // Use absolute paths or @ alias
          additionalData: `
            @import "@/styles/_variables.scss";
            @import "@/styles/_typography.scss";
          `,
          // Alternative: use relative paths from project root
          // additionalData: `
          //   @import "./src/styles/_variables.scss";
          //   @import "./src/styles/_typography.scss";
          //   @import "./src/styles/_main.scss";
          // `,
        }
      }
    }
  }
})