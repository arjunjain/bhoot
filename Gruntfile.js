module.exports = function (grunt) {
  [
    'grunt-contrib-watch',
    'grunt-contrib-clean',
    'grunt-contrib-uglify',
    'grunt-contrib-concat'
  ].forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    clean : {
    	concat: 'assets/js/main.js',
    	uglify: 'assets/js/main.min.js'
    },
    concat: {
    	build: {
    		src: 'assets/js/lib/*.js',
    		dest:'assets/js/main.js'
    	}
    },
    uglify: {
        build: {
            src: 'assets/js/main.js',
            dest:'assets/js/main.min.js'
        }
    },
    watch: {
    	files: ['assets/js/*js'],
    	tasks: ['concat','uglify'],
    }
  });

  grunt.registerTask('build', ['clean','concat','uglify']);
  grunt.registerTask('run', ['build', 'watch']);
};