'use strict';

const placesSearch = require("./placesSearchModel.js");
const tripBuilder = require("./tripBuilderModel.js");
const tripPrinter = require("./tripBuilderView.js");
const singleTrip = require("./singleTripModel.js");

module.exports.activateEvents = function(){

    //shows secton when you click on the navbar
     $(".navbar").click(function() {
       $(".hidden").hide();
       let currentButtonName = event.target.id;
       $(`#${currentButtonName}-section`).show();
     });

     // search for places in 'create trip' section
     $("#search-button").click(function(){
        let searchString = $(".search-bar").val();
        console.log("this is the search string you're passing in", searchString);
        placesSearch.searchPlaces(searchString);
        // need to clear search results every time this is clicked
     });

     // adds each place to trip when you click on it from the search results
     $("#search-results-container").click(function(){
         if (event.target.id == "addToTrip") {
           tripBuilder.addToTrip(event.target.parentNode.id); //stores array of place ids in local storage
           tripPrinter.printTrip(event.target.parentNode); // moves the place over to 'your trip' div on the right
         }
     });

     // save button on click -- > add whole array to trip

    //  event handler for remove from trip button 
        //  removes from Dom-- tripBuilderView.js
        //  removes from array-- tripBuilder.js

    // when you click on the view trip button on each trip card under 'view all trips', it hides the view all trips scene and shows the individual trip
    $("#view-trip").click(function(){
        $(".hidden").hide();
        $("#single-trip-section").show();
        singleTrip.loadTrip();
    });
    
};

