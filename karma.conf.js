/* globals module */

module.exports = function (config) {
  config.set({

    basePath: '.',

    proxies: {
      '/assets/': '/base/assets/'
    },

    files: [
      'node_modules/jquery/dist/jquery.js',
      'node_modules/angular/angular.js',
      'node_modules/angular-animate/angular-animate.js',
      'node_modules/angular-route/angular-route.js',
      'node_modules/angular-google-analytics/dist/angular-google-analytics.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'node_modules/angular-cookies/angular-cookies.min.js',
      'node_modules/angular-translate/dist/angular-translate.min.js',
      'node_modules/angular-translate/dist/angular-translate-loader-' +
      'static-files/angular-translate-loader-static-files.min.js',
      'node_modules/angular-translate/dist/angular-translate-storage-cookie/' +
      'angular-translate-storage-cookie.min.js',
      'node_modules/angular-translate/dist/angular-translate-storage-local/' +
      'angular-translate-storage-local.min.js',

      /*images*/
      {
        pattern: 'assets/img/**/*',
        watched: false,
        included: false,
        served: true,
        nocache: false
      },

      /*modules*/
      'app/module.js',
      'app/**/*.js',
      'assets/**/*.js',
      'app/**/*.html',

      /*tests*/
      'test/**/*.js'
    ],

    /*********************************************************/
    // Note: this was added AFTER karma init was completed.
    /*********************************************************/
    ngHtml2JsPreprocessor: {
      //stripPrefix: 'app/',
      //stripSufix: '.ext',

      // setting this option will create only a single module that contains 
      // templates
      // from all the files, so you can load them all with module('foo')

      // cacheIdFromPath: function (filepath) {
      //   // example strips 'public/' from anywhere in the path
      //   // module(app/templates/template.html) =>
      //   // app/public/templates/template.html
      //   var cacheId = filepath.strip('.', '');
      //   return cacheId;
      // },

      moduleName: 'dmtech'
    },

    // list of files to exclude
    exclude: [],

    logLevel: config.LOG_ERROR,


    // preprocess matching files before serving them to the browser
    // available preprocessors:
    // https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'app/**/*.html': ['ng-html2js'],
      'app/**/*.js': 'coverage'
    },

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome', 'Firefox'],

    customLaunchers: {
      'PhantomJS_custom': {
        base: 'PhantomJS',
        options: {
          windowName: 'my-window',
          settings: {
            webSecurityEnabled: false
          },
        },
        flags: ['--load-images=false'],
        debug: true
      }
    },

    phantomjsLauncher: {
      exitOnResourceError: true
    },

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-junit-reporter',
      'karma-ng-html2js-preprocessor',
      'karma-coverage',
      'karma-phantomjs-launcher'
    ],

    reporters: ['progress', 'coverage'],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};