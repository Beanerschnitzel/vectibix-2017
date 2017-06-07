$(document).ready(function() {
   $('.notifyMain-copy').truncateText({
      length: 200,
      toggleText: "Read More"
   });
});



(function($) {
   $.fn.truncateText = function(opts) {
      var defaults = {
         lengthSm: 50,
         lengthMed: 100,
         lengthLg: 150,
         breakSm: 500,
         breakLg: 850,
         toggleText: "Read More"
      };
      var options = $.extend({}, defaults, options);

      var $containers = this;

      var visibleLegnthEffective;
      var visibleLegnthSm = options.lengthSm;
      var visibleLegnthMed = options.lengthMed;
      var visibleLegnthLg = options.lengthLg;

      var breakSm = options.breakSm;
      var breakLg = options.breakLg;

      var toggleText = options.toggleText;

      initialize();

      // $(window).on('resize orientationchange', function() {
      //    unwrap();
      // });

      // function unwrap() {
      //    $containers.each(function() {
      //       $(this).find('.ellipse').remove();
      //       $(this).find('.showToggle').remove();
      //       $(this).find('.hiddenText').each(function() {
      //          $(this).before($(this).text());
      //       });
      //       $(this).find('.hiddenText').remove();
      //    });
      //    initialize();
      // }

      function initialize() {
         if (window.matchMedia("(max-width:" + breakSm + "px)").matches) {
            visibleLegnthEffective = visibleLegnthSm;
         } else if (window.matchMedia("(max-width:" + breakLg + "px)").matches) {
            visibleLegnthEffective = visibleLegnthMed;
         } else {
            visibleLegnthEffective = visibleLegnthLg;
         }
         wireUp();
      }

      function wireUp() {
         //loop through each container and wire up indiviually 
         $containers.each(function() {
            var $container = $(this);

            var originalHtml = $container.html();
            var originalText = $container.text();
            var truncatedText = $.trim(originalText).substring(0, visibleLegnthEffective).split(" ").slice(0, -1).join(" ") + " ";

            var $showMore = $('<a class="showToggle" style="margin-left:5px;font-weight:bold;cursor:pointer;">' + toggleText + '</a>' + '<i class="colorBrandBlue fa-chevron-right ml-1">' + '</i>')

            $container
               .text(truncatedText)
               .append($('<i class="ellipse">...</i>'))
               .append($showMore);

            //add show event to generated toggle buttons
            $showMore.click(function() {
               $container.html(originalHtml);
            });

            return $container;
         });
      }
      return $containers;
   };
}(jQuery));





jQuery(document).ready(function($) {
	$('.notifyMain').addClass('slideDown');

    $('.notifyMain-close').click(function(event) {
        event.preventDefault();
        $(this).closest('.notifyMain').addClass('is-closed');
        
    });
});
