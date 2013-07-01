/* jshint camelcase: false */
'use strict';

// Asyncronous with module loading
require(['domReady', 'jquery', 'orbit'], function(domReady, $) {
    domReady(function() {
        console.log($('body'));
    });
});
