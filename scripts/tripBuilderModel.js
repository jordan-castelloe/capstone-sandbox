'use strict';
const firebase = require('./firebase');

module.exports.saveTrip = function(placesArray){
    // localStorage.setItem("placesArray", JSON.stringify(placesArray));
    firebase.createNewTrip(placesArray);
};

module.exports.removeFromTrip = function(placeID){
    // match div id to place id
    // slice from array
    // look at chatty
};



