module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),
            connect: {
                options: {
                    port: '9003',
                    hostname: 'localhost',
                    protocol: 'http',
                    open: true,
                    keepalive: true,
                    base: {
                        path: './',
                        options: {
                            index: 'index.html'
                        }
                    }
                },
                default: {}
            }
        }
    );
};