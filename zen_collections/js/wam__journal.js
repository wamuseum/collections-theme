/*global Drupal:false, jQuery:false */
(function ($) {
  'use strict';
  Drupal.behaviors.wamJournal = {
    attach: function (context, settings) {
      $('.journal__translated').addClass('visuallyhidden').parent().children('.journal__header--page').append('<span class="js-links"><a href="#" class="js-translated">Translated</a><a href="#" class="js-transcribed">Transcribed</a></span>');
      $('.journal__transcribed').addClass('visuallyhidden');

      $('.js-translated').click(function(event) {
        event.preventDefault();

        if ($(this).parent().parent().parent().children('.journal__translated').hasClass('visuallyhidden')) {
          $('.journal__translated').addClass('visuallyhidden');
          $('.journal__transcribed').addClass('visuallyhidden');
          $(this).parent().parent().parent().children('.journal__translated').removeClass('visuallyhidden');
        } else {
          $('.journal__translated').addClass('visuallyhidden');
          $('.journal__transcribed').addClass('visuallyhidden');
        }

      });



      $('.js-transcribed').click(function(event) {
        event.preventDefault();

        if ($(this).parent().parent().parent().children('.journal__transcribed').hasClass('visuallyhidden')) {
          $('.journal__translated').addClass('visuallyhidden');
          $('.journal__transcribed').addClass('visuallyhidden');
          $(this).parent().parent().parent().children('.journal__transcribed').removeClass('visuallyhidden');
        } else {
          $('.journal__translated').addClass('visuallyhidden');
          $('.journal__transcribed').addClass('visuallyhidden');
        }

      });

    }
  };
}(jQuery));
