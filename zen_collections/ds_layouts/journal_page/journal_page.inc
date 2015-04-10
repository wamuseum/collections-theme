<?php
function ds_journal_page() {
  return array(
    'label' => t('Journal Page'),
    'regions' => array(
      'header' => t('Header'),
      'left' => t('Left'),
      'middle' => t('Middle'),
      'footer' => t('Footer'),
      'lefttrans' => t('Left Transcribed'),
      'middletrans' => t('Middle Transcribed'),    
    ),
    // Add this line if there is a default css file.
    'css' => TRUE,
    // Add this line if you're using DS 2.x for icon preview
    'image' => TRUE,
  );
}