/// <reference types="vitest" />
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";
import eslint from "vite-plugin-eslint";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    react(),
    react(),
    eslint({ exclude: ["/virtual:/**", "node_modules/**"] }),
  ],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./utils/test/setupTests.js",
  },
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
});
