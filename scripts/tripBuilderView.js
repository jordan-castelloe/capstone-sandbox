'use strict';

module.exports.printTrip = function(resultsDiv){
    console.log("this should be the card div", resultsDiv);
    let tripContainer = $(".trip-container");
    let locationCard = $(resultsDiv).clone();
    let removeButton = $("<button>", {class: "btn btn-secondary", id: "removeFromTrip"}).text("Remove From Trip");
    $("#addToTrip").replaceWith(removeButton);
    locationCard.appendTo(tripContainer);
};