const path = require('path');

// env
const buildDirectory = './dist/';

module.exports = {
	entry: './src/main.js',
	devServer: {
		hot: true,
		inline: true,
		port: 8080,
		historyApiFallback: true
	},
	output: {
		path: path.resolve(buildDirectory),
		filename: 'app.js',
		publicPath: 'http://localhost:8080/dist'
	},
	externals: {
		'cheerio': 'window',
		'react/lib/ExecutionEnvironment': true,
		'react/lib/ReactContext': true
	},
	module: {
		loaders: [{
			test: /\.js?$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		}]
	},
	plugins: []
};
