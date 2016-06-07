var path = require('path');
var webpack = require('webpack');
var fs = require('fs');

var context = path.join(__dirname, 'src');

var babelRc = JSON.parse(
    fs.readFileSync(
        path.join(context, '..', '.babelrc')
    ).toString()
);

module.exports = {
    name: 'Ron van de Kerkhof Dev',
    devtool: 'source-map',
    context: context,
    entry: [
        './client/index.jsx'
    ],
    output: {
        path: path.join(context, '..', 'public/dist'),
        filename: '[name].js',
        publicPath: '/dist/'
    },
    resolve: {
        root: [
            context
        ],
        extensions: [ '', '.js', '.jsx' ]
    },
    module: {
        loaders: [
            {
                test: /\.js$|\.jsx$/,
                loader: 'babel-loader',
                query: {
                    presets: babelRc.presets,
                    plugins: ['transform-decorators-legacy'],
                },
                include: context,
                exclude: path.join(context, '..', 'node_modules')
            }
        ]
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                IS_CLIENT: true,
                NODE_ENV: '"dev"',
            },
        }),
    ]
};
