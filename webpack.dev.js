const productionConfig = require('./webpack.config');

productionConfig.mode = 'development';

module.exports = productionConfig;