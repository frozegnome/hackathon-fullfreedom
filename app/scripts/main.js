(function ($) {
	'use strict';

	var fav = $('.favorite');

	fav.on('click', function() {
		if($(this).find('.liked').is(':visible')) {
			$(this).find('.liked').hide();
			$(this).find('.unliked').show();
		}
		else {
			$(this).find('.unliked').hide();
			$(this).find('.liked').show();
		}
	})

})(jQuery)
