<?php include '../php/functions.php'; ?>
<!doctype html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Red Alert - Sponsors</title>
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
    <?php
    getMenu(); ?>
    <div id="panel">
        <?php getHeader() ?>
        <div id="main">
            <div id="border">
                <p id="firstpar">Deze fuif zou natuurlijk nooit mogelijk geweest zijn zonder onze sponsors.</p>

                <div id="slides">
                    <?php slideshow() ?>
                    <span class="slidesjs-previous slidesjs-navigation"><i class="fa fa-arrow-left fa-lg"
                                                                           aria-hidden="true"></i>
</span>
                    <span class="slidesjs-next slidesjs-navigation"><i class="fa fa-arrow-right fa-lg"
                                                                       aria-hidden="true"></i>
</span>
                </div>
                <p>Indien je de slideshow wilt pauzeren, hoef je er enkel maar met je muis op te staan of, als je de
                    website via een mobiel toestel bekijkt, erop te tikken.</p>
            </div>
        </div>
        <?php getFooter() ?>
    </div>
    <?php getAnim() ?>
</div>


<script src="../js/jquery.min.js"></script>
<script src="../js/functions.min.js"></script>
<script src="../js/slideout.min.js"></script>
<script src="../js/jquery.slides.min.js"></script>
<script>
    $(function () {
        $("#slides").slidesjs({
            width: 700,
            height: 450,
            navigation: {
                active: false,
                effect: "slide"
            },
            pagination: {
                active: false
            },
            play: {
                active: false,
                auto: true,
                effect: "slide",
                interval: 3000,
                pauseOnHover: true
            }
        })
        ;
    });
</script>
</body>

</html>