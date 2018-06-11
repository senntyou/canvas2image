
"use strict";

const moment = require('moment');

const packageJson = require('./package.json');

module.exports = {
    modules: {
        index: {
            js: 'src/index.js',
            filename: 'canvas2image',
            library: 'Canvas2Image',
            libraryTarget: "umd"
        },
        demo: {
            html: 'demo/index.html',
            js: 'demo/index.js'
        },
        example: {
            html: 'example/index.html',
            js: 'example/index.js'
        }
    },
    banner: `
    canvas2image v${packageJson.version}

    https://github.com/senntyou/canvas2image

    @senntyou <jiangjinbelief@163.com>

    ${moment().format('YYYY-MM-DD HH:mm:ss')}
    `
};

