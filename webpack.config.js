module.exports = {
	context: __dirname + '/src',
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
			loader: 'babel'
		}]
	},
	resolve: {
		extensions: ['', '.js']
	}
}