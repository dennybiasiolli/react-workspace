export default {
  rules: [
    {
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      use: [
        'babel-loader?cacheDirectory=true',
        'eslint-loader',
      ],
    },
  ],
};
