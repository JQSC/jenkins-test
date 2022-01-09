const path = require('path');

module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        clean: true,
        path: path.resolve(__dirname, "dist"),
        filename: 'js/[name].js',
        chunkFilename: 'js/[name].js',
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env', '@babel/preset-react'
                            ],
                            plugins: [
                                [
                                    "@babel/plugin-transform-runtime", {
                                        "corejs": 3
                                    }
                                ]
                            ]
                        }
                    }
                ]
            }
        ]
    }
}
