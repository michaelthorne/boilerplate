module.exports = function (grunt)
{
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                    hostname: 'localhost',
                    livereload: true,
                    open: true,
                    port: 1337
                }
            }
        },
        csslint: {
            strict: {
                src: ['assets/css/main.css'],
                options: {
                    import: 2
                }
            }
        },
        jshint: {
            files: ['assets/js/main.js']
        },
        less: {
            build: {
                files: {
                    'assets/css/main.css': 'assets/less/main.less'
                },
                options: {
                    cleancss: true
                }
            }
        },
        validation: {
            files: {
                src: ['*.html']
            }
        },
        watch: {
            build: {
                files: [
                    'assets/js/**',
                    'assets/less/**',
                    '*.html'
                ],
                tasks: ['less'],
                options: {
                    livereload: true
                }
            }
        }
    });

    var defaultTasks = [
        'csslint',
        'jshint',
        'less',
        'validation'
    ];

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-html-validation');
    grunt.registerTask('default', defaultTasks);
    grunt.registerTask('serve', ['less', 'connect', 'watch']);
};