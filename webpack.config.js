const webpack = require('webpack');
const path = require('path');
const fs = require('fs');

const externals = fs.readdirSync('node_modules')
    .filter(x => ['.bin'].indexOf(x) === -1)
    .reduce((obj, mod) => {
        obj[mod] = 'commonjs ' + mod;
        return obj;
    }, {});

externals['koa-neo4j/check'] = 'commonjs koa-neo4j/check';
externals['koa-neo4j/preprocess'] = 'commonjs koa-neo4j/preprocess';
externals['koa-neo4j/postprocess'] = 'commonjs koa-neo4j/postprocess';
externals['koa-neo4j/debug'] = 'commonjs koa-neo4j/debug';
externals['koa-neo4j/util'] = 'commonjs koa-neo4j/util';

const plugins = [];

const config = {
    target: 'node',
    entry: './src/server.js',
    devtool: 'source-map',
    output: {
        path: './',
        filename: '[name].js',
        library: '[name]',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    externals: externals,
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js']
    },
    plugins: plugins
};

module.exports = config;
