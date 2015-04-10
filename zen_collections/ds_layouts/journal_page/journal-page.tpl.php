<?php

/**
 * @file
 * WAM Display Suite 3 column 25/50/25 stacked template.
 */
?>
<<?php print $layout_wrapper; print $layout_attributes; ?> class="journal__snippet <?php print $classes;?> clearfix globalwidth">

  <?php if (isset($title_suffix['contextual_links'])): ?>
  <?php print render($title_suffix['contextual_links']); ?>
  <?php endif; ?>

  <<?php print $header_wrapper ?> class="journal__header--page <?php print $header_classes; ?>">
    <?php print $header; ?>
  </<?php print $header_wrapper ?>>

    <div class="journal__translated">

      <<?php print $left_wrapper ?> class="journal__left<?php print $left_classes; ?>">
        <?php print $left; ?>
      </<?php print $left_wrapper ?>>

      <<?php print $middle_wrapper ?> class="journal__middle<?php print $middle_classes; ?>">
        <?php print $middle; ?>
      </<?php print $middle_wrapper ?>>

    </div>

    <div class="journal__transcribed">

      <<?php print $lefttrans_wrapper ?> class="journal__left<?php print $lefttrans_classes; ?>">
        <?php print $lefttrans; ?>
      </<?php print $lefttrans_wrapper ?>>

      <<?php print $middletrans_wrapper ?> class="journal__middle<?php print $middletrans_classes; ?>">
        <?php print $middletrans; ?>
      </<?php print $middletrans_wrapper ?>>

    </div>


  <<?php print $footer_wrapper ?> class="journal__footer<?php print $footer_classes; ?>">
    <?php print $footer; ?>
  </<?php print $footer_wrapper ?>>

</<?php print $layout_wrapper ?>>

<?php if (!empty($drupal_render_children)): ?>
  <?php print $drupal_render_children ?>
<?php endif; ?>
