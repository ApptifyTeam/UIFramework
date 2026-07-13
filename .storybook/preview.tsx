import React from "react";
import type { Preview, ReactRenderer } from "@storybook/react-vite";
import "../src/styles.css";
import MockDate from "mockdate";
import { initialize, mswLoader } from "msw-storybook-addon";
import { mswHandlers } from "./msw-handlers";
import { withThemeByClassName } from "@storybook/addon-themes";
import { DocsContainer } from "@storybook/addon-docs/blocks";
import { themes } from "storybook/theming";

// Detect if running on GitHub Pages to adjust the Service Worker path
const isGitHubPages = window.location.hostname.endsWith("github.io");
const serviceWorkerUrl = isGitHubPages ? "/UIFramework/mockServiceWorker.js" : "/mockServiceWorker.js";

initialize({
  onUnhandledRequest: "bypass",
  serviceWorker: {
    url: serviceWorkerUrl,
  },
});

const preview: Preview = {
  loaders: [mswLoader],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    msw: { handlers: mswHandlers },

    docs: {
      container: (props: any) => {
        // Read the current theme from the Storybook store globals
        const globals = props.context.store?.globals?.globals || {};
        const selectedTheme = globals.theme || "light";
        const isDark = selectedTheme === "dark";
        return (
          <DocsContainer
            {...props}
            theme={isDark ? themes.dark : themes.light}
          />
        );
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo"
    }
  },
  decorators: [
    withThemeByClassName<ReactRenderer>({
      themes: {
        light: "",
        dark: "dark",
      },
      defaultTheme: "light",
    }),
  ],
  async beforeEach() {
    MockDate.set("2024-04-01T12:00:00Z");
  },
};

export default preview;
