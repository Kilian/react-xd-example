module.exports = {
  entry: "./src/main.jsx",
  output: {
    path: __dirname,
    filename: "main.js",
    libraryTarget: "commonjs2"
  },
  devtool: "none", // prevent webpack from using eval() on my module
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: [require("@babel/preset-react")]
        }
      }
    ]
  },
  externals: {
    scenegraph: "scenegraph"
  }
};
