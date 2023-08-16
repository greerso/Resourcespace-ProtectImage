<?php

function HookDisable_rightclickRenderImagePreview_filepath(&$result, $ref, $alternative=-1, $page=1)
{
    global $baseurl;
    // Set the result to a placeholder image if JavaScript is disabled.
    // You can replace 'path_to_placeholder_image.jpg' with the path to your actual placeholder.
    $result = $baseurl . "/plugins/disable_rightclick/gfx/path_to_placeholder_image.jpg";
}

function HookDisable_rightclickRenderImageThumb_filepath(&$result, $ref)
{
    global $baseurl;
    // Set the result to a placeholder image if JavaScript is disabled.
    // You can replace 'path_to_placeholder_image.jpg' with the path to your actual placeholder.
    $result = $baseurl . "/plugins/disable_rightclick/gfx/path_to_placeholder_image.jpg";
}
