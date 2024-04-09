import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
    port: 8088
  },
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()],
    }),

  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
