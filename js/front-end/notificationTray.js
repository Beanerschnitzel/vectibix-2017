$(document).ready(function() {
    var placeholder = $('<div class="js-notifyStickyPLaceholder"></div>');
    var toggleText = $('.notifySticky-toggle').text();
    var headerUtilHeight = $('.headerMain-util').outerHeight();
    var headerMainHeight = $('.headerMain-main').outerHeight();
    var notifyHeight = $('.notifyMain').outerHeight();
    var mergedHeight = headerUtilHeight + headerMainHeight + notifyHeight;
    $('.notifySticky').before(placeholder);
    $('.notifySticky-toggle').click(function() {

        if ($('.notifySticky').hasClass('full')) {
            $('body').removeClass('noScroll');
            $('.notifySticky').removeClass('full');
            $(this).text(toggleText)
            $('.notifySticky').css('height', '');
        } else {
            $('body').addClass('noScroll');
            $('.notifySticky').addClass('full');
            $(this).text('Close');
            if ($('.headerMain').hasClass('is-sticky')) {
                $('.notifySticky').css('height', 'calc(100vh - ' + headerMainHeight + 'px)');
            } else {
                $('.notifySticky').css('height', 'calc(100vh - ' + mergedHeight + 'px)');
            }
        }
    });
    $(window).scroll();
});
function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).offset().top + 110;
    //- var elemBottom = elemTop + $(elem).height();
    //- return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom) && (elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    return ((elemTop <= docViewBottom));
}

$(window).scroll(function() {
    if (isScrolledIntoView($('.js-notifyStickyPLaceholder'))) {
        $('.notifySticky').addClass('unstuck');

    } else {
        $('.notifySticky').removeClass('unstuck');
    }
});
