<?php include 'php/functions.php'; ?>
<!doctype html>
<html>

<head>
    <?php getHead(); ?>
    <title>Red Alert - Home</title>
</head>

<body>
<noscript>Your browser does not support Javascript.
    <style>div {
            display: none;
        }</style>
</noscript>
<div class="animated rubberBand" id=home>
        <img src="images/logo.png"/>
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
    </div>
    <div class="arrow bounce"></div>
<?php getScripts(); ?>
</body>

</html>