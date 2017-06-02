<?php include '../php/functions.php'; ?>
<!doctype html>
<html>

<head>
    <?php getHead(); ?>
    <title>Red Alert - Tickets</title>
</head>

<body>
    <div id="wrap">
        <?php
                    getMenu();?>
            <div id="panel">
                <header>
                    <button class="toggle-button"></button>
                    <h1 id="title"></h1>
                </header>
                <div id="main">
                    <div id="border">
                        <p id="firstpar">Tickets in voorverkoop kosten €5 per ticket, aan de kassa betaal je €7 per ticket. Je kan ze krijgen bij alle +16 leden van KLJ Hamme of op volgende locaties:</p>
                        <ul id="vvk">
                            <li>Jeugddienst Hamme - Kaaiplein 36 - 9220 Hamme
                            </li>
                            <li>Nachtwinkel Apu - Slangstraat 70 - 9220 Hamme
                            </li>
                        </ul>
                        <div id="mapWrap">
                            <div id="map"></div>
                        </div>
                    </div>
                </div>
                <?php getFooter() ?>
            </div>

    </div>
    <?php getAnim() ?>
    <?php getScripts(); ?>
    <script src="../dist/tickets.min.js "></script>
</body>

</html>