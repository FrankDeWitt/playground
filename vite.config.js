// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')
// import vueI18n from '@intlify/vite-plugin-vue-i18n'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    vue(),
    // vueI18n({
    //   include: path.resolve(__dirname, '@/locales/')
    // })
  ],
  server: {
    host: true,
  },
})
