//toggle search on lg screens

jQuery(document).ready(function($) {
  var mqlSrch = window.matchMedia("(min-width: 768px)");

  function toggleSearch() {
    $('.headerMain-searchToggle').on("click.mqlSrch", function() {
      if (!$('.headerMain').hasClass('search-open')) {
        $('.headerMain').addClass('search-open');
        $('.headerMain-searchBox').focus();
      } else {
        $('.headerMain').removeClass('search-open');
        $('.headerMain-searchBox').blur();
      }
    });
  }

  function resetIt() {
    $('.headerMain-searchToggle').off("click.mqlSrch");
    $('.headerMain').removeClass('search-open');
  }

  function screenSize(mqlSrch) {
    if (mqlSrch.matches) {
      toggleSearch();
    } else {
      resetIt();
    }
  }

  // Handle media query 'change' event
  mqlSrch.addListener(screenSize);
  screenSize(mqlSrch);
});
