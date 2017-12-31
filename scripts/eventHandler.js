'use strict';

const placesSearch = require("./placesSearch.js");
const tripBuilder = require("./tripBuilder.js");
const tripPrinter = require("./tripBuilderView.js");

module.exports.activateEvents = function(){

     $(".navbar").click(function() {
       $(".hidden").hide();
       let currentButtonName = event.target.id;
       $(`#${currentButtonName}-section`).show();
     });

     $("#search-button").click(function(){
        let searchString = $(".search-bar").val();
        console.log("this is the search string you're passing in", searchString);
        placesSearch.searchPlaces(searchString);
        // need to clear search results every time this is clicked
     });

     $("#search-results-container").click(function(){
         if (event.target.id == "addToTrip") {
           tripBuilder.addToTrip(event.target.parentNode.id);
           tripPrinter.printTrip(event.target.parentNode);
         }
     });

    //  event handler for remove from trip button 
    //  removes from Dom-- tripBuilderView.js
    //  removes from array-- tripBuilder.js

    
};

