<?php
/**
 * @file
 * Returns the HTML for a single Drupal page.
 *
 * Complete documentation for this file is available online.
 * @see https://drupal.org/node/1728148
 */
?>

<div id="page">

  <header class="header" id="header" role="banner">
    
    <?php
    $wambase_path = base_path();


//	print "	<div class=\"globalwidth grid grid-pad \">\n";
//	print "   <div class=\"header-logos nomq-1-1 gl-1-2 bb-2-3\"> ";
//	print "    <a accesskey=\"9\" title=\"visit the Western Australian Museum website\" href=\"" . $wambase_path . "\" rel=\"home\">";
//
//	if ($is_front):
//		print "			<h1 class=\"visuallyhidden\">Western Australia Museums</h1>\n";
//	else:
//		print "			<span class=\"visuallyhidden\">Western Australia Museums</span>\n";
//	endif;
//
//	print "			<i class=\"header-logos__logo--gov\"></i>\n";
//	print "			<i class=\"header-logos__logo--wam\"></i>\n";
//
//	print "		</a>\n";
//	print "		</div>\n";
//	print "   <div class=\"header-search gl-1-2 bb-1-3\"> ";
//	print "     <span class=\"header-search__tab nomq-1-1 gl-0-0\">";
//	print "       <a title=\"Search the Western Australian Museum\" href=\"" . $wambase_path . "search/site\">Search</a>";
//	print "     </span>";
//	print "			<span class=\"header-search__links nomq-0-0 gl-1-1\">";
//	print "       <a title=\"Western Australian Museum sitemap\" href=\"" . $wambase_path . "sitemap\">Site map</a> | ";
//	print "       <a title=\"Western Australian Museum accessibility policy\" href=\"" . $wambase_path . "accessibility\">Accessibility</a> | ";
//	print "       <a title=\"Contact the Western Australian Museum\" href=\"" . $wambase_path . "about/contact-us\">Contact us</a>";
//	print "     </span>\n";
//	print "			<div class=\"nomq-0-0 gl-1-1\">" . render($page['wam_search']) . "</div>\n";
//	//print "			<div class=\"extra\"><a title=\"search the whole WA Government website\" rel=\"external\" href=\"http://wa.gov.au/search/\">Go to whole of WA Government search</a></div>\n";
//	print "		</div>\n";
//    print "  </div>\n";
//
//    if ($page['wam_navbar']):
//		print "  <nav role=\"navigation\" id=\"nav-first\">\n";
//
//		print "    <div class=\"globalwidth grid\">";
//        print render($page['wam_navbar']); 
//		print "    </div>";
//
//		print "  </nav>\n\n";
//	endif;
    
    ?>
    

    <?php if ($logo): ?>
      <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home" class="header__logo" id="logo"><img src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>" class="header__logo-image" /></a>
    <?php endif; ?>

    <?php if ($site_name || $site_slogan): ?>
      <div class="header__name-and-slogan" id="name-and-slogan">
        <?php if ($site_name): ?>
          <h1 class="header__site-name" id="site-name">
            <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" class="header__site-link" rel="home"><span><?php print $site_name; ?></span></a>
          </h1>
        <?php endif; ?>

        <?php if ($site_slogan): ?>
          <div class="header__site-slogan" id="site-slogan"><?php print $site_slogan; ?></div>
        <?php endif; ?>
      </div>
    <?php endif; ?>

    <?php if ($secondary_menu): ?>
      <nav class="header__secondary-menu" id="secondary-menu" role="navigation">
        <?php print theme('links__system_secondary_menu', array(
          'links' => $secondary_menu,
          'attributes' => array(
            'class' => array('links', 'inline', 'clearfix'),
          ),
          'heading' => array(
            'text' => $secondary_menu_heading,
            'level' => 'h2',
            'class' => array('element-invisible'),
          ),
        )); ?>
      </nav>
    <?php endif; ?>

    <?php print render($page['header']); ?>

    
    <div id="navigation">
      <?php if ($main_menu): ?>
        <nav id="main-menu" class="mainmenu" role="navigation">
          <?php
          // This code snippet is hard to modify. We recommend turning off the
          // "Main menu" on your sub-theme's settings form, deleting this PHP
          // code block, and, instead, using the "Menu block" module.
          // @see https://drupal.org/project/menu_block
          print theme('links__system_main_menu', array(
            'links' => $main_menu,
            'attributes' => array(
              'class' => array('mainmenu__list', 'links', 'inline', 'clearfix'),
            ),
            'heading' => array(
              'text' => t('Main menu'),
              'level' => 'h2',
              'class' => array('element-invisible'),
            ),
          )); ?>
        </nav>
      <?php endif; ?>

      <?php print render($page['navigation']); ?>

    </div>
  </header>
  
  
  <?php
    // Render the sidebars to see if there's anything in them.
    $sidebar_first  = render($page['sidebar_first']);
    $sidebar_second = render($page['sidebar_second']);
  ?>
  
  <div id="main" class="<?php if ($sidebar_first || $sidebar_second): ?> nomq-1-1 bb-2-3 mb-3-4 pb-4-5<?php endif; ?>">

    <div id="content" class="column main" role="main">
      <?php print render($page['highlighted']); ?>
      <?php print $breadcrumb; ?>
      <a id="main-content"></a>
      <?php print render($title_prefix); ?>
      <?php if ($title): ?>
        <h1 class="page__title title" id="page-title"><?php print $title; ?></h1>
      <?php endif; ?>
      <?php print render($title_suffix); ?>
      <?php print $messages; ?>
      <?php print render($tabs); ?>
      <?php print render($page['help']); ?>
      <?php if ($action_links): ?>
        <ul class="action-links"><?php print render($action_links); ?></ul>
      <?php endif; ?>
      <?php print render($page['content']); ?>
      <?php print $feed_icons; ?>
    </div>

    

    
  </div>
  <?php if ($sidebar_first || $sidebar_second): ?>
    <div class="sidebars nomq-0-0 bb-1-3 mb-1-4 pb-1-5">
      <?php print $sidebar_first; ?>
      <?php print $sidebar_second; ?>
    </div>
  <?php endif; ?>

  
  
  <?php
      // Render the WAM Footer to see if there's anything in them.
      $wam_footer  = render($page['wam_footer']);
  ?>
  
  <?php if ($wam_footer): ?>
    <?php print $wam_footer; ?>
  <?php endif; ?>
  
  <?php print render($page['footer']); ?>

</div>

<?php print render($page['bottom']); ?>
