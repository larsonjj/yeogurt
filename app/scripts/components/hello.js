'use strict';

// Asyncronous with module loading
require(['domReady!', 'jquery'], function(domReady, $) {
    console.log('jQuery Test: grabbing footer element (below)');
    console.log($('footer'));
});

console.log('Testing, should be first in console (Synchronous)');
