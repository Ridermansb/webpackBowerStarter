var webpack = require('webpack'),
    path = require('path'),
    BowerWebpackPlugin = require("bower-webpack-plugin"),
    AngularPlugin = require('angular-webpack-plugin');

module.exports = {
    entry: [path.join(__dirname, 'app.js')],
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: 'style!css!sass?sourceMap'
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            }, {
                test: /\.(woff|woff2|ttf|eot|svg)(\?]?.*)?$/,
                loader: 'file-loader?name=res/[name].[ext]?[hash]'
            }
        ]
    },
    plugins: [
        //new BowerWebpackPlugin(),
        new AngularPlugin()
        , new webpack.ProvidePlugin({
            Q: 'q',
            store: 'store.js',
            Stamplay: 'stamplay-js-sdk'
        })
        , new webpack.ResolverPlugin(
            [
                new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
            ], ["normal", "loader"]
        )

    ],
    resolve: {
        root: [
            path.join(__dirname, 'node_modules'),
            path.join(__dirname, 'bower_components')
        ],
        extensions: ['', '.webpack.js', '.web.js', '.js', 'html'],
        alias: {
            'ui.router': 'angular-ui-router',
            'ngMaterial': 'angular-material',
            'ngAnimate': 'angular-animate',
            'ngAria': 'angular-aria'
            //,'ngStamplay': 'angular-stamplay',
            //'stamplay': 'angular-stamplay'
        }
    }
};
