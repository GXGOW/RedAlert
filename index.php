<?php include 'php/functions.php'; ?>
<!doctype html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Red Alert - Home</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes">
    <meta name="theme-color" content="#5c0000">
    <link rel="icon" sizes="244x244" href="images/icon.png ">
    <link href="css/reset_browser_styles.min.css" rel="stylesheet">
    <link href="css/styles.min.css" rel="stylesheet">
    <link href="fonts/font-awesome/css/font-awesome.min.css" rel="stylesheet"/>
    <script>
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-91503104-1', 'auto');
        ga('send', 'pageview');
    </script>
</head>

<body>
<div id="wrap">
    <?php getMenu(); ?>
    <div id="panel">
        <?php getHeader() ?>
        <div id="main">
            <picture>
                <img src="images/teaser2017.png" alt="Teaser Red Alert 2017">
            </picture>
            <div id="border">
                <div id="countdown">
                    <div><span class="count" id="days"></span>
                        <p>dagen </p></div>
                    <div><span class="count" id="hrs"></span>
                        <p>uur </p></div>
                    <div><span class="count" id="min"></span>
                        <p>minuten </p></div>
                    <div><span class="count" id="sec"></span>
                        <p>seconden </p></div>
                </div>
                <h2>6<sup>de</sup> editie Red Alert!</h2>
                <p><a href="http://kljhamme.be/" target="_blank">KLJ Hamme-Center</a> organiseert voor de zesde keer een
                    van de grootste knallers van het Hamse fuifseizoen! Op zaterdag 18 maart 2017 kan je in zaal
                    Hambiance weer komen feesten met Red Alert! Aankondiging van de DJ's komt nog, dus jullie zullen nog
                    even in spanning moeten afwachten...
                </p>
                <p>Uiteraard doe je ook dit jaar je voordeel met ons bieralarm: wanneer je het alarm hoort, krijg je
                    namelijk twee consumpties voor de prijs van een!</p>
                <p>Klik op een pagina in het menu links voor tickets en info. Hou ook zeker onze <a href="https://www.facebook.com/RedAlertHamme/?fref=ts">Facebookpagina</a> in de
                    gaten en <strong>maak kans op gratis tickets!</strong></p>
                <p>Het was weer een dik geslaagde editie dit jaar! Bedankt aan iedereen die gekomen is. De foto's zijn <a href=""</p>
            </div>
        </div>
        <?php getFooter() ?>
    </div>
    <?php getAnim() ?>
</div>
<script src="js/slideout.min.js"></script>
<script src="js/jquery.min.js"></script>
<script src="js/functions.min.js"></script>
</body>

</html>