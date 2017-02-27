module.exports = {
	context: __dirname,
	entry: "./src/index.js",
	output: {
		filename: 'index.js',
		path: __dirname,
		libraryTarget: "commonjs2"
	},
	module: {
		loaders: [{
			test: /\.js?$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		}]
	},
	resolve: {
		extensions: ['.js']
	}
}