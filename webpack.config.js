module.exports = {
  entry: __dirname + '/client/src/app.jsx',
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/client/dist'
  }
};