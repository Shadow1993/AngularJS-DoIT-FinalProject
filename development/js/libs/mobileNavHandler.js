(function() {
    'use strict';

    var funcRemove = function() {
        $('.nav').removeClass('mobileNavOpen');
        $('#mobile-menu').removeClass('open');
    };

    var funcAdd = function() {
        $('.nav').addClass('mobileNavOpen');
        $('#mobile-menu').addClass('open');
    };

    var spammers = function() {
        if ($('#navDropMobile1').css('display') === 'block') {
            funcAdd();
        } else {
            funcRemove();
        }
    };

    $(window)
        .on('resize', funcRemove)
        .on('click', function(event) {
            var funcToggle = function() {
                $('.nav').toggleClass('mobileNavOpen');
                $('#mobile-menu').toggleClass('open');
                //Spam click fix
                setTimeout(spammers, 900);
            };
            var testFor = {
                parent: $(event.target).parents('#mobile-menu').attr('id') === 'mobile-menu',
                target: event.target.id === 'mobile-menu',
                sub: $(event.target).hasClass('subDrop')
            };
            if (testFor.parent || testFor.target) {
                funcToggle();
            } else if (testFor.sub) {

            } else {
                funcRemove();
            }
        });
}());
