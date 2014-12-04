/*global Drupal:false, jQuery:false  */
(function ($) {
  'use strict';

  Drupal.behaviors.wamMegaMenu = {
    attach: function () {
      /* ---------------------------------------------- */
      /* MEGAMENU MENU                                  */
      /* ---------------------------------------------- */

      //This js controls the megamenu dropdowns and builds a hambuger button if there is an Aside navigation.


      /* Build extra link */
      function wamExtraLink() {

        // Does the Aside navigation area exist?
        if ($('.aside-bg').length !== 0) {

          // Add a hamburger button in the header nav bar after the last item
          $('<li class="rwdmenuright"><a href="#navigation" class="mainlink rwdmenubutton">&#9776;</a></li>').insertAfter('#main-menu-links .last');

          //take the content of the Aside nav and rewrite it to match the megamenu structure
          $('.aside-bg').clone().removeAttr('id').addClass('header-minimenu').addClass('col-1-4').addClass('gl-1-2').addClass('bb-1-4').addClass('woowee').removeClass('column').removeClass('aside').removeClass('bgcolor').removeClass('aside-bg').insertAfter('.rwdmenubutton');

          $('.header-minimenu .block-uc_cart').remove();
          //Add two wrapping div's header-megamenu__nav and grid with globalwidth
          $('.woowee').wrap('<div class="header-megamenu__nav megamenu rwdmenulink" />').wrap('<div class="grid grid-pad globalwidth " />');

          //Add a class to the list of links to match megamenu structure
          $('.woowee .menu').addClass('header-minimenu__list');

          //change the aside h2 title to be a strong with a menu link
          $('.woowee .title').replaceWith('<strong class="header-minimenu__title">' + $('.woowee .title').html() + '</strong>');
        }

      }


      /* Control dropdown */
      function wamControlDropdown() {

        //Add a solid triganle after header menu item to let people know there is a dropdown menu
        $('.mainlink').append(" <small>\u25BE</small>"); //solid triangle down

        //Click Function to show and hide dropdown megamenu
        $('.mainlink').click(function (e) {

          //Check to see if dropdown megamenu is open or closed
          if ($(this).hasClass('active')) {
            //if open

            //Close dropdown megamenu
            $('.header-megamenu__nav').removeClass('menuopen');

            //remvoe active state from header link
            $('header a').removeClass('active');

          } else {
            //if closed

            //Open dropdown Megamenu
            $('.header-megamenu__nav').removeClass('menuopen');

            //Remove all current header links with an active state
            $('header a').removeClass('active');

            //Add active state to header link which has been clicked
            $(this).addClass('active').parent().find('.header-megamenu__nav').addClass('menuopen');
          }


          $('.header-megamenu__nav').click(function (e) {
            //stop click from bubbling up
            e.stopPropagation();
          });

          //Listen to clicks on the page to close megamenu if page is clicked
          $(document).click(function () {
            $('.header-megamenu__nav').removeClass('menuopen');
            $('header a').removeClass('active');
          });

          if ($(this).hasClass('mainlink')) {
            //stop header links from firing when clicked if they have a dropdown megamenu
            return false;
          }
          //stop click from bubbling up
          e.stopPropagation();
        });
      }




      //Check to see if code has been run by check igf the body has class of .megamenuprocessed
      if (!$('body').hasClass('megamenuprocessed')) {
        wamExtraLink(); //build hamburger button
        wamControlDropdown(); //listeners for dropdown links
        $('body').addClass('megamenuprocessed'); // add class to the body so we know the megamenu has been processed
      }


    }
  };

}(jQuery));
