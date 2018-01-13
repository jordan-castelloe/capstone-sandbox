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
