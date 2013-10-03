/* jshint camelcase: false */
'use strict';
var LIVERELOAD_PORT = Math.floor(Math.random() * (35729 - 35000 + 1)) + 35000;
var lrSnippet = require('connect-livereload')({port: LIVERELOAD_PORT});
var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // configurable paths
    var yeomanConfig = {
        project: 'project',
        dist: 'dist'
    };

    grunt.initConfig({
        yeoman: yeomanConfig,
        watch: {
            options: {
                nospawn: false
            },
            jade: {
                files: ['<%= yeoman.project %>/jade/{,*/}{,*/}*.jade'],
                tasks: ['jade:pages', 'jade:components']
            },
            jadeDashboard: {
                files: ['<%= yeoman.project %>/dashboard/{,*/}{,*/}*.jade'],
                tasks: ['jade:dashboard']
            },
            compass: {
                files: ['<%= yeoman.project %>/styles/{,*/}*.{scss,sass}'],
                tasks: ['compass:server', 'autoprefixer', 'concat:dist' ]
            },
            compassDashboard: {
                files: ['<%= yeoman.project %>/dashboard/{,*/}{,*/}*.{scss,sass}'],
                tasks: ['compass:dashboard', 'autoprefixer:dashboard' ]
            },
            styles: {
                files: ['<%= yeoman.project %>/styles/{,*/}*.css'],
                tasks: ['copy:styles', 'autoprefixer', 'concat:dist']
            },
            livereload: {
                options: {
                    livereload: LIVERELOAD_PORT
                },
                files: [
                    '<%= yeoman.project %>/*.html',
                    '<%= yeoman.project %>/html/{,*/}*.html',
                    '.tmp/styles/{,*/}*.css',
                    '{.tmp,<%= yeoman.project %>}/scripts/{,*/}*.js',
                    '<%= yeoman.project %>/dashboard/scripts/{,*/}*.js',
                    '<%= yeoman.project %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
                ]
            }
        },
        svninfo: {},
        // gzip assets 1-to-1 for production
        compress: {
            main: {
                options: {
                    mode: 'zip',
                    pretty: true,
                    archive: '<%= yeoman.project %>/../dist/svn-r<%= svninfo.rev %>.zip'
                },
                expand: true,
                cwd: '<%= yeoman.project %>/../dist',
                src: ['*/**']
            }
        },
        // don't keep passwords in source control
        secret: grunt.file.readJSON('.ftppass'),
        'ftp-deploy': {
            build: {
                auth: {
                    host: '<%= secret.host %>',
                    port: 21,
                    authKey: 'key1'
                },
                src: '<%= yeoman.dist %>',
                dest: '<%= secret.serverPath %>',
                exclusions: [],
                server_sep: '/'
            }
        },
        connect: {
            options: {
                port: Math.floor(Math.random() * (9000 - 8000 + 1)) + 8000,
                // change this to '0.0.0.0' to access the server from outside
                hostname: '0.0.0.0'
            },
            livereload: {
                options: {
                    middleware: function (connect) {
                        return [
                            lrSnippet,
                            mountFolder(connect, '.tmp'),
                            mountFolder(connect, yeomanConfig.project)
                        ];
                    }
                }
            },
            test: {
                options: {
                    middleware: function (connect) {
                        return [
                            mountFolder(connect, '.tmp'),
                            mountFolder(connect, 'test')
                        ];
                    }
                }
            },
            dist: {
                options: {
                    middleware: function (connect) {
                        return [
                            mountFolder(connect, yeomanConfig.dist)
                        ];
                    }
                }
            }
        },
        open: {
            server: {
                path: 'http://localhost:<%= connect.options.port %>/'
            }
        },
        markdown: {
            all: {
                files: [
                    {
                        '<%= yeoman.project %>/index.html': '<%= yeoman.project %>/*.md'
                    }
                ]
            }
        },
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%= yeoman.dist %>/*',
                        '!<%= yeoman.dist %>/.git*'
                    ]
                }]
            },
            server: '.tmp'
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                'Gruntfile.js',
                '<%= yeoman.project %>/scripts/{,*/}*.js',
                '!<%= yeoman.project %>/scripts/global/*',
                'test/spec/{,*/}*.js'
            ]
        },
        csslint: {
            options: {
                csslintrc: '.csslintrc'
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/styles/',
                    src: 'main.css',
                    dest: '.tmp/styles/'
                }]
            }
        },
        mocha: {
            all: {
                options: {
                    run: true,
                    urls: ['http://localhost:<%= connect.options.port %>/index.html']
                }
            }
        },
        jade: {
            pages: {
                options: {
                    pretty: true,
                    client: false,
                    data: {
                        debug: true
                    }
                },
                dest: '<%= yeoman.project %>/html/pages/',
                src: ['<%= yeoman.project %>/jade/pages/*.jade']
            },
            components: {
                options: {
                    pretty: true,
                    client: false,
                    data: {
                        debug: true
                    }
                },
                dest: '<%= yeoman.project %>/html/components/',
                src: ['<%= yeoman.project %>/jade/components/*.jade']
            },
            dashboard: {
                options: {
                    pretty: true,
                    client: false,
                    data: {
                        debug: true
                    }
                },
                dest: '<%= yeoman.project %>/dashboard',
                src: ['<%= yeoman.project %>/dashboard/jade/pages/*.jade']
            },
            distPages: {
                options: {
                    pretty: true,
                    client: false,
                    data: {
                        debug: false
                    }
                },
                dest: '<%= yeoman.dist %>/html/pages/',
                src: ['<%= yeoman.project %>/jade/pages/*.jade']
            },
            distComponents: {
                options: {
                    pretty: true,
                    client: false,
                    data: {
                        debug: false
                    }
                },
                dest: '<%= yeoman.dist %>/html/components/',
                src: ['<%= yeoman.project %>/jade/components/*.jade']
            }
        },
        concat: {
            options: {
                separator: ' '
            },
            dist: {
                src: ['.tmp/styles/lib.css', '.tmp/styles/main.css'],
                dest: '.tmp/styles/main.css'
            }
        },
        compass: {
            dist: {
                options: {
                    sassDir: '<%= yeoman.project %>/styles',
                    cssDir: '.tmp/styles',
                    generatedImagesDir: '.tmp/images/generated',
                    imagesDir: '<%= yeoman.project %>/images',
                    javascriptsDir: '<%= yeoman.project %>/scripts',
                    fontsDir: '.tmp/styles/fonts',
                    importPath: '<%= yeoman.project %>/bower_components',
                    httpImagesPath: '/projects/live-positively/dist/images',
                    httpGeneratedImagesPath: '/projects/live-positively/dist/images/generated',
                    httpFontsPath: '/styles/fonts',
                    relativeAssets: false
                }
            },
            server: {
                options: {
                    sassDir: '<%= yeoman.project %>/styles',
                    cssDir: '.tmp/styles',
                    generatedImagesDir: '.tmp/images/generated',
                    imagesDir: '<%= yeoman.project %>/images',
                    javascriptsDir: '<%= yeoman.project %>/scripts',
                    fontsDir: '<%= yeoman.project %>/styles/fonts',
                    importPath: '<%= yeoman.project %>/bower_components',
                    httpImagesPath: '/images',
                    httpGeneratedImagesPath: '/images/generated',
                    httpFontsPath: '/styles/fonts',
                    debugInfo: true,
                    relativeAssets: false
                }
            },
            dashboard: {
                options: {
                    sassDir: '<%= yeoman.project %>/dashboard/styles',
                    cssDir: '<%= yeoman.project %>/dashboard/styles',
                    debugInfo: true,
                    relativeAssets: false
                }
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 5 versions', '> 1%', 'ie 8']
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.project %>/dashboard/styles',
                    src: '{,*/}*.css',
                    dest: '<%= yeoman.project %>/dashboard/styles'
                }]
            },
            dashboard: {
                files: [{
                    expand: true,
                    cwd: '.tmp/styles/',
                    src: '{,*/}*.css',
                    dest: '.tmp/styles/'
                }]
            }
        },
        uglify: {
            dist: {
                options: {
                    compress: true,
                    report: 'min',
                    mangle: false
                },
                files: [{
                    expand: true,
                    src: '*.js',
                    dest: '.tmp/scripts/components/',
                    cwd: '<%= yeoman.project %>/scripts/components/',
                    ext: '.js'
                }, {
                    expand: true,
                    src: 'require.js',
                    dest: '<%= yeoman.dist %>/bower_components/requirejs/',
                    cwd: '<%= yeoman.project %>/bower_components/requirejs/',
                    ext: '.js'
                }]
            }
        },
        requirejs: {
            dist: {
                // Options: https://github.com/jrburke/r.js/blob/master/build/example.build.js
                options: {
                    // `name` and `out` is set by grunt-usemin
                    baseUrl: '<%= yeoman.project %>/scripts/global',
                    optimize: 'uglify2',
                    // TODO: Figure out how to make sourcemaps work with grunt-usemin
                    // https://github.com/yeoman/grunt-usemin/issues/30
                    generateSourceMaps: false,
                    // required to support SourceMaps
                    // http://requirejs.org/docs/errors.html#sourcemapcomments
                    preserveLicenseComments: false,
                    useStrict: true,
                    wrap: true,
                    uglify2: {
                        mangle: false
                    } // https://github.com/mishoo/UglifyJS2
                }
            }
        },
        useminPrepare: {
            options: {
                dest: '<%= yeoman.dist %>/scripts/global',
                uglify: 'none'
            },
            html: '<%= yeoman.project %>/html/pages/p001-homepage.html'
        },
        usemin: {
            options: {
                dirs: ['<%= yeoman.dist %>']
            },
            html: ['<%= yeoman.dist %>/{,*/}*.html'],
            css: ['<%= yeoman.dist %>/styles/{,*/}*.css']
        },
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.project %>/images',
                    src: '{,*/}*.{png,jpg,jpeg}',
                    dest: '<%= yeoman.dist %>/images'
                }]
            }
        },
        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.project %>/images',
                    src: '{,*/}*.svg',
                    dest: '<%= yeoman.dist %>/images'
                }]
            }
        },
        cssmin: {
            dist: {
                files: {
                    '<%= yeoman.dist %>/styles/main.css': [
                        '.tmp/styles/{,*/}*.css',
                        '<%= yeoman.project %>/styles/{,*/}*.css'
                    ]
                }
            }
        },
        htmlmin: {
            dist: {
                options: {
                    /*removeCommentsFromCDATA: true,
                    // https://github.com/yeoman/grunt-usemin/issues/44
                    //collapseWhitespace: true,
                    collapseBooleanAttributes: true,
                    removeAttributeQuotes: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true,*/
                    removeEmptyAttributes: true,
                    removeOptionalTags: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.project %>',
                    src: '*.html',
                    dest: '<%= yeoman.dist %>'
                }]
            }
        },
        // Put files not handled in other tasks here
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.project %>/bower_components',
                    dest: '<%= yeoman.dist %>/styles/fonts',
                    src: 'font-awesome/font/*'
                }, {
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.project %>',
                    dest: '<%= yeoman.dist %>',
                    src: [
                        '*.{ico,png,txt}',
                        '.htaccess',
                        'images/{,*/}*.{webp,gif}',
                        'styles/fonts/*'
                    ]
                }, {
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.project %>/bower_components',
                    dest: '<%= yeoman.dist %>/bower_components',
                    src: 'respond/*'
                }, {
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.project %>/bower_components',
                    dest: '<%= yeoman.dist %>/bower_components',
                    src: 'html5shiv/{,*/}*'
                }, {
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.project %>/bower_components',
                    dest: '<%= yeoman.dist %>/bower_components',
                    src: 'jquery/jquery.min.js'
                }, {
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.project %>',
                    dest: '<%= yeoman.dist %>',
                    src: ['dashboard/**', '!dashboard/**/jade/**']
                }, {
                    expand: true,
                    cwd: '.tmp/images',
                    dest: '<%= yeoman.dist %>/images',
                    src: [
                        'generated/*'
                    ]
                }, {
                    expand: true,
                    cwd: '.tmp/scripts',
                    dest: '<%= yeoman.dist %>/scripts',
                    src: [
                        '{,*/}*'
                    ]
                }]
            },
            styles: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.project %>/bower_components',
                    dest: '<%= yeoman.project %>/styles/fonts',
                    src: 'font-awesome/font/*'
                }]
            }
        },
        concurrent: {
            server: [
                'jade:pages',
                'jade:components',
                'jade:dashboard',
                'compass:server',
                'compass:dashboard'
            ],
            test: [
                'jshint',
                'autoprefixer',
                'csslint'
            ],
            dist: [
                'compass:dist',
                'compass:dashboard',
                'uglify',
                'imagemin',
                'svgmin',
                'htmlmin'
            ]
        }
    });

    grunt.registerTask('server', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'open', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'clean:server',
            'concurrent:server',
            'copy:styles',
            'concat',
            'autoprefixer',
            'markdown',
            'connect:livereload',
            'open:server',
            'watch'
        ]);
    });

    grunt.registerTask('test', function (target) {
        if (!target) {
            grunt.task.run(['compass:dist']);
        }

        grunt.task.run([
            'concurrent:test',
            'connect:test'
        ]);

        if (target === 'open') {
            grunt.task.run(['open','mocha']);
        }
        else {
            grunt.task.run(['mocha']);
        }
    });

    grunt.registerTask('build', [
        'clean:dist',
        'jade:distPages',
        'jade:distComponents',
        'jade:dashboard',
        'useminPrepare',
        'concurrent:dist',
        'autoprefixer',
        'requirejs',
        'cssmin',
        'uglify',
        'copy:dist',
        'usemin',
        'markdown'
    ]);

    grunt.registerTask('default', [
        'build',
        'test:building'
    ]);

    grunt.registerTask('deploy', function (target) {
        if (target === 'svn') {
            grunt.task.run(['svninfo']);
        }
        grunt.task.run ([
            'build',
            'test',
            'compress',
            'ftp-deploy'
        ]);
    });
};
