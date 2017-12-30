'use strict';

module.exports.printSearchResults = function(resultsArray){
    let resultsContainer = $("#search-results-container");
    for (let i = 0; i < resultsArray.length; i++){
        let currentResult = resultsArray[i];
        let card = $("<div>", { class: "card search-result" });
        let name = $("<h5>", { class: "result-name card-title" }).text(currentResult.name).appendTo(card);
        let address = $("<p>", { class: "result-addres" }).text(currentResult.formatted_address).appendTo(card);
        let addButton = $("<button>", {class: "btn btn-secondary", id: "addToTrip"}).text("Add To Trip").appendTo(card);
        card.appendTo(resultsContainer);
    }

};
