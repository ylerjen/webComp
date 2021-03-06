module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt); // 

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
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
			    	watchTask: true,
            server: "./dist"
        }
    },
    clean: {
      dist: 'dist',
      temp: 'tmp'
    },
    copy: {
      dist: {
        files: [
          {cwd: 'src', src: '**/*', dest: 'tmp/', expand: true},
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
          'dist/es6-card/es6-card.html': ['src/es6-card/es6-card.html'],
          'dist/yl-card/yl-card.html': ['tmp/yl-card/yl-card.html'],
          'dist/index.html': ['src/index.html']

        }
      },
    },
    sass: {
      dist: {                            // Target
        options: {                       // Target options
          style: 'expanded',
          sourcemap: 'none'
        },
        files: [{
            expand: true,
            cwd: 'src',
            src: ['**/*.scss'],
            dest: 'tmp',
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
  grunt.registerTask('build', [/*'clean',*/ 'copy', 'babel', 'sass', 'processhtml', 'clean:temp']);
  grunt.registerTask('dev', ['build', 'browserSync', 'watch']);

};