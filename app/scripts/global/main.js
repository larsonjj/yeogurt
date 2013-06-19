require.config({
    baseUrl: '/scripts/global',
    paths: {
        jquery: '../../bower_components/jquery/jquery',
        app: '../../scripts/global/app',
        domReady: '../../scripts/global/domReady'
    }
});

require(['app', 'jquery'], function(app, $) {
    'use strict';
    console.log(app);
    return console.log('Running jQuery %s', $().jquery);
});
