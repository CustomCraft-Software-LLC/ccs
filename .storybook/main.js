/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  core: {
    framework: "react"
  },

  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-mdx-gfm"
  ],

  docs: {
    autodocs: "tag",
  },

  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  }
};
export default config;
