module.exports = function (grunt)
{
    require('time-grunt')(grunt);

    var today = '<%= grunt.template.today("yyyy-mm-dd HH:MM:ss") %>';
    var package_name = '<%= pkg.name %>';
    var package_version = '<%= pkg.version %>';
    var banner = '/*! ' + package_name + ' | ' + package_version + ' | ' + today + ' */';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            build: ['build'],
            dist: ['dist']
        },
        connect: {
            server: {
                options: {
                    hostname: '*',
                    base: 'build',
                    livereload: true,
                    open: {
                        target: 'http://127.0.0.1:1337'
                    },
                    port: 1337,
                    useAvailablePort: true
                }
            }
        },
        copy: {
            build: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/assets',
                        src: ['{fonts,images,js}/**'],
                        dest: 'build/assets'
                    },
                    {
                        expand: true,
                        cwd: 'src',
                        src: ['**/*.html'],
                        dest: 'build'
                    },
                    {
                        expand: true,
                        cwd: 'src',
                        src: ['*.*', '.*'],
                        dest: 'build'
                    }
                ]
            },
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/assets',
                        src: ['{fonts,images}/**'],
                        dest: 'dist/assets'
                    },
                    {
                        expand: true,
                        cwd: 'src/assets',
                        src: ['js/vendor/polyfills.js'],
                        dest: 'dist/assets'
                    },
                    {
                        expand: true,
                        cwd: 'src/assets',
                        src: ['js/styleguide/**'],
                        dest: 'dist/assets'
                    },
                    {
                        expand: true,
                        cwd: 'src',
                        src: '**/*.html',
                        dest: 'dist'
                    },
                    {
                        expand: true,
                        cwd: 'src',
                        src: ['*.*', '.*'],
                        dest: 'dist'
                    }
                ]
            }
        },
        csslint: {
            build: {
                src: [
                    'build/assets/css/style.css'
                ],
                options: {
                    csslintrc: '.csslintrc',
                    import: 2
                }
            },
            dist: {
                src: [
                    'dist/assets/css/style-<%= pkg.version %>.css'
                ],
                options: {
                    csslintrc: '.csslintrc',
                    import: 2
                }
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [
                    {
                        expand: true,
                        cwd: 'dist',
                        src: '**/*.html',
                        dest: 'dist'
                    }
                ]
            }
        },
        jshint: {
            files: ['src/assets/js/main.js']
        },
        less: {
            build: {
                files: {
                    'build/assets/css/style.css': 'src/assets/less/style.less',
                    'build/assets/css/styleguide.css': 'src/assets/less/styleguide.less'
                },
                options: {
                    banner: banner,
                    cleancss: true
                }
            },
            dist: {
                files: {
                    'dist/assets/css/style-<%= pkg.version %>.css': 'src/assets/less/style.less',
                    'dist/assets/css/styleguide-<%= pkg.version %>.css': 'src/assets/less/styleguide.less'
                },
                options: {
                    banner: banner,
                    cleancss: true
                }
            }
        },
        processhtml: {
            build: {
                options: {
                    process: true,
                    data: {
                        updated: today,
                        version: package_version
                    }
                },
                files: [
                    {
                        expand: true,
                        cwd: 'src',
                        src: '**/*.html',
                        dest: 'build'
                    }
                ]
            },
            dist: {
                options: {
                    process: true,
                    data: {
                        updated: today,
                        version: package_version
                    }
                },
                files: [
                    {
                        expand: true,
                        cwd: 'src',
                        src: '**/*.html',
                        dest: 'dist'
                    }
                ]
            }
        },
        uglify: {
            options: {
                banner: banner
            },
            build: {
                files: {
                    'dist/assets/js/script-<%= pkg.version %>.js': [
                        'src/assets/js/vendor/jquery.js',
                        'src/assets/js/plugins.js',
                        'src/assets/js/main.js'
                    ]
                }
            }
        },
        validation: {
            build: {
                files: {
                    src: [
                        'build/*.html'
                    ]
                }
            },
            dist: {
                files: {
                    src: [
                        'dist/*.html'
                    ]
                }
            }
        },
        watch: {
            build: {
                files: [
                    'src/**'
                ],
                tasks: ['less:build', 'copy:build', 'processhtml:build'],
                options: {
                    livereload: true
                }
            }
        }
    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('build', ['clean:build', 'less:build', 'copy:build', 'processhtml:build']);
    grunt.registerTask('default', ['build']);
    grunt.registerTask('dist', ['clean:dist', 'less:dist', 'copy:dist', 'processhtml:dist', 'uglify', 'htmlmin']);
    grunt.registerTask('process', ['processhtml']);
    grunt.registerTask('serve', ['build', 'connect', 'watch']);
};
