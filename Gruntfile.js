module.exports = function(grunt) {

   var path = require('path');
   const webpackConfig = require('./webpack.config');
   const webpackShopConfig = require('./webpack.shop.config');

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {      
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
       files: {
                  'public/dist/bundle.min.js': ['public/dist/bundle.js','fakeData.js'],
                  'public/dist/shop-bundle.min.js': ['public/dist/shop-bundle.js']
              }
      }
    },
    connect: {
            server: {
              options: {
                port: 8000,
                keepalive: true,
                base: 'public'
              }
            }
    },
    clean: ['public/dist'],
    webpack: {
        options: {
          stats: !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
        },
        prod: webpackConfig,
        ts: webpackConfig,
        dev: Object.assign({ watch: true }, webpackConfig),
        shop:webpackShopConfig
      },
    concurrent: {
        target1: {
          tasks: ['webpack:ts','connect'],
            options: {
                logConcurrentOutput: true
            }
        },
        target2: {
          tasks: ['clean','webpack:shop','connect'],
            options: {
                logConcurrentOutput: true
            }
        },
        target3: {
          tasks: ['connect'],
            options: {
                logConcurrentOutput: true
            }
        },
        target4: {
          tasks: ['webpack:ts','webpack:abc', 'webpack:wb','webpack:app_v2','connect'],
            options: {
                logConcurrentOutput: true
            }
        }
    }

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.loadNpmTasks('grunt-webpack');

  grunt.loadNpmTasks('grunt-concurrent');

  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('compile', ['webpack','uglify']);

  grunt.registerTask('compress', ['uglify']);

  // Default task(s). 
  grunt.registerTask('default', ['concurrent:target1']);

  grunt.registerTask('shop', ['concurrent:target2']);

};