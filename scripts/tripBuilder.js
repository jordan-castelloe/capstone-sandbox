'use strict';
let places = [];
module.exports.addToTrip = function(placeID){
    places.push(placeID);
    console.log(places);
};

function addToLocalStorage(){

}