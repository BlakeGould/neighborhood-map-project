  var places = {
    place1 : {
      lat: 38.8393738,
      lng: -104.7959303,
      title: 'US Olympic Training Center'
    },

    place2 : {
      lat: 38.813946,
      lng: -104.839968,
      title: 'Pure Bouldering Gym'
    },

    place3 : {
      lat: 38.810937,
      lng: -104.827455,
      title: "Principal's Office"
    },

    place4 : {
      lat: 38.899094,
      lng: -104.827324,
      title: 'Sport Climbing Center'
    },

    place5 : {
      lat: 38.835652,
      lng: -104.821964,
      title: "Brewer's Republic"
    }
  };


//call for a map of Colorado Springs and add it to the DOM
// var map;
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 38.83, lng: -104.825},
      zoom: 12
  });

//Create marker function to be called by for loop
  var marker = function(lat, lng, title) {
    new google.maps.Marker({
      position: {lat: lat, lng: lng},
      map: map,
      title: title
    })
  };

//Try another for loop using bracket notation. It works! Iterates through places2 and adds a marker for each!
  for (each in places) {
    marker(places[each]['lat'], places[each]['lng'], places[each]['title']);
  }
}

// ko.applyBindings(viewModel);
