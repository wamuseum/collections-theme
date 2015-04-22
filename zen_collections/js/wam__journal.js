/*global Drupal:false, jQuery:false */
(function ($) {
  'use strict';
  Drupal.behaviors.wamJournal = {
    attach: function (context, settings) {

      $('.quicktabs-tabs a:not(.quicktabs-loaded)', context).click(function() {
        if ($(this).hasClass('progress-disabled')) {
          $(this).closest('.quicktabs-wrapper').addClass('quicktabs-loading');
        }
      });

      if ($(context).hasClass('quicktabs-tabpage')) {
        $(context).closest('.quicktabs-wrapper').removeClass('quicktabs-loading');
      }


      if (!$('body').hasClass('js-trans-processed')) {
        $('.view-display-id-block .journal__translated').addClass('visuallyhidden').parent().children('.journal__header').append('<span class="js-links"><a href="#" class="js-translated">Translated</a><a href="#" class="js-transcribed">Transcribed</a></span>');
        $('.view-display-id-block .journal__transcribed').addClass('visuallyhidden');

        $('.js-translated').click(function(event) {
          event.preventDefault();

          if ($(this).parent().parent().parent().children('.journal__translated').hasClass('visuallyhidden')) {
            $('.view-display-id-block .journal__translated').addClass('visuallyhidden');
            $('.view-display-id-block .journal__transcribed').addClass('visuallyhidden');
            $(this).parent().parent().parent().children('.journal__translated').removeClass('visuallyhidden');
          } else {
            $('.view-display-id-block .journal__translated').addClass('visuallyhidden');
            $('.view-display-id-block.journal__transcribed').addClass('visuallyhidden');
          }

        });

        $('.js-transcribed').click(function(event) {
          event.preventDefault();

          if ($(this).parent().parent().parent().children('.journal__transcribed').hasClass('visuallyhidden')) {
            $('.view-display-id-block .journal__translated').addClass('visuallyhidden');
            $('.view-display-id-block .journal__transcribed').addClass('visuallyhidden');
            $(this).parent().parent().parent().children('.journal__transcribed').removeClass('visuallyhidden');
          } else {
            $('.view-display-id-block .journal__translated').addClass('visuallyhidden');
            $('.view-display-id-block .journal__transcribed').addClass('visuallyhidden');
          }

        });
        if ( $('.view-display-id-block').length ) {
          $('body').addClass('js-trans-processed');
        }
      }




      if (!$('body').hasClass('js-toggle-trans-processed')) {
        $('.view-display-id-block_1 .journal__transcribed').addClass('visuallyhidden').parent().children('.journal__right').append('<span class="js-toggle"><a href="#" class="js-toggle-translated">Translated</a><a href="#" class="js-toggle-transcribed">Transcribed</a></span>');
        $('.js-toggle-translated').addClass('visuallyhidden');

        $('.js-toggle-transcribed').click(function(event) {
          event.preventDefault();

          $('.view-display-id-block_1 .journal__translated').addClass('visuallyhidden');
          $('.view-display-id-block_1 .journal__transcribed').removeClass('visuallyhidden');
          $('.js-toggle-transcribed').addClass('visuallyhidden');
          $('.js-toggle-translated').removeClass('visuallyhidden');

        });

        $('.js-toggle-translated').click(function(event) {
          event.preventDefault();

          $('.view-display-id-block_1 .journal__translated').removeClass('visuallyhidden');
          $('.view-display-id-block_1 .journal__transcribed').addClass('visuallyhidden');
          $('.js-toggle-transcribed').removeClass('visuallyhidden');
          $('.js-toggle-translated').addClass('visuallyhidden');


        });

        if ( $('.view-display-id-block_1').length ) {
          $('body').addClass('js-toggle-trans-processed');
        }
      }

    }
  };
}(jQuery));
