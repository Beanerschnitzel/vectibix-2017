$(document).ready(function() {
   $('.notifyMain-copy').truncateText({
      length: 200,
      toggleText: "Read More"
   });
});



(function($) {
   $.fn.truncateText = function(options) {
      var defaults = {
         length: 249,
         toggleText: "Show More"
      };
      var options = $.extend({}, defaults, options);

      var $containers = this;
      var subLength = options.length;
      var hiddenSubStart = subLength + 1;
      var toggleText = options.toggleText;

      $containers.each(function() {
         var $container = $(this);
         var $children = $container.children();

         var text;
         var textLength;
         var visibleText;
         var hiddenText;

         if ($children.length) {
            $children.each(function(index) {
               var $child = $(this);

               if (index === 0) {
                  text = $child.text();
                  textLength = text.length;
                  visibleText = text.substring(0, subLength);
                  hiddenText = text.substring(hiddenSubStart, textLength);

                  $child
                     .text(visibleText)
                     .append($('<i>...</i>'))
                     .append($('<a class="showToggle" style="margin-left:5px;font-weight:bold;cursor:pointer;">' + toggleText + '</a>'))
                     .append($('<span class="sr-only">' + hiddenText + '</span>'));
               } else {
                  $child
                     .html($('<span class="sr-only">' + $child.text() + '</span>'));
               }
            });
         } else {
            text = $container.text();
            textLength = text.length;
            visibleText = text.substring(0, subLength);
            hiddenText = text.substring(hiddenSubStart, textLength);

            $container
               .text(visibleText)
               .append($('<a class="showToggle" style="margin-left:5px;font-weight:bold;cursor:pointer;">' + toggleText + '</a>'))
               .append($('<span class="sr-only">' + hiddenText + '</span>'));
         }
      });

      $('.showToggle').click(function() {
         $(this)
            .closest('.' + $containers.attr('class'))
            .find('span')
            .removeClass('sr-only');
         $(this)
            .closest('.' + $containers.attr('class'))
            .find('i')
            .remove();
         $(this).remove();
      });

      return $containers;
   }
}(jQuery));





jQuery(document).ready(function($) {
	$('.notifyMain').addClass('slideDown');

    $('.notifyMain-close').click(function(event) {
        event.preventDefault();
        $(this).closest('.notifyMain').addClass('is-closed');
        
    });
});
