module.exports = function(grunt) {
  'use strict';
  // Project configuration.
  grunt.initConfig({
    jasmine : {
      src : 'app/src/**/*.js',
      options : {
        specs : 'app/spec/**/*.js',
      }
    },
    watch: {
      myUtils : {
        files: ['app/src/**/*.js', 'app/spec/**/*.js'],
        tasks: 'jasmine'
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: ['Gruntfile.js', 'app/src/**/*.js', 'app/specs/**/*.js']
    }
  });

  // Load the Grunt plugins.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  // Register the default tasks.
  grunt.registerTask('default', ['jshint', 'jasmine', 'watch']);
};