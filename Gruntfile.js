module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            files: ['app.js']
        },
        copy: {
            main: {
                files: [{
                    src: ['bower_components/**'],
                    dest: 'public/'
                } // includes files in path
                ]
            }
        },
        clean: ["public/bower_components/**"],
        phantom: {
            options: {
                port: 5555
            },
            cucumber: {
            }
        }

    });


    grunt.loadNpmTasks('grunt-contrib-jshint');


    // copy
    grunt.loadNpmTasks('grunt-contrib-copy');

    //clean
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.loadNpmTasks('grunt-mocha-test');

    grunt.loadNpmTasks('grunt-phantom');

 
    // Default task(s).
   // grunt.registerTask('default', ['clean', 'copy']);
    grunt.registerTask('default', ['phantom']);


};

// https://npmjs.org/package/grunt-contrib-jshint
