import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vDebugger from "vite-plugin-debugger/eruda";
import path from "node:path";

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    vDebugger({
      debug: mode !== "production",
      eruda: {
        options: { tool: ["console", "network", "elements"], useShadowDom: true },
      },
    }),
  ],
  base: "/color-app/",
  resolve: {
    alias: { 
      "@": path.resolve(import.meta.dirname, "./src"),
      "@css": path.resolve(import.meta.dirname, "./src/styles"),
      "@views": path.resolve(import.meta.dirname, "./src/views"),
      "@hooks": path.resolve(import.meta.dirname, "./src/hooks"),
      "@stores": path.resolve(import.meta.dirname, "./src/stores"),
      "@router": path.resolve(import.meta.dirname, "./src/router"),
      "@layouts": path.resolve(import.meta.dirname, "./src/components/layouts"),
      "@widgets": path.resolve(import.meta.dirname, "./src/components/widgets"),
    },
  },
}));