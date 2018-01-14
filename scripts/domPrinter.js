'use strict';

// print search results in the DOM (gets called in callback for places search in placesSearchModel)
module.exports.printSearchResults = function (results) {
    let $resultsContainer = $("#search-results-container");
    const viewSearchResults = require("../templates/search-results.hbs");
    $resultsContainer.html('');
    $resultsContainer.html(viewSearchResults({ results }));
};

// moves location from 
module.exports.printTripBuilder = function (resultsDiv) {
    let tripContainer = $(".my-trip");
    let locationCard = $(resultsDiv).clone();
    locationCard.addClass("location-card");
    let removeButton = $("<button>", { class: "btn btn-secondary", id: "removeFromTrip" }).text("Remove From Trip");
    locationCard.appendTo(tripContainer);
    $(".location-card > .addToTrip").replaceWith(removeButton); // why does this only work on the second click?? oh because it's only targeting ones with the class of location card
};

module.exports.printAllTrips = function(allTrips){
    const $container = $("#view-all-trips-container");
    const viewAllTrips = require("../templates/view-all-trips.hbs");
    $container.html('');
    $container.html(viewAllTrips({ trips: allTrips }));
   
};

// pritns a single trip when you click on the view trip button
module.exports.viewSingleTrip = function(singleTrip){
    $(".hidden").hide();
    $("#view-single-trip").show();
    const viewTrip = require("../templates/view-single-trip.hbs");
    $("#view-single-trip").html(viewTrip({ trip: singleTrip }));
};