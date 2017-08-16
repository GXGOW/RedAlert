<?php
$imgs = glob("../images/sponsors/*.*");
shuffle($imgs);
$res='';
foreach ($imgs as $file) {
    $fixpath = str_replace('../','',$file);
    $res .= '<img src="' . $fixpath . '" alt="' . substr($file, strrpos($file, '/') + 1) . '">';
}
echo $res;
