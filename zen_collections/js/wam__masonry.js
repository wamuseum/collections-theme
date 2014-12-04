/*global Drupal:false, jQuery:false */
(function ($) {
  'use strict';
  Drupal.behaviors.wamMasonry = {
    attach: function () {

      var $container = $('.masonry');

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
    }
  };
}(jQuery));

