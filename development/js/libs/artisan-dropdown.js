(function() {
    'use strict';

    //Variables
    var mainVars = {
        mainTrigger: $('[data-artisan-dropdown]'),
        mainFrame: $('[data-artisan-dropdown]').attr('data-artisan-dropdown'),
        mainFrameFunc: $($('[data-artisan-dropdown]').attr('data-artisan-dropdown')),
    };
    mainVars.mainTrigger.on('click', funcDrop);

    function funcDrop(event) {
        console.log(event.target.attributes);
        console.log($.inArray('data-artisan-dropdown', event.target.attributes));
        if (mainVars.mainFrameFunc.hasClass('artisan-dropdown-menu')) {
            mainVars.mainFrameFunc.removeClass('artisan-dropdown-menu');
            mainVars.mainFrameFunc.addClass('artisan-dropdown-menu-dropped');
        } else if (mainVars.mainFrameFunc.hasClass('artisan-dropdown-menu-dropped')) {
            mainVars.mainFrameFunc.removeClass('artisan-dropdown-menu-dropped');
            mainVars.mainFrameFunc.addClass('artisan-dropdown-menu');
        }
    }
    console.log(mainVars.mainFrameFunc);
}());
