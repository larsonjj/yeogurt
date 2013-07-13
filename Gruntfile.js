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
            deploy: {
                src: ['./sites/{,*/}/Gruntfile.js'],
                tasks: ['deploy']
            }
        }
    });
    grunt.registerTask('default', [
        'hub:all'
    ]);
    grunt.registerTask('server', [
        'hub:server'
    ]);
    grunt.registerTask('deploy', [
        'hub:deploy'
    ]);
};
