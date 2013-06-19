require.config({
    baseUrl: '/scripts/global',
    paths: {
        jquery: '../../bower_components/jquery/jquery',
        domReady: '../../bower_components/requirejs-domready/domready',
        modernizer: '../../bower_components/modernizr/modernizr',
        app: '../../scripts/global/app'
    }
});

require(['app', 'jquery', 'domReady'], function(app, $, domReady) {
    'use strict';
    console.log(app);
    console.log(domReady);
    return console.log('Running jQuery %s', $().jquery);
});
