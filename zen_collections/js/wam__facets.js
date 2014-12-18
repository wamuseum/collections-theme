/*global Drupal:false, jQuery:false */
(function ($) {
  'use strict';
  Drupal.behaviors.wamFacets = {
    attach: function (context, settings) {
      $('#sidebars').addClass('nomq-0-0');
      $('<a href="#sidebars" class="rwdmenubutton bb-0-0">refine</a>').insertAfter('#edit-submit');
      $('<a href="#main" class="rwdmenubutton bb-0-0">close X</a>').insertBefore('.sidebar');
      
      $('.rwdmenubutton').click(function( event ) {
        event.preventDefault();
        $('#sidebars').toggleClass('nomq-0-0');
        $('#main').toggleClass('nomq-1-1');
        $('#main').toggleClass('nomq-0-0');
      });
    }
  };
}(jQuery));
