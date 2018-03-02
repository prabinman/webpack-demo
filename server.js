const express = require('express');
const webpack = require('webpack');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

app.get('/', function (req, res) {
    res.send('hello world');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!\n');
});