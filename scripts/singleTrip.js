'use strict';

const localStorageHandler = require("./localStorage.js");
let map = "";

const infowindow = new google.maps.InfoWindow();
const geocoder = new google.maps.Geocoder();

module.exports.loadTrip = function(tripName){
    let tripIDs = getTripData(); // pass in argument of trip name- for now it's just places Array
    getLatLngs(tripIDs); 
};

// this would accept an argument of trip name
function getTripData(){
    let tripData = JSON.parse(localStorage.getItem("placesArray"));
    console.log("this should be an array of trip Id's", tripData);
    return tripData;
}

// convert all place ids to lat lng objects
function getLatLngs(placeIdArray){
    for (let i = 0; i < placeIdArray.length; i++){
        let placeId = placeIdArray[i];
        geocoder.geocode({ placeId: placeId }, geocoderCallback);
    }  
}

function geocoderCallback(results, status){
    console.log("this should be the results",results);
    console.log("this is the status", status);
}


function getMapCenter(){
// figure out where to center the map? pick a lat lng??
}

function showMap(lat, long) {
  let mapContainer = document.getElementById("single-trip-map-container"); 
  map = new google.maps.Map(mapContainer, {
    zoom: 6,
    center: { lat: lat, lng: long }, // can be a latlng object
    zoomControl: true
  });
}

function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: { lat: 40.72, lng: -73.96 }
  });

  function createMarkers(tripData) {
    //  var marker = new google.maps.Marker({
    //    position: myLatLng,
    //    map: map,
    //    title: "Hello World!"
    //  });
  }

//   document.getElementById("submit").addEventListener("click", function() {
//     geocodePlaceId(geocoder, map, infowindow);
//   });
}
    // function geocodePlaceId(geocoder, map, infowindow) {
    //   var placeId = document.getElementById("place-id").value;
    //   geocoder.geocode({ placeId: placeId }, function(results, status) {
    //     if (status === "OK") {
    //       if (results[0]) {
    //         map.setZoom(11);
    //         map.setCenter(results[0].geometry.location);
    //         var marker = new google.maps.Marker({
    //           map: map,
    //           position: results[0].geometry.location
    //         });
    //         infowindow.setContent(results[0].formatted_address);
    //         infowindow.open(map, marker);
    //       } else {
    //         window.alert("No results found");
    //       }
    //     } else {
    //       window.alert("Geocoder failed due to: " + status);
    //     }
    //   });
    // }
