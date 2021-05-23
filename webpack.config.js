module.exports = {
  entry: './public/javascripts/modules/main.js',
  mode: 'development',
  output: {
    path: `${__dirname}/public/javascripts`,
    filename: 'bundle.js'
  }
};