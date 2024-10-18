export default {
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-essentials'],
  framework: '@storybook/react-webpack5',
  core: {
    builder: '@storybook/builder-webpack5',
  },
};