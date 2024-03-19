var webpack = require('webpack');

var env = process.env.WEBPACK_ENV;

module.exports = {
    mode: 'production',
    entry: './src/twig.js',
    target: env === 'browser' ? 'web' : 'node',
    node: {
        __dirname: false,
        __filename: false,
    },
    output: {
        path: __dirname,
        filename: env === 'browser' ? 'twig.browser.js' : 'twig.js',
        library: {
            name: 'Twig',
            type: 'umd',
        },
        globalObject: 'globalThis',
    },
    resolve: {
        fallback: env === 'browser'
            ? {
                // Ignore these imports in the browser
                "path": false,
                "fs": false,
            }
            : {
                // but allow all imports for node
            },
    },
    optimization: {
        minimize: false,
    },
};
