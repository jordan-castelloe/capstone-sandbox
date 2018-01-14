'use strict';

// print search results in the DOM (gets called in callback for places search in placesSearchModel)
// CONVERT TO HANDLEBARS 
module.exports.printSearchResults = function (resultsArray) {
    let resultsContainer = $("#search-results-container");
    for (let i = 0; i < resultsArray.length; i++) {
        let currentResult = resultsArray[i];
        let card = $("<div>", { class: "card search-result", id: currentResult.place_id });
        let name = $("<h5>", { class: "result-name card-title" }).text(currentResult.name).appendTo(card);
        let address = $("<p>", { class: "result-addres" }).text(currentResult.formatted_address).appendTo(card);
        let addButton = $("<button>", { class: "btn btn-secondary", id: "addToTrip" }).text("Add To Trip").appendTo(card);
        card.appendTo(resultsContainer);
    }
};

module.exports.printTripBuilder = function (resultsDiv) {
    let tripContainer = $(".my-trip");
    let locationCard = $(resultsDiv).clone();
    locationCard.addClass("location-card");
    let removeButton = $("<button>", { class: "btn btn-secondary", id: "removeFromTrip" }).text("Remove From Trip");
    $(".location-card > #addToTrip").replaceWith(removeButton); // why does this only work on the second click??
    locationCard.appendTo(tripContainer);
};

// oh my god this has got to be handlebars
module.exports.printAllTrips = function(allTrips){
    const $container = $("#view-all-trips-container");
    const viewAllTrips = require("../templates/view-all-trips.hbs");
    $container.html('');
    $container.html(viewAllTrips({ trips: allTrips }));
   
};

module.exports.viewSingleTrip = function(singleTrip){
    const viewTrip = require("../templates/view-single-trip.hbs");
    $("#view-single-trip").html(viewTrip({ trip: singleTrip }));
};