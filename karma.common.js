const path = require('path');

module.exports = {
	// base path that will be used to resolve all patterns (eg. files,
	// exclude)
	basePath : "",	
	// frameworks to use
	// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
	frameworks : [ "jasmine"],
	// list of files / patterns to load in the browser
	files : [ "test/index.js", "test/sites/**/*.html"],
	// list of files / patterns to exclude
	exclude : [],
	// available preprocessors:
	// https://npmjs.org/browse/keyword/karma-preprocessor
	preprocessors : {
		"src/*.js" : ["coverage"],
		"src/**/*.js" : ["coverage"],
		"test/*.js" : [ "webpack", "sourcemap","coverage"],
		"test/sites/**/*.html": ["html2js"]
	},
	webpack : {
		mode : "production",
		devtool : "inline-source-map"
	},
	// test results reporter to use
	// possible values: "dots", "progress"
	// available reporters: https://npmjs.org/browse/keyword/karma-reporter
	reporters : [ "progress", "coverage"],
	port : 9876,
	colors : true,
	autoWatch : true,
	client : {
		clearContext : true
	},
	singleRun : false,
	concurrency : Infinity
	//browserNoActivityTimeout: 60000
};
