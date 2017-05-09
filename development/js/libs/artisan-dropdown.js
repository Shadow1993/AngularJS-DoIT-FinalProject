(function() {
    'use strict';
    $(document).ready(function() {
        var funcHideMain = function() {
            $('.artisan-dropdown-menu').slideUp();
        };
        var funcHideSub = function() {
            $('.artisan-dropdown-sub-menu').slideUp();
        };
        var funcHideAll = function() {
            funcHideSub();
            funcHideMain();
        };
        // function funcPos(event) {
        //     var eTarget = event.target;
        //     var eTargetTop = eTarget.getBoundingClientRect().top;
        //     var eTargetLeft = eTarget.getBoundingClientRect().left;
        //     var myTarget = $(event.target).attr('data-artisan-dropdown');
        //     var positions = {
        //         top: eTarget.offsetTop + eTargetTop + eTarget.offsetHeight,
        //         left: eTargetLeft
        //     };

        //     if ($(myTarget).hasClass('artisan-dropdown-pos-left')) {
        //         $(myTarget).css({
        //             'top': positions.top,
        //             'left': positions.left
        //         });
        //     }
        // }

        var funcDrop = function(event) {
            var eObj = {
                eTarget: event.target,
                eTargetBoundTop: event.target.getBoundingClientRect().top,
                eTargetBoundLeft: event.target.getBoundingClientRect().left,
                nodeMain: $(event.target),
                nodeMainDrop: $(event.target).attr('data-artisan-dropdown'),
                nodeParent: $(event.target).parents('[data-artisan-dropdown]'),
                nodeParentDrop: $($(event.target).parents('[data-artisan-dropdown]')).attr('data-artisan-dropdown')
            };
            var eDrop = {
                nodeMain: $(eObj.nodeMainDrop),
                nodeParent: $(eObj.nodeParentDrop)
            };
            var eClass = {
                nodeMain: $(eDrop.nodeMain).hasClass('artisan-dropdown-menu'),
                nodeMainParent: $(eDrop.nodeParent).hasClass('artisan-dropdown-menu'),
                nodeSub: $(eDrop.nodeMain).hasClass('artisan-dropdown-sub-menu'),
                nodeSubParent: $(eDrop.nodeParent).hasClass('artisan-dropdown-sub-menu')
            };

            var funcPosition = function() {
                var positions = {
                    top: eObj.eTarget.offsetTop + eObj.eTargetBoundTop + eObj.eTarget.offsetHeight,
                    left: eObj.eTargetBoundLeft
                };
                if ($(eDrop.nodeMain).hasClass('artisan-dropdown-pos-left')) {
                    $(eDrop.nodeMain).css({
                        'top': positions.top,
                        'left': positions.left
                    });
                }
            };
            var funcPositionParent = function() {
                var top = {
                    bounding: eObj.nodeParent[0].getBoundingClientRect().top,
                    offsetTop: eObj.nodeParent[0].offsetTop,
                    offsetHeight: eObj.nodeParent[0].offsetHeight
                };
                var positions = {
                    top: top.bounding + top.offsetTop + top.offsetHeight,
                    left: eObj.nodeParent[0].getBoundingClientRect().left
                };
                if ($(eDrop.nodeParent).hasClass('artisan-dropdown-pos-left')) {
                    $(eDrop.nodeParent).css({
                        'top': positions.top,
                        'left': positions.left
                    });
                }
            };

            if (eClass.nodeMain || eClass.nodeMainParent || eClass.nodeSub || eClass.nodeSubParent) {
                funcHideSub();
                //MAINMENU
                if (eClass.nodeMain) {
                    funcPosition();
                    if (!$(eDrop.nodeMain).is(':visible')) {
                        funcHideMain();
                        $(eDrop.nodeMain).slideDown();
                    } else if ($(eDrop.nodeMain).is(':visible')) {
                        funcHideMain();
                    }
                } else if (eClass.nodeMainParent) {
                    funcPositionParent();
                    if (!$(eDrop.nodeParent).is(':visible')) {
                        funcHideMain();
                        $(eDrop.nodeParent).slideDown();
                    } else if ($(eDrop.nodeParent).is(':visible')) {
                        funcHideMain();
                    }
                //SUBMENU
                } else if (eClass.nodeSub) {
                    if (!$(eDrop.nodeMain).is(':visible')) {
                        funcHideSub();
                        $(eDrop.nodeMain).slideDown();
                    } else if ($(eDrop.nodeMain).is(':visible')) {
                        funcHideSub();
                    }
                } else if (eClass.nodeSubParent) {
                    if (!$(eDrop.nodeParent).is(':visible')) {
                        funcHideSub();
                        $(eDrop.nodeParent).slideDown();
                    } else if ($(eDrop.nodeParent).is(':visible')) {
                        funcHideSub();
                    }
                }
            } else {
                funcHideAll();
            }
        };

        $(window)
            .on('resize', funcHideAll)
            .on('click', funcDrop);
    });
}());
