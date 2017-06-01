//nav bar toggles
jQuery(document).ready(function($) {

	function maxLength(maxLen)
	{
	    return function truncateToNearestSpace(idx, text)
	    {
	        // this may chop in the middle of a word
	        var truncated = text.substr(0, maxLen);

	        if (/[^\s]$/.test(truncated))
	            return truncated.replace(/\s[^\s]+$/, "");
	        else
	            return truncated.trim();
	    }
	}

    $('.notifyMain-toggle').click(function(event) {
        event.preventDefault();
        $(this).closest('.notifyMain').toggleClass('is-expanded');
        $('.selector').text(maxLength(50));
    });
});
