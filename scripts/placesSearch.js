'use strict';
const printer = require("./placesSearchView.js");

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
    console.log("lat", lat, "long", long);
    showMap(lat, long);
}

function error(error) {
  console.log(`error(${error.code}): ${error.message}`);
}


function showMap(lat, long) {
    let mapContainer = document.getElementById("searchable-map");  // why doesn't this work with jquery selectors?
    map = new google.maps.Map(mapContainer, {
      zoom: 6,
      center: { lat: lat, lng: long },
      zoomControl: true,
    });
}


module.exports.searchPlaces = function(searchString) {
    let searchRequest = {
        query: searchString,
        location: map.getCenter(),
        radius: 5000
    };
    let placesService = new google.maps.places.PlacesService(map);
    placesService.textSearch(searchRequest, callback);
};

function callback(searchResults, status) {
  console.log(searchResults);
  printer.printSearchResults(searchResults);
}









