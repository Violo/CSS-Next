module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // CSSNEXT
    postcss: {
      options: {
        map: true, // inline sourcemaps 
   
        // or 
        map: {
            inline: false, // save all sourcemaps as separate files... 
            annotation: 'dist/css/maps/' // ...to the specified directory 
        },
   
        processors: [
          require('pixrem')(), // add fallbacks for rem units 
          require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes 
          require('cssnano')() // minify the result 
        ]
      },
      dist: {
        src: 'css/*.css'
      }
    }
  });

  // Load the plugin CSSNEXT
  grunt.loadNpmTasks('grunt-postcss');

};