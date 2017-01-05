module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        uglify: {
            dependency: {
              files: {
                'dist/js/dep.min.js': ['src/js/jquery.min.js', 'src/js/bootstrap.min.js', 'src/js/jquery.easing.min.js']
              }
            },
            sourcejs: {
              files: {
                'dist/js/my.min.js': ['src/js/helper.js', 'src/js/resumeBuilder.js']
              }
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            combine: {
                files: {
                    'dist/css/all.css': ['src/css/bootstrap.min.css', 'src/css/fonts.css', 'src/css/googlefont.css', 'src/css/style.css']
                }
            },
            target: {
                files: [{
                  expand: true,
                  cwd: 'dist/css',
                  src: ['all.css', '!**/*.min.css'],
                  dest: 'dist/css',
                  ext: '.min.css'
                }]
            }
        },
        responsive_images: {
            options: {
                sizes: [{
                        name: 'small',
                        width: 320,
                        quality: 80,
                        sample: true
                    },
                    {
                        name: 'medium',
                        width: 640,
                        quality: 80
                    },
                    {
                        name: "large",
                        width: 1024,
                        quality: 80
                }],
                newFilesOnly: false
            },
            myTask: {
                options: {
                    engine: 'im',
                },
                files: [{
                    expand: true,
                    src: ['*.{jpg,gif,png}', '!mine.jpg'],
                    cwd: 'src/img/',
                    dest: 'dist/img/'
                }]
            }
        },
        watch: {
            css: {
                files: 'src/css/**/*.css',
                tasks: [
                    "cssmin"
                    ]
            },
            js: {
                files: 'src/js/**/*.js',
                tasks: [
                    "uglify"
                    ]
            }
        }
    });

    grunt.registerTask('default', [
        'cssmin',
        'uglify',
        'responsive_images',
        'watch'
    ]);
};