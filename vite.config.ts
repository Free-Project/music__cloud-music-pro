import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import viteEslint from "vite-plugin-eslint";
import viteStylelint from "vite-plugin-stylelint";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteEslint(), viteStylelint(), svgr()],
  resolve: {
    alias: {
      "~@semi-bot": path.join(__dirname, "./node_modules/@semi-bot"),
      "@assets": path.join(__dirname, "./src/assets"),
      "@": path.join(__dirname, "./src")
    }
  },
  server: {
    proxy: {
      "/api": {
        target: "https://music-api.nice-boy.com/",
        changeOrigin: true,
        secure: false, // 本地 http://localhost 跨域请求线上url接口时需要此配置
        rewrite: (path) => path.replace(/^\/api/, "")
      }
    }
  }
});
