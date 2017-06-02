<?php include '../php/functions.php'; ?>
<!doctype html>
<html>

<head>
    <?php getHead(); ?>
    <title>Red Alert - Sponsors</title>
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
<?php getScripts()?>
<script src="../js/jquery.slides.min.js"></script>
<script>
    //TODO Misschien eens naar andere plugin zoeken. Ziet er naar uit dat deze abandoned is. (npm install simple-slideshow)
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