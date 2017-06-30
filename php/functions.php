<?php
date_default_timezone_set("Europe/Brussels");
$prefix1;
$prefix2;
if ((basename($_SERVER["PHP_SELF"])) === "index.php" || (basename($_SERVER["PHP_SELF"])) === "thanks.php") {
    $prefix1 = "";
    $prefix2 = "html/";
} else {
    $prefix1 = "../";
    $prefix2 = "";
}

function getHead()
{
    global $prefix1;
    echo '<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes">
    <meta name="theme-color" content="#5c0000">
    <link rel="icon" sizes="244x244" href="images/icon.png ">
    <link href="' . $prefix1 . 'build/reset.css" rel="stylesheet">
    <link href="' . $prefix1 . 'build/styles.min.css" rel="stylesheet">
    <script>
        (function(i,s,o,g,r,a,m){i[\'GoogleAnalyticsObject\']=r;i[r]=i[r]||function(){
                (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,\'script\',\'https://www.google-analytics.com/analytics.js\',\'ga\');

        ga(\'create\', \'UA-91503104-1\', \'auto\');
        ga(\'send\', \'pageview\');
    </script>';
}

function getScripts()
{
    global $prefix1;
    echo '<script src="'.$prefix1.'build/functions.min.js"></script>';
}

function getMenu()
{
    //TODO Facebook naar footer verplaatsen in plaats van als apart menu-item te houden
    global $prefix1, $prefix2;
    echo '<nav id="menu">
    <img id="logo" src="' . $prefix1 . 'images/logo.png" alt="Red Alert logo">
    <ul><li><a href="' . $prefix1 . 'index.php">&#xf015; Home</a>
    <li><a href="' . $prefix2 . 'lineup.php">&#xf017; Line-up</a></li><li><a href="' . $prefix2 . 'location.php">&#xf124; Locatie</a></li>
    <li><a href="' . $prefix2 . 'tickets.php">&#xf145; Tickets</a></li><li><a href="' . $prefix2 . 'sponsors.php">&#xf155; Sponsors</a></li>
    <li><a href="https://www.facebook.com/RedAlertHamme/?fref=ts" target="_blank">&#xf230; Facebook</a></li></ul></nav>';
}

function getHeader()
{
    echo '<header>
            <button class="toggle-button"></button>
            <h1 id="title"></h1>
        </header>';

}

function getFooter()
{
    echo '<footer><p>Red Alert, een initiatief van <a href="http://kljhamme.be/" target="_blank">KLJ Hamme-Center</a></p>
        <p>&#xf1f9; 2016-2017 Nicolas Loots</p>';
}

function getAnim()
{
    global $prefix1;
    echo '<img id="anim" src="' . $prefix1 . 'images/logo.png " alt="Red Alert logo">';
}

function slideshow()
{
    foreach (glob("../images/sponsors/*.*") as $file) {
        echo '<img src="' . $file . '" alt="' . substr($file, strrpos($file, '/') + 1) . '">';
    }
}

?>