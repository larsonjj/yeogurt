module.exports = function (grunt) {
    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        hub: {
            all: {
                src: ['./sites/{,*/}/Gruntfile.js'],
                tasks: ['build']
            },
            server: {
                src: ['./sites/{,*/}/Gruntfile.js'],
                tasks: ['server']
            },
            sftp: {
                src: ['./sites/{,*/}/Gruntfile.js'],
                tasks: ['sftp']
            }
        }
    });
    grunt.registerTask('default', [
        'hub:all'
    ]);
    grunt.registerTask('server', [
        'hub:server'
    ]);
    grunt.registerTask('sftp', [
        'hub:sftp'
    ]);
};
