//call for a map of Colorado Springs and add it to the DOM
var map;
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 38.83, lng: -104.825},
      zoom: 12
  });
  var marker = new google.maps.Marker({
    position: {lat: 38.83, lng: -104.825},
    map: map,
    title: 'Colorado Springs'
  });
}

// function showLink() {
//   console.log("the link worked I guess");
// }

// showLink();
// initMap();