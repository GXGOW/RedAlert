var map;
var marker;
var mapDiv;
var title;
var latlng;

function initMap(page) {
    mapDiv = $('#main').find('#map')[0];
    mainView.setMapDimensions();
    switch (page) {
        case 'location':
            latlng = {
                lat: 51.1023047,
                lng: 4.1352369
            };
            title = 'Hambiance Hamme';
            break;
        case 'tickets':
            latlng = {
                lat: 51.0928994,
                lng: 4.1364247
            };
            title = 'Jeugddienst Hamme'
            $("#vvk li").each(function() {
                $(this).on("click", function() {
                    changeMap($(this).text().split(" ")[0]);
                })
            });
    }
    map = new google.maps.Map(mapDiv, {
        center: latlng,
        zoom: 16
    });

    marker = new google.maps.Marker({
        position: latlng,
        map: map,
        icon: '../images/letter.png',
        title: title
    });
}

function changeMap(address) {
    switch (address) {
        case "Jeugddienst":
            latlng = {
                lat: 51.1020762,
                lng: 4.134353
            };
            marker.setTitle(marker.name = "Jeugddienst Hamme");
            break;
        case "Nachtwinkel":
            latlng = {
                lat: 51.0928994,
                lng: 4.1364247
            };
            marker.setTitle(marker.name = "Nachtwinkel Apu");
            break;
    }
    map.panTo(latlng);
    marker.setPosition(latlng);
}