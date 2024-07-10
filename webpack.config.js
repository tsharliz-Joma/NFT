const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './api.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    library: 'MyLibrary',
    libraryTarget: 'umd',
  },
  mode: 'production',
  plugins: [
    new Dotenv({
      path: './.env.local', // Load .env.local file
    }),
  ],
};