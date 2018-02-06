<?php
date_default_timezone_set("Europe/Brussels");

//Development of production?
$dev;
if ($_SERVER['SERVER_NAME'] == 'localhost') {
    $dev = true;
}

function getHead()
{
    global $dev;
    $links = ($dev ?
        '<link href="node_modules/reset-css/reset.css" rel="stylesheet"/>
        <link href="css/styles.css" rel="stylesheet"/>
        <link href="node_modules/animate.css/animate.css" rel="stylesheet"/>                
        <link href="node_modules/css-ripple-effect/dist/ripple.css" rel="stylesheet"/>    
        <script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script>    
        '
        :
        '<link rel="stylesheet" type="text/css" href="http://cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.0.3/cookieconsent.min.css" />
        <script>
        (function(i,s,o,g,r,a,m){i[\'GoogleAnalyticsObject\']=r;i[r]=i[r]||function(){
                (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,\'script\',\'https://www.google-analytics.com/analytics.js\',\'ga\');
    
        ga(\'create\', \'UA-91503104-1\', \'auto\');
        ga(\'send\', \'pageview\');
        </script>
        <script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script>');
    echo '<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes">
    <meta name="theme-color" content="#5c0000">
    <link rel="icon" href="images/icon.png">'.$links;
}

function getScripts()
{
    global $dev;
    $scripts = $dev ? '
        <script src="node_modules/jquery/dist/jquery.js"></script>
        <script src="node_modules/slideout/dist/slideout.js"></script>
        <script src="node_modules/countdown/countdown.js"></script>
        <script src="node_modules/konami/konami.js"></script>
        <script src="js/jquery.slides.js"></script>
        <script src="js/functions.js"></script>
    ' :'<script src="build/functions.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.0.3/cookieconsent.min.js"></script>';
    echo $scripts;
}

function getMenu()
{
    $items = array(
        ["name" => "Home","icon"=>"fas fa-home","href" => "index"],
        ["name" => "Line-up","icon"=>"far fa-clock","href" => "lineup"],
        ["name" => "Locatie","icon"=>"fas fa-location-arrow","href" => "location"],
        ["name" => "Tickets","icon"=>"fas fa-ticket-alt","href" => "tickets"]
    );
    $icons = ["fas fa-home", "far fa-clock","fas fa-location-arrow"];
    $menu = '<nav id="menu">
    <img id="logo" src="images/logo.png" alt="Red Alert logo">
    <ul>';
    foreach($items as $item) {
        $menu .= '<li><a href="#'.$item['href'].'" class="ripple active"><i class="'.$item['icon'].'"></i> '.$item['name'].'</a>';
    }
    $menu .= '</ul>
    <div id="social">
    <a href="https://www.facebook.com/RedAlertHamme/?fref=ts"><i class="fab fa-facebook-square" aria-hidden="true"></i></a>
    <a href="http://www.kljhamme.be" target="_blank"><img src="images/klj.png"/></a>
    <a href="https://github.com/GXGOW/RedAlert" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a>
    </div>
    </nav>';
    echo $menu;
}

function getHeader()
{
    echo '<header>
            <button class="toggle-button"></button>
            <h1 id="title">Home</h1>
        </header>';

}

function getFooter()
{
    echo '<footer><p>Red Alert, een initiatief van <a href="http://kljhamme.be/" target="_blank">KLJ Hamme-Center</a></p><p><i class="fas fa-copyright"></i> 2016-2018 <a href="http://nico.levls.be" target="_blank">Nicolas Loots</p></a>';
}

?>