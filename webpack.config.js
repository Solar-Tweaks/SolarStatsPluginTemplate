const { join } = require('node:path');
const package = require('./package.json');

module.exports = {
  target: 'node',
  mode: 'production',
  entry: join(__dirname, package.main),
  output: {
    filename: `${package.name}-v${package.version}.js`,
    path: join(__dirname, 'dist'),
  },
};
