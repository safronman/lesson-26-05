import addonDocs from "@storybook/addon-docs";
import addonA11y from "@storybook/addon-a11y";
import { definePreview } from "@storybook/react-vite";
import "../src/styles/tokens.css";
import "../src/index.css";
import { initialize, mswLoader } from "msw-storybook-addon";
import { mswHandlers } from "./msw-handlers";

initialize({ onUnhandledRequest: "bypass" });

export default definePreview({
  loaders: [mswLoader],

  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },

    msw: {
      handlers: mswHandlers,
    },
  },

  addons: [addonA11y(), addonDocs()]
});
