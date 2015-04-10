/*jslint node: true */
'use strict';

module.exports = function (grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),


    // Clean up
    clean: {
      build: {
        src: ['build']
      },
      css: {
        src: ['build/zen_collections/css']
      },
      prepro: {
        src: ['build/zen_collections/css/sassy']
      },
      scripts: {
        src: ['build/zen_collections/js']
      },
      images: {
        src: ['build/zen_collections/images']
      },
      zen: {
        src: ['build/zen']
      }
    },


    // CSS files
    compass: {
      dist: {
        options: {
          config: 'config.rb'
          //style: 'expanded'
        },
        files: [{
          expand: true,
          cwd: 'zen_collections/sass',
          src: ['*.scss'],
          dest: 'build/zen_collections/css/sassy',
          ext: '.css'
        }]
      }
    },

    autoprefixer: {
      options: {
        browsers: ['last 3 versions', 'ie 8', 'ie 9']
      },

      single_file: {
        options: {
          // Target-specific options go here.
        },
        src: 'build/zen_collections/css/styles.css',
        dest: 'build/zen_collections/css/styles.css'
      }


    },


    // Javascript files

    jshint: {
      options: {
        reporter: require('jshint-stylish'),
        ignores: ['zen_collections/js/masonry.pkgd.min.js']
      },
      beforeconcat: ['style/js/*.js']
    },

    concat: {
      dist: {
        src: ['zen_collections/js/masonry.pkgd.min.js',
              'zen_collections/js/imagesloaded.pkgd.min.js',
              'zen_collections/js/wam__masonry.js',
              'zen_collections/js/wam__header-megamenu.js',
              'zen_collections/js/wam__header-sticky.js',
              'zen_collections/js/wam__facets.js',
              'zen_collections/js/wam__journal.js',
              'zen_collections/js/script.js'],
        dest: 'build/zen_collections/js/script.js'
      }
    },

    uglify: {
      build: {
        src: 'build/zen_collections/js/script.js',
        dest: 'build/zen_collections/js/script.min.js'
      }
    },


    // Copy Files folders

    copy: {
      css: {
        files: [{
          expand: true,
          cwd: 'libs/css/',
          src: ['**'],
          dest: 'build/zen_collections/css'
        }]
      },
      scripts: {
        files: [{
          expand: true,
          cwd: 'libs/js/',
          src: ['**'],
          dest: 'build/zen_collections/js'
        }]
      },
      fonts: {
        files: [{
          expand: true,
          cwd: 'libs/fonts/',
          src: ['**'],
          dest: 'build/zen_collections/fonts'
        }]
      },
      images: {
        files: [{
          expand: true,
          cwd: 'zen_collections/images/',
          src: ['**'],
          dest: 'build/zen_collections/images'
        }]
      },
      zen: {
        files: [{
          expand: true,
          cwd: 'zen_collections/templates/',
          src: ['**'],
          dest: 'build/zen_collections/templates'
        }, {
          expand: true,
          cwd: 'zen_collections/ds_layouts/',
          src: ['**'],
          dest: 'build/zen_collections/ds_layouts'
        }, {
          expand: true,
          cwd: 'zen/',
          src: ['**'],
          dest: 'build/zen'
        }, {
          expand: true,
          src: 'zen_collections/zen_collections.info',
          dest: 'build/zen_collections',
          flatten: true
        }, {
          expand: true,
          src: 'zen_collections/template.php',
          dest: 'build/zen_collections',
          flatten: true
        }, {
          expand: true,
          src: 'template.comment.inc',
          dest: 'build',
          flatten: true
        }, {
          expand: true,
          src: 'zen_collections/theme-settings.php',
          dest: 'build/zen_collections',
          flatten: true
        }, {
          expand: true,
          src: 'zen_collections/screenshot.png',
          dest: 'build/zen_collections',
          flatten: true
        }, {
          expand: true,
          src: 'zen_collections/favicon.ico',
          dest: 'build/zen_collections',
          flatten: true
          //                },{
          //                    expand: true,
          //                    cwd: 'zen_collections/ds_layouts/',
          //                    src: ['**'],
          //                    dest: 'build/zen_collections/ds_layouts'
          //                },{
          //                    expand: true,
          //                    cwd: 'zen_collections/views-templates/',
          //                    src: ['**'],
          //                    dest: 'build/zen_collections/views-templates'
          //                },{
          //                    expand: true,
          //                    cwd: 'zen_collections/plugins/',
          //                    src: ['**'],
          //                    dest: 'build/zen_collections/plugins'
        }]
      }

    },

    'sftp-deploy': {
      build: {
        auth: {
          host: '202.14.152.54',
          port: 22,
          authKey: 'key1'
        },
        cache: 'sftpCache.json',
        src: 'build',
        dest: '/web/wamuseum/dev/collections/current/sites/all/themes',
        exclusions: ['build/**/.DS_Store', 'build/**/Thumbs.db', 'dist/tmp'],
        concurrency: 10,
        progress: true
      },
      live: {
        auth: {
          host: '202.14.152.54',
          port: 22,
          authKey: 'key1'
        },
        cache: 'sftpCache-live.json',
        src: 'build',
        dest: '/web/wamuseum/www/collections/current/sites/all/themes',
        exclusions: ['build/**/.DS_Store', 'build/**/Thumbs.db', 'dist/tmp'],
        concurrency: 10,
        progress: true
      }
    },




    // Watch Actions

    watch: {
      css: {
        files: ['zen_collections/sass/*.scss', 'style/scss/**/*.scss'],
        tasks: ['clean:css', 'compass', 'autoprefixer', 'copy:css', 'clean:prepro', 'sftp-deploy:build'],
        options: {
          spawn: false
        }
      },
      scripts: {
        files: ['zen_collections/js/*.js'],
        tasks: ['clean:scripts', 'jshint', 'concat', 'uglify', 'copy:scripts', 'sftp-deploy:build'],
        options: {
          spawn: false
        }
      },
      images: {
        files: ['zen_collections/images/*', 'zen_collections/images/**/*'],
        tasks: ['clean:images', 'copy:images', 'sftp-deploy:build'],
        options: {
          spawn: false
        }
      },
      zen: {
        files: ['zen_collections/templates/*.php', 'zen_collections/templates/**/*.php', 'zen_collections/views-templates/*.php', 'zen_collections/views-templates/**/*.php', 'zen_collections/zen_collections.info', 'zen_collections/template.php', 'zen_collections/theme-settings.php'],
        tasks: ['clean:zen', 'copy:zen', 'sftp-deploy:build'],
        options: {
          spawn: false
        }
      }

    }

  });

  //require('load-grunt-tasks')(grunt);

  // 3. Where we tell Grunt we plan to use this plug-in.

  require('load-grunt-tasks')(grunt);

  // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
  grunt.registerTask('default', ['clean', 'concat', 'uglify', 'jshint', 'compass', 'autoprefixer', 'copy', 'clean:prepro', 'sftp-deploy:live']);
  grunt.registerTask('dev', ['watch']);
  grunt.registerTask('deploy', ['sftp-deploy:build']);
  grunt.registerTask('deploy-live', ['sftp-deploy:live']);
};
