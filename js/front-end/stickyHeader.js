jQuery(document).ready(function($) {
  var mql = window.matchMedia('(min-width: 768px)');

  function stickyHeader() {
    var $headerHeight = $('.headerMain').outerHeight();
    //var $notifyHeight = $('.notifyMain').outerHeight();
    //var $mergedHeight = $headerHeight + $notifyHeight;
    var shrinkHeader = $headerHeight;
    $(window).on('scroll.mql', function() {
        var scroll = getCurrentScroll();
        if (scroll >= shrinkHeader) {
            $('body').addClass('header-sticky');
            $("main").css("padding-top", $mergedHeight);
        } else {
            $('body').removeClass('header-sticky');
            $("main").css("padding-top", '');
        }
    });

    function getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }
  }

  function resetIt() {
        $(window).off('scroll.mql');
        $('body').removeClass('header-sticky');
        $("main").css("padding-top", '');
  }

  function screenSize(mql) {
    if (mql.matches) {
      stickyHeader();
    } else {
      resetIt();
    }
  }

  // Handle media query 'change' event
  mql.addListener(screenSize);
  screenSize(mql);
});










// $(function() {
//     var $headerHeight = $('.headerMain').outerHeight();
//     var $notifyHeight = $('.notifyMain').outerHeight();
//     var $mergedHeight = $headerHeight + $notifyHeight;
//     var shrinkHeader = 300;
//     $(window).scroll(function() {
//         var scroll = getCurrentScroll();
//         if (scroll >= shrinkHeader) {
//             $('.headerMain').addClass('is-sticky');
//             $("main").css("padding-top", $mergedHeight);
//         } else {
//             $('.headerMain').removeClass('is-sticky');
//             $("main").css("padding-top", '');
//         }
//     });

//     function getCurrentScroll() {
//         return window.pageYOffset || document.documentElement.scrollTop;
//     }
// });
