(function() {
    'use strict';
    $(document).ready(
        function() {
            function funcDrop(event) {
                var myTarget = $(event.target).attr('data-artisan-dropdown');
                if ($(myTarget).hasClass('artisan-dropdown-menu')) {
                    $(myTarget).removeClass('artisan-dropdown-menu');
                    $(myTarget).addClass('artisan-dropdown-menu-dropped');
                } else if ($(myTarget).hasClass('artisan-dropdown-menu-dropped')) {
                    $(myTarget).removeClass('artisan-dropdown-menu-dropped');
                    $(myTarget).addClass('artisan-dropdown-menu');
                }
            }
            $(document).on('click', funcDrop);
        });
}());
