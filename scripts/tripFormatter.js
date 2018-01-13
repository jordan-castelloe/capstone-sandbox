'use strict';

// takes input from dom, outputs an object to send to firebase
// fired on save or publish
module.exports.formatTrip = function(locationsArray){
    let name = $('#trip-name').val();
    let description = $('#trip-description').val();
    let type = $('#trip-type').val();
    let currentUser = "Jordan";
    let locations = locationsArray;
    let trip = {name, description, type, currentUser, locations};
    return trip;
};

module.exports.addTripID = function(allTrips){
   let keys = Object.keys(allTrips);
   keys.forEach(key =>{
       allTrips[key].id = key;
   });
   return allTrips;
};