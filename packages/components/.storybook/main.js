/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },

  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],

  docs: {},

  typescript: {
    reactDocgen: "react-docgen-typescript"
  }
};

export default config;
