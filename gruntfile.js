/* globals module */
'use strict';

module.exports = function (grunt) {
  grunt.initConfig({

    // define source files and their destinations
    uglify: {
      files: {
        src: ['release/js/concat/*.js'],
        // source files mask
        dest: 'release/js/min', // destination folder
        expand: true, // allow dynamic building
        flatten: true, // remove all unnecessary nesting
        ext: '.min.js' // replace .js to .min.js
      }
    },

    cssmin: {
      target: {
        files: [{
          expand: true,
          flatten: true, // remove all unnecessary nesting
          src: ['release/css/concat/*.css'],
          dest: 'release/css/min',
          ext: '.min.css'
        }]
      }
    },

    concat: {
      options: {
        separator: '\n'
      },
      js: {
        src: ['release/js/annotated/module.annotated.js',
          'release/js/annotated/*.annotated.js'],
        dest: 'release/js/concat/app.concat.js'
      },
      css: {
        src: 'assets/css/*.css',
        dest: 'release/css/concat/app.concat.css'
      }
    },

    clean: ['release/**'],

    ngAnnotate: {
      options: {
        singleQuotes: true
      },
      app: {
        files: [{
          expand: true,
          flatten: true, // remove all unnecessary nesting
          src: ['app/**/*.js', 'assets/js/*.js', '!**/*.min.css',
                        '!node_modules/**', '!test/**'],
          dest: 'release/js/annotated',
          ext: '.annotated.js'
        }]
      }
    },

    karma: {
      unit: {
        configFile: 'karma.conf.js',
        singleRun: true,
        frameworks: ['jasmine'],
        browsers: ['PhantomJS'],
        logLevel: 'INFO'
      }
    },

    jshint: {
      all: ['gruntfile.js', 'app/**/*.js', 'test/**/*.js'],
      options: {
        camelcase: true,
        indent: 2,
        undef: true,
        quotmark: 'single',
        maxlen: 80,
        curly: false,
        unused: true,
        module: true,
        esversion: 6,
        strict: 'global',
        devel: true,
        jquery: true,
        jasmine: true,
        globals: {
          angular: true,
          window: true,
          document: true
        }
      }
    }

  });

  // load plugins
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-ng-annotate');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // register at least this one task
  grunt.registerTask('default', ['clean', 'ngAnnotate', 'concat', 'uglify',
    'cssmin', 'jshint', 'karma']);

  grunt.registerTask('build', ['clean', 'ngAnnotate', 'concat', 'uglify',
    'cssmin']);

  grunt.registerTask('test', ['jshint', 'karma']);

};