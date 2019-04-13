const path = require('path');

module.exports = {
    mode: "development",
    entry: './src/index.js',
    output: {
        filename: 'app.bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        historyApiFallback: true,
        disableHostCheck: true,
        headers: { "Access-Control-Allow-Origin": "*" },
        noInfo: false,
        overlay: true,
        stats: {
            colors: false,
            assets: false,
            chunks: false,
            modules: false,
            publicPath: true
        },
        progress: false,
        publicPath: "https://localhost:9000/dist/",
        host: "localhost",
        port: 9000,
        https: true
    },
    devtool: "eval-source-map",
};