const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CleanWebpackPlugin = require('clean-webpack-plugin');

//Development Common Exports Settings
let devExports = {
    devtool : '#eval-source-map',
    entry: {
        app :  './src/app.js'
    },
    output: {
        path : path.resolve(__dirname,'./dev'),
        filename :  '[name].bundle.js'
    },
    module : {
        rules: [
            {
                test : /\.js$/,
                exclude : [/node_modules/],
                use : {
                    loader : 'babel-loader',
                    options : {
                        plugins: ['lodash'],
                        presets : [
                            ['es2015'],
                            ['env',{'modules':false,'targets':{'node': 4}}]
                        ]
                    }
                }

            },
            {
                test : /\.html$/,
                use : 'html-loader'
            },
            {
                test : /\.css$/,
                use : ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use : [
                        {
                            loader: 'css-loader',
                            options : {
                                minimize : true
                            }
                        },
                        'postcss-loader'
                    ]
                })
            },
            // {
            //     test : /\.scss|sass$/,
            //     use : ExtractTextPlugin.extract({
            //         fallback: 'style-loader',
            //         use : [
            //             {
            //                 loader: 'css-loader',
            //                 options: {
            //                     minimize: true
            //                 }
            //             },
            //             'postcss-loader',
            //             'sass-loader'
            //         ]
            //     })
            // },
            //该组件样式比较小,这里不单独抽离,直接打进包里
            {
                test : /\.scss|sass$/,
                use : [
                    'style-loader',
                    {
                        loader : 'css-loader',
                        options : {
                            minimize: true
                        }
                    },
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(ttf|eot|svg|woff(2))(\?[a-z0-9]+)?$/,
                loader: 'file-loader',
            }
        ]
        // noParse : /jquery/
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery : 'jquery',
            _ : 'lodash'
        }),
        new LodashModuleReplacementPlugin,
        //该组件样式比较小,这里不单独抽离,直接打进包里
        new ExtractTextPlugin('css/[name].css'),
        new CleanWebpackPlugin(['dist','build'],{
            root : '',
            verbose : true,
            dry : false
        }),
        new BundleAnalyzerPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer : {
        historyApiFallback : true,
        compress: true,
        inline : true,
        port : '5200',
        hot : true
    }
};
/**
 * Development Environment
 */
if( process.env.NODE_ENV === "development"){
    module.exports = devExports;
    module.exports.entry.vendor = [
        'jquery',
        'angular',
        'lodash'
    ];
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.optimize.CommonsChunkPlugin({
            name : ['vendor'],
            minChunks: Infinity
        }),
        new webpack.ProvidePlugin({
            'window.jQuery' : 'jquery'
        }),
        new HtmlWebpackPlugin({
            filename : 'index.html',
            template : './src/index.html',
            inject : true
        }),
    ])
}
/**
 * Production Environment
 */
if( process.env.NODE_ENV === "production"){

}

