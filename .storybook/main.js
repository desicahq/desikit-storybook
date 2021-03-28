module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    {
     name: '@storybook/addon-postcss',
     options: {
       postcssLoaderOptions: {
         implementation: require('postcss'),
       },
     },
   },
  ],
  webpackFinal: (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      sideEffects: true,
      use: ['vue-style-loader', 'css-loader', 'sass-loader'],
    });

    return config;
  },
}