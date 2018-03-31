var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');
module.exports = {
  entry: './js/main.js',
  output: {
     path: __dirname + "/dist/js", 
    filename: "bundle.js"

  },
  module: {
			rules: [{
					test: /\.scss$/,
					use: [
						{
							loader: 'file-loader',
							options: {
								name: 'style.css',
								outputPath: '../css/'
							}
						},
						{
							loader: 'extract-loader'
						},
						{
							loader: 'css-loader'
						},
						{
							loader: 'postcss-loader'
						},
						{
							loader: 'sass-loader'
						}
					]
				},
				{

					test: /\.(png|jpg)$/,
  					use: [
						{
							loader: 'file-loader',
							options: {
								name: '[name].[ext]',
								outputPath: '../img',
								publicPath: '../img',
							}
						}]

				}


				]
		}
		
	
};