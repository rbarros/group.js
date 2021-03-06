module.exports = function(grunt) {
    'use strict';
    grunt.initConfig({
        pkg: grunt.file.readJSON('Group.jquery.json'),
        banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
              '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
              '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
              '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
              ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
        min: {
          dist: {
            src: ['src/<%= pkg.name %>.js'],
            dest: 'dist/<%= pkg.name %>.min.js'
          }
        },
        // Task configuration.
        clean: {
            files: ['dist']
        },
        connect: {
            server: {
                options: {
                    port: 9001,
                    hostname: '*',
                    keepalive: true
                }
            }
        },
        less: {
            development: {
                options: {
                    paths: ['css']
                },
                files: {
                    "css/main.css": "css/main.less"
                }
            }
        },
        qunit: {
            options: {
                '--web-security': 'no',
                coverage: {
                  src: ['src/**/*.js'],
                  instrumentedFiles: 'temp/',
                  htmlReport: 'report/coverage',
                  coberturaReport: 'report/',
                  linesThresholdPct: 85
                }
            },
            all: ['test/**/*.html']
        },
        uglify: {
            options: {
                banner: '<%= banner %>'
            },
            dist: {
              files: {
                'dist/<%= pkg.name %>.min.js': ['src/<%= pkg.name %>.js']
              }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-qunit-istanbul');

    grunt.registerTask('default', ['connect:server', 'less', 'qunit', 'uglify']);
}