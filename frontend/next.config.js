/* eslint-disable @typescript-eslint/no-var-requires */
const withPlugins = require('next-compose-plugins');
const withCss = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');
const nextRuntimeDotenv = require('next-runtime-dotenv');

const withConfig = nextRuntimeDotenv({ public: ['API_URL', 'API_KEY'] });

const nextConfig = {
  analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
  analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
  bundleAnalyzerConfig: {
    server: {
      analyzerMode: 'static',
      reportFilename: '../bundles/server.html'
    },
    browser: {
      analyzerMode: 'static',
      reportFilename: '../bundles/client.html'
    }
  },
  publicRuntimeConfig: {
    PROXY_MODE: process.env.PROXY_MODE,
    API_URL: process.env.API_URL,
    API_KEY: process.env.API_KEY,
    STATIC_PATH: process.env.STATIC_PATH
  }
};

module.exports = withConfig(
  withPlugins(
    [
      [
        withCss,
        {
          cssModules: true
        }
      ],
      [
        withSass,
        {
          cssModules: true,
          cssLoaderOptions: {
            importLoaders: 1,
            localIdentName: '[local]--[hash:base64:5]'
          },
          sassLoaderOptions: {
            sassOptions: {
              includePaths: ['src/static/styles'] // @import 'variables'; # loads (src/styles/varialbes.scss), you got it..
            }
          }
        }
      ],
      [withBundleAnalyzer]
    ],
    nextConfig
  )
);
