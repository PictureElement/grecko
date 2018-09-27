module.exports = function(grunt) {

  grunt.initConfig({
    
    purifycss: {
      options: {},
      target: {
        src: ['src/index.html', 'src/pages/*.html', 'src/js/*.js'],
        css: ['src/css/*.css'],
        dest: 'dist/css/purestyles.css'
      },
    },

    cssmin: {
      t1: {
        files: [{
          expand: true,
          cwd: 'dist/css/',
          src: ['purestyles.css'],
          dest: 'dist/css/',
          ext: '.css'
        }]
      }
    },
    
    uglify: {
      t1: {
        files: [{
          expand: true,
          cwd: 'src/js/',
          src: '*.js',
          dest: 'dist/js'
        }]
      }
    },

    copy: {
      t1: {
        expand: true,
        cwd: 'src/pages/',
        src: '*.html',
        dest: 'dist/pages/'
      },
      t2: {
        expand: true,
        cwd: 'src/',
        src: 'index.html',
        dest: 'dist/'
      },
      t3: {
        expand: true,
        cwd: 'src/',
        src: 'manifest.json',
        dest: 'dist/'
      },
      t4: {
        expand: true,
        cwd: 'src/',
        src: 'service-worker.js',
        dest: 'dist/'
      }
    },

    critical: {
      t1: {
        options: {
          base: 'dist/',
          css: [
            'dist/css/purestyles.css'
          ],
          width: 1920,
          height: 1080
        },
        src: 'dist/index.html',
        dest: 'dist/index.html'
      },
      t2: {
        options: {
          base: 'dist/',
          css: [
            'dist/css/purestyles.css'
          ],
          width: 1920,
          height: 1080
        },
        src: 'dist/pages/*.html',
        dest: 'dist/'
      }
    },

    htmlmin: {                                    
      t1: {                                     
        options: {                                 
          removeComments: true,
          collapseWhitespace: true
        },
        files: [{
          expand: true,
          cwd: 'dist/pages/',
          src: '*.html',
          dest: 'dist/pages/'
        }]
      },
      t2: {                                     
        options: {                                 
          removeComments: true,
          collapseWhitespace: true
        },
        files: [{
          expand: true,
          cwd: 'dist/',
          src: 'index.html',
          dest: 'dist/'
        }]
      }
    }

  });

  // Load the grunt plugins
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-purifycss');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-critical');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  
  // Default task(s).
  //grunt.registerTask('default', ['clean']);
  //grunt.registerTask('default', ['purifycss']);
  //grunt.registerTask('default', ['cssmin']);
  //grunt.registerTask('default', ['critical']);
  //grunt.registerTask('default', ['htmlmin']);
};
