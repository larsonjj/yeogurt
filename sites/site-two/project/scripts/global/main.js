
require.config({
    paths: {
        jquery: '../../bower_components/jquery/jquery',
        domReady: '../../bower_components/requirejs-domready/domready',
        modernizer: '../../bower_components/modernizr/modernizr',
        respond: '../../bower_components/respond/respond.src',
        foundation: '../../bower_components/foundation/js/foundation/foundation',
        topbar: '../../bower_components/foundation/js/foundation/foundation.topbar',
        orbit: '../../bower_components/foundation/js/foundation/foundation.orbit',
        forms: '../../bower_components/foundation/js/foundation/foundation.forms',
        app: '../../scripts/global/app'
    },
    shim: {
        'foundation': {
            deps: ['jquery']
        },
        'topbar': {
            deps: ['jquery', 'foundation']
        },
        'orbit': {
            deps: ['jquery', 'foundation']
        },
        'forms': {
            deps: ['jquery', 'foundation']
        }
    }
});

require(['jquery', 'domReady', 'foundation', 'topbar', 'orbit', 'forms', 'respond'], function($, domReady) {
    'use strict';
    domReady(function() {
        $(document).foundation(); // initialize Foundation JS
    });
});
