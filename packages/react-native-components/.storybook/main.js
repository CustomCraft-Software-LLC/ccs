/** @type { import('@storybook/react-native').StorybookConfig } */
const config = {
  framework: {
    name: "@storybook/react-native",
    options: {},
  },
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"], // Adjust to your story file locations
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
  docs: {
    autodocs: true,
  },
};

export default config;
