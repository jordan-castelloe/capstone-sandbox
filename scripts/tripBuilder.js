'use strict';
const localStorageHandler = require("./localStorage.js");
let places = [];

module.exports.addToTrip = function(placeID){
    places.push(placeID);
    localStorage.setItem("placesArray", JSON.stringify(places));
    // the name would need to be the name of the trip
};

module.exports.removeFromTrip = function(placeID){
    // match div id to place id
    // slice from array
    // look at chatty
};

