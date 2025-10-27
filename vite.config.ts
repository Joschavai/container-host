import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from "@originjs/vite-plugin-federation";


// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3000
  },
  preview: {
    port: 3000
  },
  plugins: [vue(),
  federation({
    name: "app",
    remotes: {
      contentView: "http://localhost:8081/assets/remoteEntry.js",
      // SideMenuRemote: "http://localhost:8083/",
      // SearchBarRemote: "http://localhost:8082/",
    },
  })
  ],
})
