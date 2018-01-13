'use strict';

// takes input from dom, outputs an object to send to firebase
// fired on save or publish
module.exports.formatTrip = function(){
    let name = $('#trip-name').val();
    let description = $('#trip-description').val();
    let type = $('#trip-type').val();
    let currentUser = "Current user";
    let trip = {name, description, type, currentUser};
    return trip;
};