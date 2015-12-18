<?php
function ds_wam_2col() {
  return array(
    'label' => t('WAM 2col Stacked fluid'),
    'regions' => array(
      'header' => t('Header'),
      'wamwrap' => t('WAMWrap'),
      'left' => t('Left'),
      'right' => t('Right'),
      'footer' => t('Footer'),
    ),
    // Add this line if there is a default css file.
    'css' => TRUE,
    // Add this line if you're using DS 2.x for icon preview
    'image' => TRUE,
  );
}