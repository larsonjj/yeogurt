module.exports = function (grunt) {
    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        hub: {
            all: {
                src: ['./{,*/}/Gruntfile.js'],
                tasks: ['build']
            },
            server: {
                src: ['./{,*/}/Gruntfile.js'],
                tasks: ['server']
            }
        }
    });
    grunt.registerTask('default', [
        'hub:all'
    ]);
    grunt.registerTask('server', [
        'hub:server'
    ]);
};