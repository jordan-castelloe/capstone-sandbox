'use strict';

const localStorageHandler = require("./localStorage.js");
let map = "";

const infowindow = new google.maps.InfoWindow();
const geocoder = new google.maps.Geocoder();

module.exports.loadTrip = function(tripName){
    let tripIDs = getTripData(); // pass in argument of trip name- for now it's just places Array
    getMapCenter(tripIDs[0]);
    // getLatLngs(tripIDs); 
};

// this would accept an argument of trip name
function getTripData(){
    let tripData = JSON.parse(localStorage.getItem("placesArray"));
    console.log("this should be an array of trip Id's", tripData);
    return tripData;
}

function getMapCenter(firstId){
    geocoder.geocode({ placeId: firstId }, mapCenterCallback);
}

function mapCenterCallback(results, status){
    let center = results[0].geometry.location;
    showMap(center);
}

// convert all place ids to lat lng objects
function getLatLngs(placeIdArray){
    for (let i = 0; i < placeIdArray.length; i++){
        geocoder.geocode({ placeId: placeIdArray[i] }, geocoderCallback);
    }
}



function geocoderCallback(results, status){
    let resultsArray = [];
    resultsArray.push(results);
    return resultsArray;
    // console.log("this is a single result", results); // this is a single result (it looks like an array??)
    // console.log("this is the type of result", typeof results); // but it says it's an object??
    // console.log("this should be an array of the results", resultsArray); //wtf is going on
    // console.log("this should be a single result pulled from the array and it SHOULD LOOK LIKE AN OBJECT", resultsArray[0][0]); //this works
    // console.log("this should be a single result latlng object", resultsArray[0][0].geometry.location); // this works 
    
}


function showMap(latlngObject) {
    console.log("show map function fired!");
    let mapContainer = document.getElementById("single-trip-map-container"); 
    map = new google.maps.Map(mapContainer, {
        zoom: 6,
        center: latlngObject,
        zoomControl: true
    });
}



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
