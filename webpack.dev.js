const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    devtool: 'inline-sourcce-map',
    devServer: {
        contentBase: './dist'
    }
});