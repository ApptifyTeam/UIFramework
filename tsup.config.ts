import { defineConfig } from "tsup";
import pkg from "./package.json";

export default defineConfig({
  entry: ["src/index.ts", "src/styles.css"],
  format: ["cjs", "esm"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {}), "react", "react-dom"],
  injectStyle: false,
  esbuildOptions(options) {
    options.banner = {
      js: '"use client";',
    };
  },
});
