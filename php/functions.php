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

//Development of production?
$dev;
if ($_SERVER['SERVER_NAME'] == 'localhost') {
    $dev = true;
}

function getHead()
{
    global $prefix1, $dev;
    $links = ($dev ?
        '<link href="' . $prefix1 . 'node_modules/reset-css/reset.css" rel="stylesheet"/>
        <link href="' . $prefix1 . 'node_modules/font-awesome/css/font-awesome.css" rel="stylesheet"/>
        <link href="' . $prefix1 . 'css/styles.css" rel="stylesheet"/>
        '
        :
        '<link rel="stylesheet" type="text/css" href="//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.0.3/cookieconsent.min.css" />
        <script>
        (function(i,s,o,g,r,a,m){i[\'GoogleAnalyticsObject\']=r;i[r]=i[r]||function(){
                (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,\'script\',\'https://www.google-analytics.com/analytics.js\',\'ga\');

        ga(\'create\', \'UA-91503104-1\', \'auto\');
        ga(\'send\', \'pageview\');
        </script>');
    echo '<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes">
    <meta name="theme-color" content="#5c0000">
    <link rel="icon" href="images/icon.png">'.$links;
}

function getScripts()
{
    global $prefix1, $dev;
    $scripts = $dev ? '
        <script src="'.$prefix1.'node_modules/jquery/dist/jquery.js"></script>
        <script src="'.$prefix1.'node_modules/slideout/dist/slideout.js"></script>
        <script src="'.$prefix1.'js/jquery.slides.js"></script>
        <script src="'.$prefix1.'js/functions.js"></script>
        <script src="'.$prefix1.'js/map.js"></script>
        <script src="'.$prefix1.'js/tickets.js"></script>
    ' :'<script src="'.$prefix1.'build/functions.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.0.3/cookieconsent.min.js"></script>
    <script>
    window.addEventListener("load", function(){
        window.cookieconsent.initialise({
            "palette": {
                "popup": {
                    "background": "#000"
                },
                "button": {
                    "background": "#ff0000"
                }
            },
            "content": {
                "message": "Deze website gebruikt cookies.",
                "dismiss": "OK",
                "link": "Waarom?"
            }
        })});
    </script>';
    echo $scripts;
}

function getMenu()
{
    global $prefix1, $prefix2;
    echo '<nav id="menu">
    <img id="logo" src="' . $prefix1 . 'images/logo.png" alt="Red Alert logo">
    <div id="menuflex">
    <ul><li><a href="#index">&#xf015; Home</a>
    <li><a href="#lineup">&#xf017; Line-up</a></li><li><a href="#location">&#xf124; Locatie</a></li>
    <li><a href="#tickets">&#xf145; Tickets</a></li></ul>
    <div id="slides">
    </div>
    <div id="social">
    <a href="https://www.facebook.com/RedAlertHamme/?fref=ts"><i class="fa fa-facebook-official" aria-hidden="true"></i></a>
    <a href="http://www.kljhamme.be" target="_blank"><img src="'.$prefix1.'images/klj.png"/></a>
    <a href="https://github.com/GXGOW/RedAlert" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a>
    </div>
    </div>
    </nav>';
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

?>