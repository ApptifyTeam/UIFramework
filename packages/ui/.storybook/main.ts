// This file has been automatically migrated to valid ESM format by Storybook.
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";
import type { StorybookConfig } from "@storybook/react-vite";
import { join, dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const require = createRequire(import.meta.url);

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}

const reactPath = dirname(require.resolve("react"));
const reactDomPath = dirname(require.resolve("react-dom"));

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  staticDirs: ["../public"],

  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-docs"),
    getAbsolutePath("@storybook/addon-vitest"),
    getAbsolutePath("@storybook/addon-themes"),
    getAbsolutePath("@storybook/addon-a11y")
  ],

  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },

  async viteFinal(config) {
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": resolve(__dirname, "../src"),
      "react": resolve(__dirname, "../node_modules/react"),
      "react/jsx-runtime": resolve(__dirname, "../node_modules/react/jsx-runtime.js"),
      "react/jsx-dev-runtime": resolve(__dirname, "../node_modules/react/jsx-dev-runtime.js"),
      "react-dom": resolve(__dirname, "../node_modules/react-dom"),
      "react-dom/client": resolve(__dirname, "../node_modules/react-dom/client.js"),
    };
    config.resolve.dedupe = config.resolve.dedupe || [];
    const dedupeList = ["react", "react-dom"];
    for (const item of dedupeList) {
      if (!config.resolve.dedupe.includes(item)) {
        config.resolve.dedupe.push(item);
      }
    }
    config.optimizeDeps = config.optimizeDeps || {};
    config.optimizeDeps.include = config.optimizeDeps.include || [];
    const includeList = [
      "react",
      "react/jsx-runtime",
      "react/jsx-dev-runtime",
      "react-dom",
      "react-dom/client"
    ];
    for (const item of includeList) {
      if (!config.optimizeDeps.include.includes(item)) {
        config.optimizeDeps.include.push(item);
      }
    }
    return config;
  }
};
export default config;
