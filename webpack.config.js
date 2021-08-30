const path = require('path')
const ESLintPlugin = require('eslint-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: '/src/index.jsx',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
    clean: true,
    publicPath: '/'
  },
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  devServer: {
    port: 9000,
    historyApiFallback: true,
    client: {
      overlay: {
        errors: true,
        warnings: false
      }
    }
  },
  devtool: 'eval-source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },
  module: {
    rules: [
      {
        test: /\.js(x)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {}
        }
      },
      {
        test: /\.(png|svg|jpg)$/,
        use: 'file-loader'
      }
    ]
  },
  plugins: [
    new ESLintPlugin({
      extensions: ['js', 'jsx']
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
}
