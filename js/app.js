//call for a map of Colorado Springs and add it to the DOM
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
  });
}

// function showLink() {
//   console.log("the link worked I guess");
// }

// showLink();
// initMap();