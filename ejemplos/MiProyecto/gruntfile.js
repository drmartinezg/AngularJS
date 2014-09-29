module.exports = function (grunt) {
	// Project configuration.
	grunt.initConfig({

		jshint: {
			all: ['scripts.js']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	// Default task.
	grunt.registerTask('default', ['jshint']);
};