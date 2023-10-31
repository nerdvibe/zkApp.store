import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";

const PROJECT_ROOT = __dirname;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  envDir: PROJECT_ROOT,
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    port: 3000,
  },
});
