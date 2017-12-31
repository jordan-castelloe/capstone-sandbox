'use strict';

module.exports.printTrip = function(resultsDiv){
    console.log("this should be the card div", resultsDiv);
    let tripContainer = $(".trip-container");
    let locationCard = $(resultsDiv).clone();
    locationCard.addClass("location-card");
    let removeButton = $("<button>", {class: "btn btn-secondary", id: "removeFromTrip"}).text("Remove From Trip");
    $(".location-card > #addToTrip").replaceWith(removeButton); // why does this only work on the second click??
    locationCard.appendTo(tripContainer); 
};
