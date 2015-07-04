module.exports = function(config) {
  config.set({
	autoWatch: false,
	singleRun: true,
    basePath: '.',
    frameworks: ['qunit'],
	reporters: ['progress'],
	preprocessors: {
    },
	coverageReporter: {
    },
	browsers: ['Firefox'],
	files: [ "src/*.js", "tests/**.js" ]
  });
};
