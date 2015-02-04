'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-simple-mocha');

  grunt.initConfig({
    jshint: {
      options: {
        node: true,
        globals: {
          describe: true,
          it: true,
          before: true,
          after: true
        }
      },
      dev: {
        src: ['Gruntfile.js', 'lib/**/*.js', 'test/**/*.js', 'index.js']
      }
    },
    simplemocha: {
      all: {
        src: ['test/**/*.js']
      }
    }
  });

  grunt.registerTask('test', ['jshint', 'simplemocha']);
  grunt.registerTask('default', ['test']);

};
