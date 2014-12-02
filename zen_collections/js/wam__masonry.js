/*global Drupal:false  */
(function($) {

	Drupal.behaviors.wamMasonry = {
		attach: function () {

			var $container = $('.masonry .view-content');

            // Make masonry compatible with view ajax loading...
            if ($container.data('masonry')) {
                $container.masonry( 'destroy' );
            }

			// initialize
			$container.masonry({
				//columnWidth: 200,
				itemSelector: '.masonry--item'
			});

			$container.imagesLoaded( function() {
		      $container.masonry({
				itemSelector: '.masonry--item'
		      });
		    });


//			$('.item-list-q a').click(function () {
//				$container = $('.quicktabs-tabpage:not(.quicktabs-hide) .masonry .view-content');
//				$container.masonry( 'destroy' );
//				$container.masonry({
//					//columnWidth: 200,
//					itemSelector: '.masonry__item'
//				});
//			});
			

			
		}
	};
})(jQuery);

