import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./vitest.setup.js"],
    deps: {
      inline: ["@csstools/css-calc", "@asamuzakjp/css-color"]
    },
  },
  ssr: {
    noExternal: ["@csstools/css-calc", "@asamuzakjp/css-color"],
  },
  base: "/GITHUB-ACTIONS/",
});
