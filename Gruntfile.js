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
        //phantom: {
        //    options: {
        //        port: 5555
        //    },
        //    cucumber: {
        //    }
        //},
        //mochaTest: {
        //    test: {
        //       options: {
        //            reporter: 'spec'
        //        },
        //        src: ['test/**/*.js']
        //    }
        //},
        //mocha: {
        //    index:['test/test.js']
        //}
        mocha_phantomjs: {
            all: ['test/**/*.html'],
            options: {
                reporter: "xunit",
                output: "./mocha_result.xml"
            }
        }
    });


    grunt.loadNpmTasks('grunt-contrib-jshint');


    // copy
    grunt.loadNpmTasks('grunt-contrib-copy');

    //clean
    grunt.loadNpmTasks('grunt-contrib-clean');

   // grunt.loadNpmTasks('grunt-mocha');

   // grunt.loadNpmTasks('grunt-phantom');

    grunt.loadNpmTasks('grunt-mocha-phantomjs');

    // Default task(s).
   // grunt.registerTask('default', ['clean', 'copy']);
    grunt.registerTask('default', ['mocha_phantomjs']);
    grunt.registerTask('test', ['mocha_phantomjs']);


};

// https://npmjs.org/package/grunt-contrib-jshint