(function() {
    'use strict';
    $(document)
        .ready(function() {
            function funcPos(event) {
                var responsiveFix = $('.artisan-responsive').css('margin-left').replace(/[^-\d.]/g, '');
                console.log(responsiveFix);
                var eTarget = event.target;
                var myTarget = $(event.target).attr('data-artisan-dropdown');
                var positions = {
                    top: eTarget.offsetTop + eTarget.getBoundingClientRect().top + eTarget.offsetHeight,
                    left: (eTarget.offsetLeft + responsiveFix) + (eTarget.offsetWidth / 4)
                };
                console.log('top: ' + positions.top);
                console.log('left: ' + positions.left);
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
                    $(myTarget).removeClass('artisan-dropdown-menu');
                    $(myTarget).addClass('artisan-dropdown-menu-dropped');
                } else {
                    funcHideAll();
                }
            }
            $(window)
                .on('resize', funcPos)
                .on('resize', funcHideAll)
                .on('click', funcPos)
                .on('click', funcDrop);
        });
}());
