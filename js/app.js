//call for a map of Colorado Springs and add it to the DOM
var map;
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 38.83, lng: -104.825},
      zoom: 12
  });


// initMap();

// First attempt.
// Create a marker on its own.
  // var marker = new google.maps.Marker({
  //   position: {lat: 38.83, lng: -104.825},
  //   map: map,
  //   title: 'Colorado Springs'
  //   });


//Second attempt.
//Create places object
  // var places = {
  //   place1 : {
  //     position: {lat: 38.83, lng: -104.825},
  //     map: map,
  //     title: 'Colorado Springs'
  //     }
  // };
//this for loop runs the code inside, but it doesn't access properties of places based on each iteration of the loop. I had to hard code places.place1.position.lng to get the longitude. I'd rather use something like each.lng
  // for (each in places) {
  //   new google.maps.Marker({
  //     position: {lat: places.place1.position.lat, lng: places.place1.position.lng},
  //     map: places.place1.map,
  //     title: places.place1.title
  //   });
  // }


// //Third attempt.
// Create places2 object
  var places2 = {
    place1 : {
      lat: 38.83,
      lng: -104.825,
      title: 'Colorado Springs'
    },

    place2 : {
      lat: 39,
      lng: -104.8,
      title: 'whocares'
    }
  };

//Create marker function to be called by for loop
  var marker2 = function(lat, lng, title) {
    new google.maps.Marker({
      position: {lat: lat, lng: lng},
      map: map,
      title: title
    })
  };
//Test run the marker function. It works.
  // marker2(38.8, -104.825, 'whatever');

//Test run the marker fucntion accessing properties from places2. It works.
  // marker2(places2.place1.lat, places2.place1.lng, places2.place1.title);

//Create a for loop to run the marker function for each place in places2.
//This works, but isn't taking properties of each place from places2.
  // for (each in places2) {
  //   marker2(places2.place1.lat, places2.place1.lng, places2.place1.title);
  // }
//This one doesn't work.
  // for (each in places2) {
  //   marker2(each.lat, each.lng, each.title);
  // }
//Try another for loop.



}