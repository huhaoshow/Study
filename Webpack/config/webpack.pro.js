const merge = require('webpack-merge');
const base = require('./webpack.base.js');

// 合并base和dev
module.exports = merge(base, {
    mode: "production"

});