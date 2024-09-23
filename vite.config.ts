import path from "node:path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import mock from "./mock/vitePluginMock";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [vue(), mock()],
});
