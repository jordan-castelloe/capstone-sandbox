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

module.exports.printAllTrips = function(allTrips){
    let container = $("#view-all-trips-container");
    container.html('');
    for (let trip in allTrips) {
        let tripCard = $("<article>", { class: "trip card", id: allTrips[trip].name }); // eventually I want the id to be a trip id
        let cardBody = $("<div>", { class: "card-body" });
        let tripName = $("<h3>", { class: "trip-name card-title" }).text(allTrips[trip].name);
        let tripAuthor = $("<h5>", { class: "trip-autor" }).text(allTrips[trip].currentUser);
        let tripDescription = $("<p>", { class: "trip-description card-text" }).text(allTrips[trip].description);
        let viewTripButton = $("<button>", { class: "btn btn-secondary view-trip", id: allTrips[trip].name }).text("View Trip");
        cardBody.append(tripName).append(tripAuthor).append(tripDescription).append(viewTripButton);
        tripCard.append(cardBody);
        container.append(tripCard);
    }
};