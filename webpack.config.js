path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


webpackConfig = {
    entry: {
    	app: './js/app.js',
    	//styles: './less/styles.less'
    },
    output: {
	   filename: '[name].bundle.js',
	   path: path.resolve(__dirname, 'dist')
	},
    watch: true,
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devtool: '#cheap-module-source-map',
    module: {
        rules: [
    		{
		        test: /\.js$/,
		        use: [{
		          loader: "babel-loader",
		          options: { presets: ["es2015"] }
		        }],
		      },
    		{
    			test: /\.css$/,
    			exclude: /node_modules/,
    			use: ["style-loader", "css-loader"],
    		},
            {
		        test: /\.less$/,
    			exclude: /node_modules/,
		        use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: ["css-loader", "less-loader"]
				})
			}
        ]
    },
    plugins: [
        new ExtractTextPlugin({
			filename: "../css/styles.css",
		})
    ]
};
module.exports = webpackConfig;