var mapDiv = document.getElementById("map");
var strDiv = document.getElementById('streetview');
var Latlng = {
    lat: 51.1023047,
    lng: 4.1352369
};
var pov = {
    heading: 34,
    pitch: 10
}

function initMap() {
    //mainView.setMapDimensions();
    var map = new google.maps.Map(mapDiv, {
        center: Latlng,
        zoom: 16
    });

    var marker = new google.maps.Marker({
        position: Latlng,
        map: map,
        icon: '../images/letter.png',
        title: 'Hambiance Hamme'
    });
}