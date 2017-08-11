<?php
$imgs = glob("../images/sponsors/*.*");
shuffle($imgs);
$res='';
foreach ($imgs as $file) {
    $res .= '<img src="' . $file . '" alt="' . substr($file, strrpos($file, '/') + 1) . '">';
}
echo $res;
