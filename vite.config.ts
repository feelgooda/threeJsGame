import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  css: {
    preprocessorOptions: {
       less: {
         modifyVars: {
           hack: `true; @import (reference) "${path.resolve(__dirname, 'src/css/common.less')}";`,
         },
         javascriptEnabled: true
       }
    }
  }
})
