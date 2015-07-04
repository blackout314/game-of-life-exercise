module.exports = function(config) {
  config.set({
	autoWatch: false,
	singleRun: false,
    basePath: '.',
    frameworks: ['qunit','sinon'],
	reporters: ['progress'],
	preprocessors: {
    },
	coverageReporter: {
    },
	browsers: ['Firefox'],
	files: [ "src/*.js", "tests/**.js" ]
  });
};
