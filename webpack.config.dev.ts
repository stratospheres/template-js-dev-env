/// <reference path="./node_modules/@types/webpack/index.d.ts" />

import webpack = require("webpack");

// either of the next 2 work... why?
// import path = require("path");
import * as path from "path";

export default {
	devtool: "inline-source-map",
	entry: [
		path.resolve(__dirname, "src/index.ts")
	],
	module: {
		rules: [
			{
				enforce: "pre",
				loader: "tslint-loader",
				options: {
						configFile: false,
						emitErrors: true,
						failOnHint: true,
						fileOutput: {
							clean: true,
							dir: "./tslint-output/",
							ext: "xml",
							footer: "</checkstyle>",
							header: "<?xml version=\"1\" encoding=\"utf-8\"?>\n<checkstyle version=\"5.7\">"
					},
					fix: false,
						typeCheck: true,
				},
				test: /\.ts$/
			},
			{test: /\.ts$/, exclude: /node_modules/, loaders: ["ts-loader"]},
			{test: /\.css$/, exclude: /node_modules/, loaders: ["style-loader", "css-loader"]}
		]
	},
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "src"),
		publicPath: "/"
	},
	plugins: [
		new webpack.LoaderOptionsPlugin({
				debug: true,
				noInfo: false,
			})
	],
	target: "web"
};
