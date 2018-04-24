module.exports = function(grunt) {
    grunt.initConfig({
  
      concat : {
        dist : {
          src: [
                 'js/*.js'
            ],
          dest: 'builds/develop/js/scripts.js'
        }
      }, //concat

      uglify: {
        dist: {
           files: {
              'builds/develop/js/scripts.min.js': 'builds/develop/js/scripts.js',
           }
        }
     }, // compress JS
  
      sass: {
        dist: {
          options: {
            outputStyle: 'compressed',
            sourceMap: true
          },
          files : [{
            src: 'scss/styles.scss',
            dest: 'builds/develop/css/styles.css'
          }]
        }
      }, //sass

      imagemin: {
        static: {
            options: {
                optimizationLevel: 7
            },
            files: [{
              expand: true,
              cwd: 'builds/develop/images/',
              src: [
                '*.{png,jpg,gif}'
              ],
              dest: 'builds/develop/images/'
           }]
        } // Compress images
    },
  
      connect: {
        sever: {
          options: {
            hostname: 'localhost',
            port: 3000,
            base: 'builds/develop/',
            livereload: true
          }
        }
      },
  
      watch: {
        options: {
          spawn: false,
          livereload: true
        },
        scripts: {
          files: [
              'builds/develop/*.html',
              'js/**/*.js',
              'scss/**/*.scss'],
          tasks: ['concat', 'uglify', 'sass']
        }
      }
  
  
    }); //initConfig
  
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
  
    grunt.registerTask(
        'default', [
            'concat', 
            'uglify', 
            'sass', 
            'connect', 
            'watch'
        ]);
  
  }; //wrapper function
