(function() {
    $(document).ready(function() {
        var definitions = {
            nav: $('.nav'),
            mobile: $('#mobile-menu')
        };
        var funcRemove = function() {
            definitions.nav.removeClass('mobileNavOpen');
            definitions.mobile.removeClass('open');
        };
        var funcToggle = function() {
            definitions.nav.toggleClass('mobileNavOpen');
            definitions.mobile.toggleClass('open');
        };
        definitions.mobile
            .on('click', funcToggle);
        $(window)
            .on('resize', funcRemove)
            .on('click', function(event) {
                if (($(event.target).parents('#mobile-menu').attr('id') || event.target.id) !== 'mobile-menu') {
                    funcRemove();
                }
            });
    });
}());
