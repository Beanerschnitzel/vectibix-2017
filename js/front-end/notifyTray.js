$(document).ready(function() {
    var placeholder = $('<div class="js-notifyTrayPLaceholder"></div>');
    var toggleText = $('.notifyTray-toggleLink').text();
    
    $('.notifyTray').before(placeholder);
    $('.notifyTray-toggleLink').click(function() {
        var headerUtilHeight = parseInt($('.headerMain-util').outerHeight());
        var headerMainHeight = parseInt($('.headerMain-main').outerHeight());
        var notifyHeight = parseInt($('.notifyMain').outerHeight());
        var mergedHeight = headerUtilHeight + headerMainHeight + notifyHeight;
        var windowHeight = $(window).outerHeight();
        if ($('.notifyTray').hasClass('full')) {
            $('body').removeClass('noScroll');
            $('.notifyTray').removeClass('full');
            $(this).text(toggleText)
            $('.notifyTray').css('height', '');
        } else {
            $('body').addClass('noScroll');
            $('.notifyTray').addClass('full');
            $(this).text('Close');
            if ($('body').hasClass('header-sticky')) {
                $('.notifyTray').css('height', (windowHeight - 75) + 'px');
            } else {
                $('.notifyTray').css('height', (windowHeight - mergedHeight) + 'px');
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
