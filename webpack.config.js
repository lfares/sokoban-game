var path = require('path');

module.exports = {
  entry: './js/modules/main.js',
  mode: 'development',
  output: {
    path: `${__dirname}/js`,
    filename: 'bundle.js'
  }
};