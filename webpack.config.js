const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const dist = path.resolve(__dirname, "dist");

module.exports = {
    entry: './src/bootstrap.ts',
    plugins: [
	new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 2
	}),
	new HtmlWebpackPlugin({
            hash: true,
            filename: 'index.html'
        })
    ],
    module: {
	rules: [
	    {
		test: /\.css$/,
		use: [
		    'style-loader',
		    'css-loader'
		]
	    },
	    {
		test: /\.(png|svg|jpg|gif)$/,
		use: [
		    'file-loader'
		]
	    }
	]
    }
};
