var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ProvidePlugin = require('webpack/lib/ProvidePlugin');

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: './dist',
        filename: 'app.bundle.js',
        sourceMapFilename: 'app.bundle.map'
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: 'source-map',
    debug: true,

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ["", ".ts", ".tsx", ".js", '.html', '.css', '.scss', '.json'],
    },

    module: {
        preLoaders: [
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { test: /\.js$/, loader: "source-map-loader" }
        ],

        loaders: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
            { test: /\.ts$|.tsx$/, loader: 'ts-loader', exclude: './node_modules' },
            // { test: /\.jsx?$/, loaders: ['react-hot', 'babel'], exclude: './node_modules' },
            { test: /\.html$/, loader: 'raw' },
            { test: /\.css$/, loader: 'raw' },
            { test: /\.scss$/, loaders: ['raw', 'sass'] },
            { test: /\.json$/, loader: 'json-loader' }
            // ,{
            //     test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
            //     loader: 'url?limit=10000&mimetype=application/font-woff'
            // },
            // {
            //     test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            //     loader: 'url?limit=10000&mimetype=application/octet-stream'
            // },
            // {
            //     test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            //     loader: 'file'
            // },
            // {
            //     test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            //     loader: 'url?limit=10000&mimetype=image/svg+xml'
            // }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new CopyWebpackPlugin([
            { from: 'src/assets', to: 'assets' }
        ]),
        new webpack.DefinePlugin({
            app: {
                environment: JSON.stringify(process.env.APP_ENVIRONMENT || 'development')
            }
        }),
        new webpack.HotModuleReplacementPlugin()
    ],

    tslint: {
        emitErrors: true,
        failOnHint: true,
        resourcePath: 'src'
    },

    devServer: {
        port: 5253,
        host: 'localhost',
    }
}