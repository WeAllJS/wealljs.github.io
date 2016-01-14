module.exports = function (grunt) {
  require('time-grunt')(grunt);
  require('jit-grunt')(grunt, {});

  grunt.initConfig({
    site: {
      app: 'app',
      dist: 'dist'
    },

    clean: {
      init: '<%= site.dist %>'
    },

    jekyll: {
      options: {
        bundleExec: true,
        config: '_config.yml',
        dest: '<%= site.dist %>',
        src: '<%= site.app %>'
      },
      build: {
        options: {
          config: '_config.yml,_config.build.yml'
        }
      },
      server: {
        options: {
          config: '_config.yml'
        }
      },
      check: {
        options: {
          doctor: true
        }
      }
    },

    copy: {
      images: {
        files: [
          {
            expand: true,
            dot: true,
            cwd: '<%= site.app %>',
            src: [
              'img/**/*',
              'favicon.ico',
              'touch-icon-*.*'
            ],
            dest: '<%= site.dist %>'
          }
        ]
      }
    },

    less: {
      styles: {
        options: {
          compress: false,
          sourceMap: true
        },
        files: {
          '<%= site.dist %>/css/core.css': '<%= site.app %>/_less/core.less'
        }
      }
    },

    concat: {
      options: {
        sourceMap: true,
        separator: grunt.util.linefeed + ';'
      },
      scripts: {
        files: [
          {
            dest: '<%= site.dist %>/js/scripts.js',
            src: [
              '<%= site.app %>/_js/modules/retina-images.js',
              '<%= site.app %>/_js/core.js'
            ]
          }
        ]
      }
    },

    concurrent: {
      tasks: [
        'copy:images',
        'less:styles',
        'concat:scripts'
      ]
    },

    connect: {
      options: {
        hostname: '0.0.0.0',
        port: 9001,
        middleware: function (connect, options, middlewares) {
          middlewares.unshift(function (request, response, next) {
            response.setHeader('Access-Control-Allow-Origin', '*');
            response.setHeader('Access-Control-Allow-Methods', '*');
            return next();
          });
          return middlewares;
        },
        useAvailablePort: true
      },
      server: {
        options: {
          base: '<%= site.dist %>'
        }
      }
    },

    watch: {
      images: {
        files: ['<%= site.app %>/img/**/*.*'],
        tasks: ['copy:images']
      },
      less: {
        files: ['<%= site.app %>/_less/**/*.less'],
        tasks: ['less:styles']
      },
      javascript: {
        files: ['<%= site.app %>/_js/**/*.js'],
        tasks: ['concat:scripts']
      },
      jekyll: {
        files: [
          '_*.*',
          '<%= site.app %>/**/*.{xml,html,yml,md,txt}'
        ],
        tasks: ['jekyll:server']
      }
    },

    postcss: {
      options: {
        map: {inline: false},
        processors: [
          require('autoprefixer')({
            browsers: 'last 2 versions'
          }),
          require('cssnano')()
        ]
      },
      build: {
        src: '<%= site.dist %>/css/core.css'
      }
    },

    uglify: {
      options: {
        sourceMap: true,
        sourceMapIncludeSources: true,
        check: 'gzip'
      },
      build: {
        files: {
          '<%= site.dist %>/js/scripts.js': '<%= site.dist %>/js/scripts.js'
        }
      }
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      scripts: [
        'Gruntfile.js',
        '<%= site.app %>/_js/**/*.js'
      ]
    },

    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      styles: {
        src: [
          '<%= site.dist %>/css/core.css'
        ]
      }
    },

    jsbeautifier: {
      options: {
        config: '.jsbeautifyrc'
      },
      verify: {
        src: [
          'Gruntfile.js',
          '<%= site.app %>/_js/**/*.js'
        ],
        options: {
          mode: 'VERIFY_ONLY'
        }
      },
      modify: {
        src: [
          'Gruntfile.js',
          '<%= site.app %>/_js/**/*.js'
        ]
      }
    }
  });

  grunt.registerTask('dev', [
    'clean:init',
    'jekyll:server',
    'concurrent:tasks',
    'connect:server',
    'watch'
  ]);

  grunt.registerTask('build', [
    'clean:init',
    'jekyll:build',
    'concurrent:tasks',
    'postcss:build',
    'uglify:build'
  ]);

  grunt.registerTask('test', [
    'jshint:scripts',
    'csslint:styles',
    'jsbeautifier:verify'
  ]);

  grunt.registerTask('beautify', [
    'jsbeautifier:modify'
  ]);

  grunt.registerTask('default', [
    'dev'
  ]);
};
