(function() {
    'use strict';
    $(document)
        .ready(function() {
            function funcPos(event) {
                var responsiveFix = parseInt($('.artisan-responsive').css('margin-left'));
                var eTarget = event.target;
                var eTargetTop = eTarget.getBoundingClientRect().top;
                var eTargetLeft = eTarget.getBoundingClientRect().left;
                var myTarget = $(event.target).attr('data-artisan-dropdown');
                var positions = {
                    top: eTarget.offsetTop + eTargetTop + eTarget.offsetHeight,
                    left: eTargetLeft + responsiveFix
                };

                if ($(myTarget).hasClass('artisan-dropdown-pos-left')) {
                    $(myTarget).css({
                        'top': positions.top,
                        'left': positions.left
                    });
                }
            }
            function funcHideAll() {
                $('.artisan-dropdown-menu-dropped').addClass('artisan-dropdown-menu');
                $('.artisan-dropdown-menu-dropped').removeClass('artisan-dropdown-menu-dropped');
            }
            function funcDrop(event) {
                var myTarget = $(event.target).attr('data-artisan-dropdown');
                if ($(myTarget).hasClass('artisan-dropdown-menu')) {
                    funcHideAll();
                    $(myTarget).addClass('artisan-dropdown-menu-dropped');
                    $(myTarget).removeClass('artisan-dropdown-menu');
                } else {
                    funcHideAll();
                }
            }
            $(window)
                .on('resize', funcHideAll)
                .on('click', funcPos)
                .on('click', funcDrop);
        });
}());
