'use strict';
let map = "";
const firebase = require('./firebase');
const infowindow = new google.maps.InfoWindow();
const geocoder = new google.maps.Geocoder();


// pass in the trip object
module.exports.loadMap = function(trip){
    getMapCenter(trip.locations[0]);
    populateMap(trip.locations);  
};


// centers the map on the first trip ID
function getMapCenter(firstId){
    geocoder.geocode({ placeId: firstId }, mapCenterCallback);
}

// callback for getMapCenter (shows the map)
function mapCenterCallback(results, status){
    let center = results[0].geometry.location;
    showMap(center);
}

// places markers on map
function populateMap(placeIDArray){
    getLatLngs(placeIDArray);
}

// converts all place ids to lat lng objects
function getLatLngs(placeIdArray){
    for (let i = 0; i < placeIdArray.length; i++){
        geocoder.geocode({ placeId: placeIdArray[i] }, geocoderCallback);
    }
}


// this is the callback for each iteration of the getLatLngs loop
function geocoderCallback(results, status){
    createMarkers(results);
    // console.log("this is a single result", results); // this is a single result (it looks like an array??)
    // console.log("this is the type of result", typeof results); // but it says it's an object??
    // console.log("this should be an array of the results", resultsArray); //wtf is going on
    // console.log("this should be a single result pulled from the array and it SHOULD LOOK LIKE AN OBJECT", resultsArray[0][0]); //this works
    // console.log("this should be a single result latlng object", resultsArray[0][0].geometry.location); // this works 
}

// this shows the map-- effectively based on the first place id
function showMap(latlngObject) {
    let mapContainer = document.getElementById("single-trip-map-container"); 
    map = new google.maps.Map(mapContainer, {
        zoom: 8,
        center: latlngObject,
        zoomControl: true
    });
}

// creates a map marker for a location obj
function createMarkers(locationObject) {
    let marker = new google.maps.Marker({
        position: locationObject[0].geometry.location,
        map: map,
        title: "title"
    });
}
