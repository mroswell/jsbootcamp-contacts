module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

      jshint: {
          files: ['app.js']
      },
      copy: {
          main: {
              files: [

                  {src: ['bower_components/**'], dest: 'public/'} // includes files in path
              ]
          }
      }

  });


grunt.loadNpmTasks('grunt-contrib-jshint');


// copy
grunt.loadNpmTasks('grunt-contrib-copy');

// Default task(s).
grunt.registerTask('default', ['jshint', 'copy']);


};

// https://npmjs.org/package/grunt-contrib-jshint


