<?php include 'php/functions.php'; ?>
<!doctype html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Red Alert - Home</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes">
    <meta name="theme-color" content="#5c0000">
    <link rel="icon" sizes="244x244" href="images/icon.png ">
    <link href="build/reset.css" rel="stylesheet">
    <link href="build/styles.min.css" rel="stylesheet">
    <link href="build/font-awesome/css/font-awesome.min.css" rel="stylesheet"/>
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
    <div id="panel">
        <?php getHeader(); ?>
        <div id="main">
            <picture>
                <img src="images/thanks.jpg" alt="Sfeerfoto">
            </picture>
            <div id="border">
                <h2>6<sup>de</sup> editie Red Alert!</h2>
                <p>Het was weer een dik geslaagde editie! Bedankt aan iedereen die gekomen is en geholpen heeft om er weer
                een dik feestje van te maken! De foto's zijn ondertussen
                     <a href="https://www.facebook.com/pg/LieseKeeremanPhotography/photos/?tab=album&album_id=639048146290817" target="_blank">hier</a> te vinden.</p>
                <p>Bedankt en tot volgend jaar!</p>
            </div>
        </div>
        <?php getFooter() ?>
    </div>
    <?php getAnim() ?>
</div>
<script src="build/functions.min.js"></script>
</body>

</html>