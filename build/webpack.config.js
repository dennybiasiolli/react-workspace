import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import module from './webpack.module';

export default {
  entry: './src',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  module,
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};
