var map;
var marker;
var mapDiv = document.getElementById("map");
var Latlng = {
    lat: 51.0928994,
    lng: 4.1364247
};

function initMap() {
    map = new google.maps.Map(mapDiv, {
        center: Latlng,
        zoom: 16
    });

    marker = new google.maps.Marker({
        position: Latlng,
        map: map,
        title: "Jeugddienst Hamme"
    });

    $("#vvk li").each(function () {
        $(this).on("click", function () {
            changeMap($(this).text().split(" ")[0]);
        })
    });
}

function changeMap(address) {
    switch (address) {
        case "Jeugddienst":
            Latlng = {
                lat: 51.1020762,
                lng: 4.134353
            };
            marker.setTitle(marker.name = "Jeugddienst Hamme");
            break;
        case "Nachtwinkel":
            Latlng = {
                lat: 51.0928994,
                lng: 4.1364247
            };
            marker.setTitle(marker.name = "Nachtwinkel Apu");
            break;
    }
    map.panTo(Latlng);
    marker.setPosition(Latlng);
}