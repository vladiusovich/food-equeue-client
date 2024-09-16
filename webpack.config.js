const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require("webpack");

const basePath = "./src";

module.exports = (env, process) => {
    console.debug('Init webpack:', {
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
            // TODO
            new DefinePlugin({
                'process.env.REACT_APP_API_URL': JSON.stringify(process.env.REACT_APP_API_URL),
                'process.env.REACT_APP_SOCKET_URL': JSON.stringify(process.env.REACT_APP_SOCKET_URL),
            }),
            // new Dotenv(),
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
