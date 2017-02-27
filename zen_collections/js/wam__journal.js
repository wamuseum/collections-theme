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


      if (!$('body').hasClass('js-toggle-trans-processed')) {
        $('.node-type-journal-page .journal__transcribed').addClass('visuallyhidden').parent().children('.journal__right').first().append('<span class="js-toggle"><a href="#" class="js-toggle-translated">English</a><a href="#" class="js-toggle-transcribed">Transcribed</a></span>');
        $('.js-toggle-translated').addClass('visuallyhidden');

        $('.js-toggle-transcribed').click(function(event) {
          event.preventDefault();

          $('.node-type-journal-page .journal__translated').addClass('visuallyhidden');
          $('.node-type-journal-page .journal__transcribed').removeClass('visuallyhidden');
          $('.js-toggle-transcribed').addClass('visuallyhidden');
          $('.js-toggle-translated').removeClass('visuallyhidden');

        });

        $('.js-toggle-translated').click(function(event) {
          event.preventDefault();

          $('.node-type-journal-page .journal__translated').removeClass('visuallyhidden');
          $('.node-type-journal-page .journal__transcribed').addClass('visuallyhidden');
          $('.js-toggle-transcribed').removeClass('visuallyhidden');
          $('.js-toggle-translated').addClass('visuallyhidden');


        });

        if ( $('.node-type-journal-page').length ) {
          $('body').addClass('js-toggle-trans-processed');
        }
      }

    }
  };
}(jQuery));
