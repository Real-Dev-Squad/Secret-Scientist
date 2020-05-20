const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins

module.exports = {
	entry: {
		bundle: './script.js',
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: '[name].js',
		publicPath: '/',
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
			{
				test: /\.worker\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'worker-loader',
				},
			},
		],
	},
	resolve: {
		extensions: ['*', '.js'],
	},
	plugins: [new HtmlWebpackPlugin({ template: './index.html' })],
	devServer: {
		contentBase: path.join(__dirname, 'build'),
		compress: true,
		port: 5000,
		hot: true,
		publicPath: '/',
	},
};
