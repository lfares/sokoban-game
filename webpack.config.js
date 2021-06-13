<<<<<<< HEAD
var path = require('path');

module.exports = {
  entry: './js/modules/main.js',
  mode: 'development',
  output: {
    path: `${__dirname}/js`,
=======
module.exports = {
  entry: './public/javascripts/modules/main.js',
  mode: 'development',
  output: {
    path: `${__dirname}/public/javascripts`,
>>>>>>> express
    filename: 'bundle.js'
  }
};