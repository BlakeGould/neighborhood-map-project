// The Model storing place data
  var places = [
    {
      lat: 38.8393738,
      lng: -104.7959303,
      title: 'US Olympic Training Center'
    },

    {
      lat: 38.813946,
      lng: -104.839968,
      title: 'Pure Bouldering Gym'
    },

    {
      lat: 38.810937,
      lng: -104.827455,
      title: "Principal's Office"
    },

    {
      lat: 38.899094,
      lng: -104.827324,
      title: 'Sport Climbing Center'
    },

    {
      lat: 38.835652,
      lng: -104.821964,
      title: "Brewer's Republic"
    }
  ];


//The ViewModel for the map and markers
// var map;
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 38.83, lng: -104.825},
      zoom: 12
  });

// Create marker function to be called by for loop
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
};

// The ViewModel for the list and filter
function ListViewModel () {

  // Create observable array to hold places
  this.viewPlaces = ko.observableArray([
    ]);

  // Populate viewPlaces observable array with names of places from The Model
  for (each in places) {
    self.viewPlaces.push({name: places[each]['title']})
  };

  this.query = ko.observable('');

  this.search = function(value) {
    viewPlaces.removeAll();

    if (value == '') return;

    for (var place in viewPlaces) {
      if (viewPlaces[place].title.toLowerCase().indexOf(value.toLowerCase()) >= 0) {
          viewPlaces.push(places[place]);
      }
    }
  }
};

ko.applyBindings(ListViewModel);
