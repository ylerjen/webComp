module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt); // 

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    babel: {
      options: {
        sourceMap: false,
        presets: ['es2015']
      },
      dist: {
        files: [
          {cwd: 'src', src: '**/*.js', dest: 'tmp/', expand: true},
        ]
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
        process: true,
        data: {
          message: 'This is production distribution'
        }
      },
      dist: {
        files: {
          'dist/webcomponents/index.html': ['src/webcomponents/index.html']
        }
      },
    },
    sass: {
      dist: {                            // Target
        options: {                       // Target options
          style: 'expanded'
        },
        files: [{
            expand: true,
            cwd: 'src',
            src: ['**/*.scss'],
            dest: 'src',
            ext: '.css'
        }]
      }
    },
    watch: {
      files: ['src/**/*.*'],
      tasks: ['build']
    }
  });

  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('build', ['copy', 'processhtml']);
  grunt.registerTask('dev', ['browserSync', 'watch']);



};