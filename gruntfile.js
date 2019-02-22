module.exports = function(grunt) {
    grunt.initConfig({
        uglify: {
            my_target: {
                files: {
                    'dist/add.js': ['minify/add.js']
                }
            }
        },
        minify: {
            min: {
                files: {
                    'dist/add.js': ['minify/add.js']
                }
            }
        },
        browserify: {
            dist: {
                files: {
                    'dist/add.js': ['minify/*.js']
                },
                options: {
                    transform: ['coffeeify']
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-minify');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.registerTask('default', ['uglify', 'minify', 'browserify']);
};