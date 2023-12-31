import { resolve } from "path";
import react from '@vitejs/plugin-react';
import { defineConfig } from "vite";

export default defineConfig ({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.tsx"),
      name: "design",
   		 
      fileName: "index",
    },
    rollupOptions: {
      external: ["react"],
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: 'test/setupTests.ts',
  }
});