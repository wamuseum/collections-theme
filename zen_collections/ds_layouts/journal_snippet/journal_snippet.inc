<?php
function ds_journal_snippet() {
  return array(
    'label' => t('Journal Snippet'),
    'regions' => array(
      'header' => t('Header'),
      'left' => t('Left'),
      'middle' => t('Middle'),
      'right' => t('Right'),
      'footer' => t('Footer'),
    ),
    // Add this line if there is a default css file.
    'css' => TRUE,
    // Add this line if you're using DS 2.x for icon preview
    'image' => TRUE,
  );
}