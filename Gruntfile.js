module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),


// Clean up
        clean: {
            build: {
                src: ['build']
            },
            css: {
                src: ['build/zen-collections/css']
            },
            prepro: {
                src: ['build/zen-collections/css/sassy']
            },
            scripts: {
                src: ['build/zen-collections/js']
            },
            images: {
                src: ['build/zen-collections/images']
            },
            zen: {
                src: ['build/zen']
            }
        },


// CSS files
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: [{
                    expand: true,
                    cwd: 'zen-collections/scss',
                    src: ['*.scss'],
                    dest: 'build/zen-collections/css/sassy',
                    ext: '.css'
                }]
            }
        },

        autoprefixer: {
            options: {
                browsers: ['last 3 version']
            },
            multiple_files: {
                expand: true,
                flatten: true,
                src: 'build/zen-collections/css/sassy/*.css',
                dest: 'build/zen-collections/css'
            }
        },


// Javascript files

        jshint: {
            options: {
                reporter: require('jshint-stylish'),
                ignores: [ 'style/js/respond.src.js',
                    'style/js/jquery-extra-selectors.js',
                    'style/js/jquery.panorama.js',
                    'style/js/jquery.cookie.js',
                    'style/js/jquery.scrollTo.js',
                    'style/js/jquery.masonry.js',
                    'style/libs/js/google-code-prettify/prettify.js',
                    'style/libs/js/royalslider/jquery.easing-1.3.js',
                    'style/libs/js/royalslider/jquery.royalslider.min.js',
                    'style/libs/js/video-js/video.js',
                    'style/libs/js/audiojs/audio.js',
                    'style/js/jquery.dotdotdot.js',
                    'style/libs/js/iscroll/iscroll.js',
                    'style/js/jquery.masonry.min.js',
                    'style/js/ga_social_tracking.js' ]
            },
            beforeconcat: ['style/js/*.js']
        },

        concat: {
            dist: {
                src: [
                    'zen-collections/js/script.js'
                ],
                dest: 'build/zen-collections/js/script.js',
            }
        },

        uglify: {
            build: {
                src: 'build/zen-collections/js/script.js',
                dest: 'build/zen-collections/js/script.min.js'
            }
        },


        // Copy Files folders

        copy: {
            css: {
                files: [{ 
                    expand: true, 
                    cwd: 'libs/css/', 
                    src: ['**'], 
                    dest: 'build/zen-collections/css' 
                }]
            },
            scripts: {
                files: [{ 
                    expand: true, 
                    cwd: 'libs/js/', 
                    src: ['**'], 
                    dest: 'build/zen-collections/js' 
                }]
            },
            fonts: {
                files: [{ 
                    expand: true, 
                    cwd: 'libs/fonts/', 
                    src: ['**'], 
                    dest: 'build/zen-collections/fonts' 
                }]
            },
            images: {
                files: [{ 
                    expand: true, 
                    cwd: 'zen-collections/images/', 
                    src: ['**'], 
                    dest: 'build/zen-collections/images' 
                }]
            },
            zen: {
                files: [{
                    expand: true,
                    cwd: 'zen-collections/templates/',
                    src: ['**'],
                    dest: 'build/zen-collections/templates'
                },{
                    expand: true,
                    src: 'zen-collections/zen-collections.info',
                    dest: 'build/zen-collections',
                    flatten: true
                },{
                    expand: true,
                    src: 'zen-collections/template.php',
                    dest: 'build/zen-collections',
                    flatten: true
                },{
                    expand: true,
                    src: 'template.comment.inc',
                    dest: 'build',
                    flatten: true
                },{
                    expand: true,
                    src: 'zen-collections/theme-settings.php',
                    dest: 'build/zen-collections',
                    flatten: true
                },{
                    expand: true,
                    src: 'zen-collections/screenshot.png',
                    dest: 'build/zen-collections',
                    flatten: true
                },{
                    expand: true,
                    src: 'zen-collections/favicon.ico',
                    dest: 'build/zen-collections',
                    flatten: true
//                },{
//                    expand: true,
//                    cwd: 'zen-collections/ds_layouts/',
//                    src: ['**'],
//                    dest: 'build/zen-collections/ds_layouts'
//                },{
//                    expand: true,
//                    cwd: 'zen-collections/views-templates/',
//                    src: ['**'],
//                    dest: 'build/zen-collections/views-templates'
//                },{
//                    expand: true,
//                    cwd: 'zen-collections/plugins/',
//                    src: ['**'],
//                    dest: 'build/zen-collections/plugins'
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
                dest: '/web/wamuseum/dev/collections/sites/all/themes',
                exclusions: ['build/**/.DS_Store', 'build/**/Thumbs.db', 'dist/tmp'],
                concurrency: 10,
                progress: true
            },
//            live: {
//                auth: {
//                    host: '202.14.152.54',
//                    port: 22,
//                    authKey: 'key1'
//                },
//                cache: 'sftpCache-live.json',
//                src: 'build',
//                dest: '/web/wamuseum/www/collections/sites/all/themes',
//                exclusions: ['build/**/.DS_Store', 'build/**/Thumbs.db', 'dist/tmp'],
//                concurrency: 10,
//                progress: true
//            }
        },




        // Watch Actions

        watch: {
            css: {
                files: ['zen-collections/sass/*.scss', 'style/scss/**/*.scss'],
                tasks: ['clean:css', 'sass', 'autoprefixer', 'copy:css', 'clean:prepro'],
                options: {
                    spawn: false,
                }
            },
            scripts: {
                files: ['zen-collections/js/*.js'],
                tasks: ['clean:scripts', 'jshint', 'concat', 'uglify', 'copy:scripts'],
                options: {
                    spawn: false,
                }
            },
            images: {
                files: ['zen-collections/images/*', 'zen-collections/images/**/*'],
                tasks: ['clean:images', 'copy:images'],
                options: {
                    spawn: false,
                }
            },
            zen: {
                files: ['zen-collections/templates/*.php', 'zen-collections/templates/**/*.php', 'zen-collections/views-templates/*.php', 'zen-collections/views-templates/**/*.php', 'zen-collections/zen-collections.info', 'zen-collections/template.php', 'zen-collections/theme-settings.php'],
                tasks: ['clean:zen', 'copy:zen'],
                options: {
                    spawn: false,
                }
            }

        }

    });

    //require('load-grunt-tasks')(grunt);

    // 3. Where we tell Grunt we plan to use this plug-in.

    require('load-grunt-tasks')(grunt);

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['clean', 'concat', 'uglify', 'jshint', 'sass', 'autoprefixer', 'copy', 'clean:prepro']);
    grunt.registerTask('dev', ['watch']);
    grunt.registerTask('deploy', ['sftp-deploy:build']);
    grunt.registerTask('deploy-live', ['sftp-deploy:live']);
};
