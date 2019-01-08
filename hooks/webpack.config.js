var path = require('path');

module.exports = {
    // 入口文件
    entry: './app/index.js',

    // 服务器配置
    devServer: {
        contentBase: './',
        host: 'localhost',
        compress: true,
        port: 1717
    },

    // 配置Babel
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loaders:"babel-loader",
                query:{
                    presets:['es2015','react']
                }
            }
        ]
    },

    // 出口文件
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname,'dist'),
        publicPath: 'dist/'
    }
}