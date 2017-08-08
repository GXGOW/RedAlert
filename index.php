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
<div id="wrap">
    <?php getMenu(); ?>
    <div id="panel">
        <?php getHeader() ?>
        <div id="main">
        </div>
        <?php getFooter() ?>
    </div>
    <?php getAnim() ?>
</div>
<?php getScripts(); ?>
</body>

</html>