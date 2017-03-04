<?php
date_default_timezone_set("Europe/Brussels");
$prefix1;
$prefix2;
if ((basename($_SERVER["PHP_SELF"])) === "index.php") {
    $prefix1 = "";
    $prefix2 = "html/";
} else {
    $prefix1 = "../";
    $prefix2 = "";
}

function getMenu()
{
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
        <p>&#xf1f9; 2016-2017 <a href="mailto:nicolas.loots@outlook.be">Nicolas Loots</a></p>';
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