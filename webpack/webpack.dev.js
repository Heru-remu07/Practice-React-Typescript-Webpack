const webpack = require('webpack')

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.projectName': JSON.stringify('testProject'),
        })
    ],
}