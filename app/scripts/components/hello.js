'use strict';

require(['domReady!', 'jquery'], function(domReady, $) {
    console.log('\'Allo from CoffeeScript!');
    console.log($('#container').append('<h3>HELLO!</h3>'));
});

console.log('testing, should be first if async');
