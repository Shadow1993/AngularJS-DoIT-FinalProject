(function() {
    'use strict';

    //Variables
    var mainVars = {
        mainTrigger: $('[data-artisan-dropdown]'),
        mainFrame: $('[data-artisan-dropdown]').attr('data-artisan-dropdown'),
        mainFrameFunc: $($('[data-artisan-dropdown]').attr('data-artisan-dropdown'))
    };
    mainVars.mainTrigger.on('click', funcDrop);

    function funcDrop(event) {
        var myTarget = $(event.target).attr('data-artisan-dropdown');
        // console.log(event.target.attributes);
        // console.log($(event.target).attr('data-artisan-dropdown'));
        // console.log(mainVars.mainTrigger);
        // console.log($.inArray('data-artisan-dropdown', event.target.attributes));
        if ($(myTarget).hasClass('artisan-dropdown-menu')) {
            $(myTarget).removeClass('artisan-dropdown-menu');
            $(myTarget).addClass('artisan-dropdown-menu-dropped');
        } else if ($(myTarget).hasClass('artisan-dropdown-menu-dropped')) {
            $(myTarget).removeClass('artisan-dropdown-menu-dropped');
            $(myTarget).addClass('artisan-dropdown-menu');
        }
    }
    // console.log(mainVars.mainFrameFunc);
}());
