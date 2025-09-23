import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const APP_ROOT = process.cwd(); // use current working dir so config is correct when running inside client

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // when running in client/, "@/src" -> client/src
      "@": path.resolve(APP_ROOT, "src"),
      // shared and assets are one level up from client
      "@shared": path.resolve(APP_ROOT, "../shared"),
      "@assets": path.resolve(APP_ROOT, "../attached_assets"),
    },
  },
  // use the current working directory as Vite root
  root: APP_ROOT,
  build: {
    // output relative to root (client/dist when root=client)
    outDir: "dist",
    emptyOutDir: true,
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});