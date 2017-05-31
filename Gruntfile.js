'use strict';

/*global module:false*/
module.exports = function(grunt) {
  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Configurable paths for the application
  var appConfig = {
    path: require('./bower.json')['appPath'] || '.',
    dist: 'dist'
  };

  // Project configuration.
  grunt.initConfig({
    app: appConfig,

    // Metadata.
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: ['Gruntfile.js', '*.js']
    },

    wiredep: {
      app: {
        src: ['index.html'],
        ignorePath: /\.\.\//
      },
      tests: {
        src: 'tests/unit/index.html',
        fileTypes: {
          js: {
            replace: {
              js: '\'..\/..\/{{filePath}}\','
            }
          }
        }
      }
    },

    compass: {                  // Task
      dist: {                   // Target
        options: {              // Target options
          sassDir: 'sass',
          cssDir: 'css',
          environment: 'production'
        }
      },
      dev: {                    // Another target
        options: {
          sassDir: 'sass',
          cssDir: 'css'
        }
      }
    }
  });

  // Default task.
  grunt.registerTask('default', ['jshint', 'wiredep']);

};
