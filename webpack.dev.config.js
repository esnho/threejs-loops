let config = require('./webpack.config');

config.mode = 'development';

config.devServer = {
  contentBase: config.output.path,
  compress: true,
  port: 8080
};

module.exports = config;
