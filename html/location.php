<?php include '../php/functions.php';
?>
<!doctype html>
<html>

<head>
    <?php getHead();?>
    <title>Red Alert - Locatie</title>
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
<?php getScripts()?>
<script src="../dist/map.min.js"></script>
</body>

</html>