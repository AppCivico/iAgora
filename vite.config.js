import { sentryVitePlugin } from "@sentry/vite-plugin";
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Markdown from 'unplugin-vue-markdown/vite'

export default defineConfig({
  plugins: [vue({
    include: [/\.vue$/, /\.md$/],
  }), Markdown({
    linkify: true,
    typographer: true
  }), sentryVitePlugin({
    org: "appcivico",
    project: "iagora"
  })],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@views': fileURLToPath(new URL('./src/views', import.meta.url)),
      '@styles': fileURLToPath(new URL('./src/styles', import.meta.url)),
      '@images': fileURLToPath(new URL('./src/assets/images', import.meta.url)),
      '@fonts': fileURLToPath(new URL('./src/assets/fonts', import.meta.url)),
    }
  },

  build: {
    sourcemap: true
  }
});