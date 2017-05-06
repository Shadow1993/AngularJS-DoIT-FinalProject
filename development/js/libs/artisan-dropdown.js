(function() {
    'use strict';
    $(document)
        .ready(function() {
            function funcPos(event) {
                var eTarget = event.target;
                var eTargetTop = eTarget.getBoundingClientRect().top;
                var eTargetLeft = eTarget.getBoundingClientRect().left;
                var myTarget = $(event.target).attr('data-artisan-dropdown');
                var positions = {
                    top: eTarget.offsetTop + eTargetTop + eTarget.offsetHeight,
                    left: eTargetLeft
                };

                if ($(myTarget).hasClass('artisan-dropdown-pos-left')) {
                    $(myTarget).css({
                        'top': positions.top,
                        'left': positions.left
                    });
                }
            }
            function funcHideAll() {
                funcHideSub();
                $('.artisan-dropdown-menu').slideUp();
            }
            function funcHideSub() {
                $('.artisan-dropdown-sub-menu').slideUp();
            }

            function funcDrop(event) {
                var myTarget = $(event.target).attr('data-artisan-dropdown');

                if ($(myTarget).hasClass('artisan-dropdown-sub-menu') && !$(myTarget).is(':visible')) {
                    funcHideSub();
                    $(myTarget).slideDown();
                } else if ($(myTarget).hasClass('artisan-dropdown-sub-menu') && $(myTarget).is(':visible')) {
                    funcHideSub();
                } else if ($(myTarget).hasClass('artisan-dropdown-menu') && !$(myTarget).is(':visible')) {
                    funcHideAll();
                    $(myTarget).slideDown();
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
