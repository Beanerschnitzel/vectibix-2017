$(function() {
    var $headerHeight = $('.headerMain').outerHeight();
    var $notifyHeight = $('.notifyMain').outerHeight();
    var $mergedHeight = $headerHeight + $notifyHeight;
    var shrinkHeader = 300;
    $(window).scroll(function() {
        var scroll = getCurrentScroll();
        if (scroll >= shrinkHeader) {
            $('.headerMain').addClass('is-sticky');
            $("main").css("padding-top", $mergedHeight);
        } else {
            $('.headerMain').removeClass('is-sticky');
            $("main").css("padding-top", '');
        }
    });

    function getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }
});
