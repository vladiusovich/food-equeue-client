const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv');
const webpack = require('webpack');

/* TODO:
    Load environment variables depending on NODE_ENV
    For example, if NODE_ENV is 'development', load .env.dev else load .env.prod, .env.prodB, etc.
*/
const envFile = `.env`;
const env = dotenv.config({ path: envFile }).parsed || {};

// Convert all env vars into stringified form so DefinePlugin can use them
const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
}, {});

console.debug('[build][env]:', {
    envFile,
    env,
    envKeys,
});

module.exports = (env, process) => {
    console.debug('[build][webpack]:', {
        process,
        env,
    });

    const basePath = "./src";

    return {
        entry: './src/index.tsx',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js'
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js'],
            alias: {
                '@ui': path.resolve(__dirname, `${basePath}/components/ui`),
                '@api': path.resolve(__dirname, `${basePath}/api`),
                '@components': path.resolve(__dirname, `${basePath}/components`),
                '@type': path.resolve(__dirname, `${basePath}/types`),
                '@hook': path.resolve(__dirname, `${basePath}/hooks`),
                '@styles': path.resolve(__dirname, `${basePath}/styles`),
                '@typography': path.resolve(__dirname, `${basePath}/styles/typography/index`),
                '@mixins': path.resolve(__dirname, `${basePath}/styles/typography/Typography.styled`),
                '@helpers': path.resolve(__dirname, `${basePath}/helpers`),
                '@common': path.resolve(__dirname, `${basePath}/components/common`),
                '@device': path.resolve(__dirname, `${basePath}/styles/media/device`),
                '@resources': path.resolve(__dirname, `${basePath}/resources`),
                '@config': path.resolve(__dirname, `${basePath}/config/appConfig`),
            }
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'babel-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.svg$/,
                    use: [
                        {
                            loader: "babel-loader",
                        },
                        {
                            loader: "react-svg-loader",
                            options: {
                                jsx: true,
                                svgo: {
                                    plugins: [
                                        {
                                            removeViewBox: false,
                                        },
                                    ],
                                },
                            },
                        },
                    ],
                },
            ]
        },
        mode: 'development',
        devtool: 'inline-source-map',
        plugins: [
            new HtmlWebpackPlugin({
                template: './public/index.html'
            }),
            new webpack.DefinePlugin(envKeys),
        ],
        devServer: {
            port: 3005,
            open: false, // Automatically open the browser
            hot: true   // Enable hot module replacement
        },
    }
};
