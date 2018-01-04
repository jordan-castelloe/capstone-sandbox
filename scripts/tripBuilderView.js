'use strict';

// prints into 'your trip' section under 'create trip' when you add something to your trip from the search results
module.exports.printTrip = function(resultsDiv){
    let tripContainer = $(".trip-container");
    let locationCard = $(resultsDiv).clone();
    locationCard.addClass("location-card");
    let removeButton = $("<button>", {class: "btn btn-secondary", id: "removeFromTrip"}).text("Remove From Trip");
    $(".location-card > #addToTrip").replaceWith(removeButton); // why does this only work on the second click??
    locationCard.appendTo(tripContainer); 
};

module.exports.removeLocationCard = function(locationCard){
    //remove from dom
};
