module.exports = function(grunt) {

grunt.initConfig({

  compass: {
    dist: {
      options: {
        config: 'config.rb'
      }
    }
  },

  postcss: {
            options: {
                map: true,
                processors: [
                    require('autoprefixer-core')({
                        browsers: ['last 2 versions']
                    })
                ]
            },
    dist: {
      src: 'css/*.css'
    }
  },

  concat: {
    css: {
      src: ['css/*.css'],
      dest: 'build/styles.css',
    },
    js: {
      src: ['js/lity.js','js/site_main.js'],
      dest: 'build/scripts.js',
    }
  },

  cssmin: {
    options: {
      roundingPrecision: -1
    },
    target: {
      files: {
        'build/styles.min.css': ['build/styles.css']
      }
    }
  },

  uglify: {
    js: {
      files: {
        'build/scripts.min.js': ['build/scripts.js']
      }
    }
  },

  watch: {
    sass: {
      files: ['sass/*.scss'],
      tasks: ['compass'],
    },
    css: {
      files: ['css/*.css'],
      tasks: ['concat:css', 'postcss', 'cssmin'],
    },
    js: {
      files: ['js/*.js'],
      tasks: ['concat:js', 'uglify'],
    }
  }

});

grunt.registerTask('default', ['concat', 'postcss', 'cssmin', 'uglify']);

grunt.loadNpmTasks('grunt-postcss');
grunt.loadNpmTasks('grunt-contrib-compass');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-watch');

};