let config = require('./webpack.config');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

config.mode = 'production';

config.plugins.push(
  new BundleAnalyzerPlugin({
    openAnalyzer: false,
    analyzerMode: 'static'
  })
);

config.optimization = {
  minimize: true
};

module.exports = config;
