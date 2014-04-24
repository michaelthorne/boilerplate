module.exports = function (grunt)
{
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        csslint: {
            strict: {
                options: {
                    import: 2
                },
                src: ['assets/css/main.css']
            }
        },
        jshint: {
            files: ['assets/js/main.js']
        },
        validation: {
            files: {
                src: ['*.html']
            }
        }
    });

    var defaultTasks = [
        'csslint',
        'jshint',
        'validation'
    ];

    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-html-validation');
    grunt.registerTask('default', defaultTasks);
};