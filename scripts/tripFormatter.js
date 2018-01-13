'use strict';

// takes input from dom, outputs an object to send to firebase
// fired on save or publish
module.exports.formatTrip = function(locationsArray){
    console.log("this is the locations array from inside the format trip function", locationsArray);
    let name = $('#trip-name').val();
    let description = $('#trip-description').val();
    let type = $('#trip-type').val();
    let currentUser = "Current user";
    let locations = locationsArray;
    let trip = {name, description, type, currentUser, locations};
    console.log("this is the formatted trip", trip);
    return trip;
};

module.exports.addTripID = function(allTrips){
   let keys = Object.keys(allTrips);
   keys.forEach(key =>{
       allTrips[key].id = key;
   });
   return allTrips;
};