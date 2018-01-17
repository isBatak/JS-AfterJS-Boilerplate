const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');

const {ANALYZE} = process.env;

module.exports = {
  webpack(config) {
    const originalEntry = config.entry;

    config.entry = async () => { // eslint-disable-line space-before-function-paren
      const entries = await originalEntry();
      entries['main.js'].unshift(require.resolve('./client/bootstrap.js'));
      return entries;
    };

    if (ANALYZE) {
      config.plugins.push(new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        analyzerPort: 8888,
        openAnalyzer: true,
      }));
    }

    return config;
  },
};
