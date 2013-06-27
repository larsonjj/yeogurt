
require.config({
    paths: {
        jquery: '../../bower_components/jquery/jquery',
        domReady: '../../bower_components/requirejs-domready/domready',
        modernizer: '../../bower_components/modernizr/modernizr',
        respond: '../../bower_components/respond/respond.src',
        foundation: '../../bower_components/foundation/js/foundation/foundation',
        app: '../../scripts/global/app'
    }
});

require(['app', 'jquery', 'domReady', 'respond'], function(app, $) {
    'use strict';
    console.log(app);
    return console.log('Running jQuery %s', $().jquery);
});
