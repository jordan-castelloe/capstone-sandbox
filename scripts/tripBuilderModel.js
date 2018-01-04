'use strict';
const localStorageHandler = require("./localStorage.js");

module.exports.saveTrip = function(placesArray){
    console.log("this is the places array from the saveTrip function in the tripbuilder module", placesArray);
    localStorage.setItem("placesArray", JSON.stringify(placesArray));
};

module.exports.removeFromTrip = function(placeID){
    // match div id to place id
    // slice from array
    // look at chatty
};



