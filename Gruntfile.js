module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

       // nodemon: {
       //     dev: {}
       // },

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
        },
        watch: {
            options: {
                nospawn: true
            },

            //restart: {
            //    files: ['app.js'],
            //    tasks: ['server'],
            //   options: {
            //        livereload: 3000
            //    }
            //},
            server: {
                files:  [ './server/**/*, app.js' ],
                tasks:  [ 'express:dev', 'livereload' ]
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

    //autowatch
    grunt.loadNpmTasks('grunt-contrib-watch');

    //nodemon (alternative to autowatch)

    grunt.loadNpmTasks('grunt-nodemon');

    // Default task(s).
   // grunt.registerTask('default', ['clean', 'copy']);
    grunt.registerTask('default', ['mocha_phantomjs']);
    grunt.registerTask('test', ['mocha_phantomjs']);
    grunt.registerTask('reload', ['mocha-contrib-watch']);
    grunt.registerTask('server', 'Start app.js', function(){
        grunt.log.writeln('starting app.js server');
        require('./app.js');
    });



};

// https://npmjs.org/package/grunt-contrib-jshint
