$(document).ready(function() {
    var placeholder = $('<div class="js-notifyTrayPLaceholder"></div>');
    var toggleText = $('.notifyTray-toggle').text();
    var headerUtilHeight = $('.headerMain-util').outerHeight();
    var headerMainHeight = $('.headerMain-main').outerHeight();
    var notifyHeight = $('.notifyMain').outerHeight();
    var mergedHeight = headerUtilHeight + headerMainHeight + notifyHeight;
    $('.notifyTray').before(placeholder);
    $('.notifyTray-toggle').click(function() {

        if ($('.notifyTray').hasClass('full')) {
            $('body').removeClass('noScroll');
            $('.notifyTray').removeClass('full');
            $(this).text(toggleText)
            $('.notifyTray').css('height', '');
        } else {
            $('body').addClass('noScroll');
            $('.notifyTray').addClass('full');
            $(this).text('Close');
            if ($('.headerMain').hasClass('is-sticky')) {
                $('.notifyTray').css('height', 'calc(100vh - ' + headerMainHeight + 'px)');
            } else {
                $('.notifyTray').css('height', 'calc(100vh - ' + mergedHeight + 'px)');
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
    if (isScrolledIntoView($('.js-notifyTrayPLaceholder'))) {
        $('.notifyTray').removeClass('is-sticky');

    } else {
        $('.notifyTray').addClass('is-sticky');
    }
});
