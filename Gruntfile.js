module.exports = function(grunt) {
  // Load plugins.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      build: ['build'],
      dist: ['dist']
    },
    concat: {
      options: {
        banner: '/*! <%= pkg.name %> -v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */\n\n'
      },
      dist: {
        src: [
          'src/**/*.js',
          'vendor/angular/angular.js',
          'vendor/angular-resource/angular-resource.js',
          'vendor/bootstrap/js/bootstrap.js'
        ],
        dest: 'build/app.js'
      }
    },
    uglify: {
      dist: {
        src: 'build/app.js',
        dest: 'dist/app.min.js'
      }
    },
    watch: {
    }
  });

  // Build task.
  grunt.registerTask('build', [
    'clean:build',
    'concat'
  ]);

  // Release task.
  grunt.registerTask('release', [
    'clean:dist',
    'concat',
    'uglify:dist'
  ]);
  
  grunt.registerTask('default', ['watch']);
};
