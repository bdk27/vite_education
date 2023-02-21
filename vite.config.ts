import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'vite_education',
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import 'src/assets/scss/_variable.scss';
          @import 'src/assets/scss/_font.scss';
        `
      }
    }
  },
})
