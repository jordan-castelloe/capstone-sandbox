'use strict';
const domPrinter = require("./domPrinter");
let map = "";

//fid the user's location
module.exports.geoLocate = function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error);
    } else {
        console.log("Noooo! Geolocation is not supported by this browser.");
    }
};

// if geolocation is successful, store the lat and long and call the showMap function
function success(result) {
    let location = result.coords;
    let lat = location.latitude;
    let long = location.longitude;
    showMap(lat, long);
}

// if not, print an error code
function error(error) {
  console.log(`error(${error.code}): ${error.message}`);
}

// show the searchable map
function showMap(lat, long) {
    let mapContainer = document.getElementById("searchable-map");  
    map = new google.maps.Map(mapContainer, {
      zoom: 6,
      center: { lat: lat, lng: long },
      zoomControl: true,
    });
}

// pass in a search string and search the radius of the map
module.exports.searchPlaces = function(searchString) {
    let searchRequest = {
        query: searchString,
        location: map.getCenter(),
        radius: 5000
    };
    let placesService = new google.maps.places.PlacesService(map);
    placesService.textSearch(searchRequest, callback);
};

//once the search request completes, print the search results
// this has to be here right now (rather than in events) because I'm not sure how to convert google maps calls to promises
function callback(searchResults, status) {
    domPrinter.printSearchResults(searchResults);
    $(".search-result").draggable();

}









