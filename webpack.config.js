var webpack = require('webpack'),
    path = require('path'),
    HtmlWebpackPlugin	= require('html-webpack-plugin');

var src             = './src',
    entry 		      = path.resolve(src, 'js/index.js'),
    jsPath		      = './js/',
    outputName		  = 'bundle.min.js',
    output		      = path.join(__dirname, 'dist'),
    templates       = path.join(__dirname, src+'/index.html');

module.exports = {
    entry: {
      idex: entry
    },
    output: {
        path: output,
        chunkFilename: './js/[name].bundle.js',
        filename: path.join(jsPath, outputName),
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
                plugins: ['@babel/plugin-syntax-dynamic-import']
              }
            }
          },
          {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
          },
          {
            test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'fonts/'
                }
            }]
          },
          {
            test: /\.(glsl|vs|fs|vert|frag)$/,
            exclude: /node_modules/,
            use: [
              'raw-loader',
              'glslify-loader'
            ]
          },
          {
            test: /\.obj$/,
            use: [{
              loader: 'file-loader',
              options: {
                  name: '[name].[ext]',
                  outputPath: 'obj/'
              }
            }]
          }
        ]
    },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
          template: templates,
          filename: "./index.html"
        })
    ]
};
