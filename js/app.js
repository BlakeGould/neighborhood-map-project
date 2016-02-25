//call for a map of Colorado Springs and add it to the DOM
var map;
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 38.83, lng: -104.825},
      zoom: 12
  });

  var Marker = function() {
    new google.maps.Marker({
      position: {lat: 38.83, lng: -104.825},
      map: map,
      title: 'Colorado Springs'
    });
  };

  var places = {
    // name: 'cos'

    place1 : {
      stuff: 'things',
      garbage: 'man',
      position: {lat: 38.83, lng: -104.825},
      map: map,
      title: 'Colorado Springs'
      }

    // {position:  {lat: 38.83, lng: -104.825}, title: 'Colorado Springs'}
  }

    // for (var place in places) {
    //   new Marker();
    // }


  // need to find a way to access properties of each item in the places object via this for loop...
  for (var place in places) {
    new google.maps.Marker({
      position: {lat: places.place1.position.lat, lng: places.place1.position.lng},
      map: places.place1.map,
      title: places.place1.title
    });
    console.log(place.title)
  }

  // for (var place in places) {
  //   new google.maps.Marker({
  //     position: place.position,
  //     map: place.map,
  //     title: place.title
  //   });
  // }

  // var allMarkers = [new Marker()];

  // var marker = new google.maps.Marker({
  //   position: {lat: 38.83, lng: -104.825},
  //   map: map,
  //   title: 'Colorado Springs'
  // });
}

// function showLink() {
//   console.log("the link worked I guess");
// }

// showLink();
// initMap();