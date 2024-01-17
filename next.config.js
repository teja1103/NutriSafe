const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const withCSS = require('@zeit/next-css');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = withPlugins([
  [withImages],
  [withCSS],
  {
    webpack(config, { isServer }) {
      if (!isServer) {
        config.plugins.push(new MiniCssExtractPlugin({
          filename: 'styles.css', // Customize the filename as needed
        }));
      }

      return config;
    },
  },
]);
