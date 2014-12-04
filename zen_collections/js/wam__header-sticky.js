/*global Drupal:false  */
(function($) {

  Drupal.behaviors.wamHeaderSticky = {
    attach: function () {

      if (!$('html').hasClass('lt-ie9') ) {

        //Calculate the height of <header> and landing page jumplists
        //Use outerHeight() instead of height() if have padding
        var mainAboveHeight = $('#page-header').outerHeight();
        var mainNavHeight = $('#page-header nav').outerHeight();
        var nojumplist = 1;

        // check to see if .jumplist exists
        if ($('.jumplist').length) {
          var jumplistAboveHeight = $('.jumplist').offset();
          var jumplistNavHeight = $('.jumplist').outerHeight();

          nojumplist = 1;

        } else {

          nojumplist = 1;
        }



        //alert (mainAboveHeight);
        //when scroll
        $(window).scroll(function(){
          if ($(window).width() > '610'){
            //if scrolled down more than the header’s height
            if ($(window).scrollTop() > mainAboveHeight) {

              // if yes, add “fixed” class to the <nav>
              // add padding top to the #content (value is same as the height of the nav)
              $('#page-header > nav').addClass('fixed').next();
              $('#page-header').css('padding-bottom',mainNavHeight);

              if (nojumplist !== 1) {
                if ($(window).scrollTop() > jumplistAboveHeight.top){

                  // if yes, add “fixed” class to the <nav>
                  // add padding top to the #content (value is same as the height of the nav)
                  $('#page-header nav').removeClass('fixed').next();
                  $('#page-header').css('padding-bottom','0');

                  //$('.jumplist').addClass('jumplist--fixed jumplist--inverted').next();
                  $('.jumplist').addClass('jumplist--fixed').next();

      //            $('.jumplist--fixed').css('top',$('#page-header nav').outerHeight());
                  $('h1').css('padding-bottom',jumplistNavHeight);

                } else {

                  // when scroll up or less than aboveHeight, remove the “fixed” class, and the padding-top
                  //$('.jumplist').removeClass('jumplist--fixed jumplist--inverted').next();
                  $('.jumplist').removeClass('jumplist--fixed').next();
                  $('h1').css('padding-bottom','0');
                }
              }
            } else {

              // when scroll up or less than aboveHeight, remove the “fixed” class, and the padding-top
              $('#page-header nav').removeClass('fixed').next();
              $('#page-header').css('padding-bottom','0');
              //$('.jumplist').removeClass('jumplist--fixed jumplist--inverted').next();
              $('.jumplist').removeClass('jumplist--fixed').next();
              $('h1').css('padding-bottom','0');
            }
          }
        });




        $(".jumplist a").click(function(event) {
          //prevent the default action for the click event
          event.preventDefault();



          //get the full url - like mysitecom/index.htm#home
          var full_url = this.href;

          if ($(this).hasClass('nojump')) {

            window.location.href = full_url;

          } else {


            //split the url by # and get the anchor target name - home in mysitecom/index.htm#home
            var parts = full_url.split("#");
            var trgt = '#' + parts[1];



            //get the top offset of the target anchor
            //var target_offset = $(trgt).offset();
            //var target_top = (target_offset.top - jumplistNavHeight) - 20;

            //alert(full_url);
            //alert(target_top);

            //goto that anchor by setting the body scroll top to anchor top
            //$('html').animate({scrollTop:0}, 2000, 'ease');
            //$('body').scrollTop(target_top, 1500, 'easeInSine');
            $('html').scrollTo(trgt, 1500, { offset:-50}, { easing:'elasout' });

          }


        });
      }

    }
  };
})(jQuery);
