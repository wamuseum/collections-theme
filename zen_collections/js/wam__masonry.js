/*global Drupal:false, jQuery:false */
(function ($) {
  'use strict';
  Drupal.behaviors.wamMasonry = {
    attach: function (context, settings) {

      var $container = $('.masonry .view-content');

      // Make masonry compatible with view ajax loading...
      if ($container.data('masonry')) {
        $container.masonry('destroy');
      }

      // initialize
      $container.masonry({
      //columnWidth: 200,
        itemSelector: '.masonry__item'
      });

      $container.imagesLoaded(function () {
        $container.masonry({
          itemSelector: '.masonry__item'
        });
      });

      if (Drupal.behaviors.ViewsLoadMore) {
        $container.masonry('on', 'layoutComplete', function () {
          Drupal.behaviors.ViewsLoadMore.detach();
          Drupal.behaviors.ViewsLoadMore.attach();
          //console.log(context);
        });
      }
    }
  };
}(jQuery));
