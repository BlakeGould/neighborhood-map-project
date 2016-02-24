//call for a map of Colorado Springs and add it to the DOM
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 38.8756007, lng: -104.8984441},
      zoom: 12
  });
}

// function showLink() {
//   console.log("the link worked I guess");
// }

// showLink();
// initMap();