var path = require('path');
var webpack = require('webpack');
var fs = require('fs');

var isDebug = process.env.NODE_ENV !== 'production';

var context = path.join(__dirname, 'src');

var babelRc = JSON.parse(
    fs.readFileSync(
        path.join(context, '..', '.babelrc')
    ).toString()
);

module.exports = {
    name: 'Ron van de Kerkhof Dev',
    devtool: 'eval',
    context: context,
    entry: [
        './client/index.js'
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
                    plugins: babelRc.plugins.concat(!isDebug ? [
                        'babel-plugin-transform-decorators-legacy',
                        'babel-plugin-transform-react-constant-elements',
                        'babel-plugin-transform-react-inline-elements',
                        'babel-plugin-transform-react-remove-prop-types',
                    ] : []),
                },
                include: context,
                exclude: path.join(context, '..', 'node_modules')
            },
            { test: /\.css$/, loader: 'style!css' + (!isDebug ? '?optimize' : '') }
        ]
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                IS_CLIENT: true,
                NODE_ENV: `"${process.env.NODE_ENV}"`,
            },
        }),
    ].concat(!isDebug ? [
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            mangle: true,
        }),
    ] : [])
};
