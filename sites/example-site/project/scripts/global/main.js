
require.config({
    paths: {
        jquery: '../../bower_components/jquery/jquery',
        domReady: '../../bower_components/requirejs-domready/domready',
        modernizr: '../../bower_components/modernizr/modernizr',
        respond: '../../bower_components/respond/respond.src',
        app: '../../scripts/global/app'
    },
    shim: {
    }
});

require(['jquery', 'domReady', 'modernizr'], function($, domReady) {
    'use strict';
    domReady(function() {
        // Place Code Here
    });
});
