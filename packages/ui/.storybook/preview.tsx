import React, { useEffect } from "react";
import type { Preview } from "@storybook/react-vite";
import "../src/styles.css";
import MockDate from "mockdate";
import { initialize, mswLoader } from "msw-storybook-addon";
import { mswHandlers } from "./msw-handlers";

initialize({ onUnhandledRequest: "bypass" });

const preview: Preview = {
  loaders: [mswLoader],
  globalTypes: {
    theme: {
      description: "Theme for preview",
      toolbar: {
        title: "Theme",
        icon: "mirror",
        items: [
          { value: "light", title: "Light", icon: "sun" },
          { value: "dark", title: "Dark", icon: "moon" },
          { value: "side-by-side", title: "Side by side", icon: "sidebyside" },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: "light",
  },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    msw: { handlers: mswHandlers },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || "light";

      useEffect(() => {
        const rootEl = document.documentElement;
        if (theme === "dark") {
          rootEl.classList.add("dark");
        } else {
          rootEl.classList.remove("dark");
        }
      }, [theme]);

      if (theme === "side-by-side") {
        return (
          <div style={{ display: "flex", gap: "2rem" }}>
            <div
              className="light"
              style={{
                flex: 1,
                padding: "1.5rem",
                borderRadius: "0.75rem",
                backgroundColor: "hsl(0 0% 100%)",
                color: "hsl(222.2 84% 4.9%)",
                border: "1px solid hsl(214.3 31.8% 91.4%)",
              }}
            >
              <div
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  marginBottom: "1rem",
                  opacity: 0.5,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                Light
              </div>
              <Story />
            </div>
            <div
              className="dark"
              style={{
                flex: 1,
                padding: "1.5rem",
                borderRadius: "0.75rem",
                backgroundColor: "hsl(222.2 84% 4.9%)",
                color: "hsl(210 40% 98%)",
                border: "1px solid hsl(217.2 32.6% 17.5%)",
              }}
            >
              <div
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  marginBottom: "1rem",
                  opacity: 0.5,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                Dark
              </div>
              <Story />
            </div>
          </div>
        );
      }

      return (
        <div
          style={{
            padding: "1.5rem",
            minHeight: "100%",
            backgroundColor:
              theme === "dark" ? "hsl(222.2 84% 4.9%)" : "hsl(0 0% 100%)",
            color:
              theme === "dark" ? "hsl(210 40% 98%)" : "hsl(222.2 84% 4.9%)",
            transition: "background-color 0.3s ease, color 0.3s ease",
          }}
        >
          <Story />
        </div>
      );
    },
  ],
  async beforeEach() {
    MockDate.set("2024-04-01T12:00:00Z");
  },
};

export default preview;
