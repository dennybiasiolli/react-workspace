import baseConfig from './webpack.config.babel';

export default Object.assign({}, baseConfig, {
  mode: 'production',
});
