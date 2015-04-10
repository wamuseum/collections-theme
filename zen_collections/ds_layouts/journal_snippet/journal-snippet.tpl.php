<?php

/**
 * @file
 * WAM Display Suite 3 column 25/50/25 stacked template.
 */
?>
<<?php print $layout_wrapper; print $layout_attributes; ?> class="journal__snippet <?php print $classes;?> clearfix">

  <?php if (isset($title_suffix['contextual_links'])): ?>
  <?php print render($title_suffix['contextual_links']); ?>
  <?php endif; ?>

  <<?php print $header_wrapper ?> class="journal__header<?php print $header_classes; ?>">
    <?php print $header; ?>
  </<?php print $header_wrapper ?>>

  <<?php print $left_wrapper ?> class="journal__left<?php print $left_classes; ?>">
    <?php print $left; ?>
  </<?php print $left_wrapper ?>>

  <<?php print $middle_wrapper ?> class="journal__middle<?php print $middle_classes; ?>">
    <?php print $middle; ?>
  </<?php print $middle_wrapper ?>>

  <<?php print $right_wrapper ?> class="journal__right<?php print $right_classes; ?>">
    <?php print $right; ?>
  </<?php print $right_wrapper ?>>

  <<?php print $footer_wrapper ?> class="journal__footer<?php print $footer_classes; ?>">
    <?php print $footer; ?>
  </<?php print $footer_wrapper ?>>

</<?php print $layout_wrapper ?>>

<?php if (!empty($drupal_render_children)): ?>
  <?php print $drupal_render_children ?>
<?php endif; ?>
