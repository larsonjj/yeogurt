$(document).ready(function(){
    'use strict';
    var windowWidth = $(window).width(),
        toggleNavTrigger = $('.toggle-nav ul a:first-child'),
        rockflickerImage = $('.project-list-item a.image');

    // Image Preview on Hover (only on desktop)
    if(windowWidth > 480) {
        if(rockflickerImage.length){
            rockflickerImage.on('mouseover', function(){
                $(this).append('<div class="preview-thumb"><img src="'+this.href+'" width="84" /></div>');
                $('.preview-thumb').fadeIn('fast');
            }).on('mouseout', function(){
                $('.preview-thumb').remove();
            });
        }
    }

    // Toggle Nav
    toggleNavTrigger.on('click', function() {
        if (!$(this).hasClass('open')) {
            $(this).children().html('-');
            $(this).next().slideDown('fast');
            $(this).addClass('open');
        }
        else {
            $(this).children().html('+');
            $(this).next().slideUp('fast');
            $(this).removeClass('open');
        }
    });

});
