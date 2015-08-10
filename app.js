var portrero = new google.maps.LatLng(37.750538,-122.4050346);

function initialize() {
  var mapProp = {
    center:portrero, // <- LatLng is where we want to send location data from phone
    zoom:15,
    mapTypeId:google.maps.MapTypeId.HYBRID,
    panControl:false,
    zoomControl:false,
    zoomControlOptions: {
      style:google.maps.ZoomControlStyle.SMALL,
    },
    mapTypeControl:false,
    scaleControl:false,
    streetViewControl:false,
    overviewMapControl:false,
    rotateControl:false,
  };

  // builds map
  var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
  map.setTilt(0);
}

google.maps.event.addDomListener(window, 'load', initialize);