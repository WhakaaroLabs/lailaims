import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  plugins: [vue(), UnoCSS()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})


// 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