module.exports = function(grunt) {
    grunt.initConfig({
        uglify: {
            my_target: {
                files: {
                    'dist/add.js': ['minify/add.js']
                }
            }
        },
        cssmin: {
            my_target: {
                files: [{
                    expand: true,
                    cwd: 'css/',
                    src: ['*.css', '!*.min.css'],
                    dist: 'css/',
                    ext: '.min.css'
                }]
            }
        },

        browserify: {
            build: {
                files: {
                    src: 'dist/*.js',
                    dest: 'minify/add.js'
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.registerTask('default', ['uglify', 'cssmin', 'browserify']);
};