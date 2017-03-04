<?php include '../php/functions.php';
?>
<!doctype html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Red Alert - Locatie</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes">
    <meta name="theme-color" content="#5c0000">
    <link rel="icon" sizes="244x244" href="../images/icon.png ">
    <link href="../css/reset_browser_styles.min.css" rel="stylesheet">
    <link href="../css/styles.min.css" rel="stylesheet">
    <link href="../fonts/font-awesome/css/font-awesome.min.css" rel="stylesheet"/>
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
            <div id="border">
                <p id="firstpar">De voorbije vijf jaar is de zaal Hambiance onze vaste stek geworden, waarin we elk jaar
                    weer een knaller van een feest mogen organiseren.
                    Ook dit jaar zal de Red Alert daarin doorgaan. Je kan deze zaal vinden op Kaaiplein 35 te Hamme,
                    naast Sporthal Meulenbroek, of gewoon op de onderstaande kaart.</p>
                <div id="mapWrap">
                    <div id="map"></div>
                </div>
            </div>
        </div>
        <?php getFooter(); ?>
    </div>
    <?php getAnim() ?>
</div>

<script src="../js/functions.min.js"></script>
<script src="../js/jquery.min.js"></script>
<script src="../js/slideout.min.js"></script>
<script src="../js/map.min.js"></script>
</body>

</html>