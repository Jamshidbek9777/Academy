import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined, // Ensures proper chunking for SPA
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Alias '@' points to the 'src' directory
    },
  },
  server: {
    historyApiFallback: true, // Ensures routing fallback for development
  },
});
