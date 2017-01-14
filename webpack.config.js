/* eslint-env node */

const path = require("path")
const webpack = require("webpack")

// Hack to put the NODE_ENV to production when we ask for minified code.
const isProd = process.argv.indexOf("-p") >= 0
process.env.NODE_ENV = isProd ? "production" : "development"

module.exports = {
  entry: [
    path.join(__dirname, "js/main.js")
  ],
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel",
        query: {
          presets: isProd
            ? ["es2015", "babili"]
            : ["es2015"]
        }
      }
    ]
  },
  plugins: [
    new webpack.EnvironmentPlugin(["NODE_ENV"]),
  ]
}
