const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    main: path.resolve(__dirname, '..', './src/app.ts')
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)?$/,
        exclude: [/node_modules/, /build/, /dist/],
        use: [
          {
            loader: 'ts-loader'
          }
        ]
      },
      {
        test: /\.(?:png|jpg|jpeg|gif|ico)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(?:mp3)$/i,
        loader: 'file-loader',
        options: {
          name: './assets/sounds/[hash].[ext]',
        }
      },
      {
        test: /\.(?:woff(2)?|eot|ttf|otf|svg)$/i,
        type: 'asset/inline'
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'bundle-[fullhash].js',
    publicPath: '',
    assetModuleFilename: 'assets/[hash][ext]',
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html')
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[fullhash].css',
      linkType: true
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: './src/public', to: './media'}
      ]
    }),
    new NodePolyfillPlugin(),
    new CleanWebpackPlugin({
      dry: true,
      cleanAfterEveryBuildPatterns: ['build', 'dist'],
    }),
  ]
};
