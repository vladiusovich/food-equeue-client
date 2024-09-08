const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const basePath = "./src";

module.exports = (env, process, ...rest) => {
    const isProduction = process.mode === 'production';
    const dotenvFilename = isProduction ? '.env.production' : '.env.dev';

    console.debug('init webpack. env:', {
        isProduction,
        dotenvFilename,
        process,
        env,
    });

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
        plugins: [
            new HtmlWebpackPlugin({
                template: './public/index.html'
            }),
            new Dotenv({
                path: dotenvFilename,
            }),

        ],
        devServer: {
            static: {
                directory: path.join(__dirname, 'dist')
            },
            compress: true,
            port: 3005,
            open: false, // Automatically open the browser
            hot: true   // Enable hot module replacement
        },
    }
};
