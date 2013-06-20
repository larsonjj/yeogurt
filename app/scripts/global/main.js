require.config({
    paths: {
        jquery: '../../bower_components/jquery/jquery',
        domReady: '../../bower_components/requirejs-domready/domready',
        modernizer: '../../bower_components/modernizr/modernizr',
        bootstrap: 'vendor/bootstrap',
        app: '../../scripts/global/app'
    },
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    }
});

require(['app', 'jquery', 'domReady', 'bootstrap'], function(app, $) {
    'use strict';
    console.log(app);
    return console.log('Running jQuery %s', $().jquery);
});
