const path = require('path')
const ESLintPlugin = require('eslint-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: '/src/index.jsx',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
    clean: true
  },
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  devServer: {
    port: 3000,
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
    extensions: ['.js'] // TODO add JSX extension to allow webpack make imports of such files (without specifying extension in import statement)
  },
  module: {
    rules: [
      {
        test: /\.js(x)$/,
        exclude: /node_modules/,
        use: {
          loader: '' /* TODO set correct loader to make code transpilation from jsx */,
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
      extensions: ['js', 'jsx'],
      exclude: 'node_modules'
    }),
    new HtmlWebpackPlugin({
      template: '' // TODO create html template file and set correct path to html template file
    })
  ]
}
