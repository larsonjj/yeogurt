
require.config({
    paths: {
        jquery: '../../bower_components/jquery/jquery',
        bootstrapTransition: '../../bower_components/sass-bootstrap/js/transition',
        domReady: '../../bower_components/requirejs-domready/domready',
        modernizr: '../../bower_components/modernizr/modernizr',
        respond: '../../bower_components/respond/respond.src',
        app: '../../scripts/global/app'
    },
    shim: {
    }
});

require(['jquery', 'domReady', 'app', 'modernizr'], function($, domReady, app) {
    'use strict';
    /* Fix for IE10/Window Phone 8 viewport
    *
    * Internet Explorer 10 doesn't differentiate device width from viewport width,
    * and thus doesn't properly apply the media queries in Bootstrap's CSS.
    * app.win8IE10Fix() solves this issue (http://getbootstrap.com/getting-started/#browsers)
     */
    app.win8IE10Fix();

    domReady(function() {
        // Place Code Here
    });
});
