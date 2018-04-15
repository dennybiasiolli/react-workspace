import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import baseConfig from './webpack.config';

export default Object.assign({}, baseConfig, {
  mode: 'production',
});
