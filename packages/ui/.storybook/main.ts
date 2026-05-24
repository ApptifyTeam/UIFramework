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
    getAbsolutePath("@storybook/addon-vitest")
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
      "react": reactPath,
      "react-dom": reactDomPath,
    };
    config.resolve.dedupe = config.resolve.dedupe || [];
    if (!config.resolve.dedupe.includes("react")) {
      config.resolve.dedupe.push("react");
    }
    if (!config.resolve.dedupe.includes("react-dom")) {
      config.resolve.dedupe.push("react-dom");
    }
    config.optimizeDeps = config.optimizeDeps || {};
    config.optimizeDeps.exclude = config.optimizeDeps.exclude || [];
    if (!config.optimizeDeps.exclude.includes("react")) {
      config.optimizeDeps.exclude.push("react");
    }
    if (!config.optimizeDeps.exclude.includes("react-dom")) {
      config.optimizeDeps.exclude.push("react-dom");
    }
    return config;
  }
};
export default config;
