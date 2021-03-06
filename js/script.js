$(document).ready(function() {
    $('.slide-show > ul:eq(0)').cycle({
        fx: 'fade',
        speed: 800,
        timeout: 6000,
        pager: '.pbs-controls',
        activePagerClass: 'pbs-activeSlide',
        before: function() {

        },
        after: function() {
            $('.pbs-details', arguments[0]).removeClass('pbs-show');
            $('.pbs-pattern', arguments[0]).removeClass('pbs-dd');
            $('.pbs-details', arguments[1]).addClass('pbs-show');
            $('.pbs-pattern', arguments[1]).addClass('pbs-dd');
        }
    });

    $('.btn-mobile-menu').bind('click', function(e) {
        e.preventDefault();
        $('.mobile-nav').toggleClass('active');
    });

    $('.nav-click').bind('click', function(e) {
        e.preventDefault();
        $(this).siblings('.mobile-nav-submenu').toggleClass('active');
    });
});
