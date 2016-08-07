module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    browserSync: {
        bsFiles: {
            src : [
              'dist/**/*.html'
            ]
        },
        options: {
            server: {
                watchTask: true,
                baseDir: "./dist/"
            }
        }
    },
    copy: {
      dist: {
        files: [
          {cwd: 'src', src: '**/*', dest: 'dist/', expand: true},
          {cwd: 'node_modules', src: 'webcomponents.js/webcomponents.js', dest: 'dist/vendor/', expand: true}
        ]
      }
    },
    processhtml: {
      options: {
        // Task-specific options go here. 
      },
      dist: {
        files: {
          'dist/index.html': ['index.html']
        }
      },
    },
    sass: {

    },
    watch: {
      files: ['src/**/*.*'],
      tasks: ['build']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-processhtml');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('build', ['processhtml', 'copy']);
  grunt.registerTask('dev', ['browserSync', 'watch']);



};