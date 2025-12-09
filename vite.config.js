import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@dotlottie/player-component/dist/loader': resolve(__dirname, 'src/dotlottie-loader.js'),
    },
  },
})
