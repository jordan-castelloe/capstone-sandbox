'use strict';

// takes input from dom, outputs an object to send to firebase
// fired on save or publish
module.exports.formatTrip = function(){
    let tripName = $('#trip-name').val();
    let tripDescription = $('#trip-description').val();
    let tripType = $('#trip-type').val();
    let trip = {
        name: tripName,
        description: tripDescription,
        type: tripType,
        user: "Current user"
    };
    return trip;
};