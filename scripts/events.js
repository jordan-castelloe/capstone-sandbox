'use strict';

const placesSearch = require("./placesSearchModel.js");
const tripBuilder = require("./tripBuilderModel.js");
const tripPrinter = require("./tripBuilderView.js");
const singleTrip = require("./singleTripModel.js");
let places = [];

//shows secton when you click on the navbar
function activateNavBar(){
    $(".navbar").click(function () {
        $(".hidden").hide();
        let currentButtonName = event.target.id;
        $(`#${currentButtonName}-section`).show();
    });
}

// search for places in 'create trip' section
function activateSearchButton(){
    $("#search-button").click(function () {
        let searchString = $(".search-bar").val();
        placesSearch.searchPlaces(searchString);
        // this should return an array of places and THEN you send them ot the printer
        // need to clear search results every time this is clicked
    });
}

// adds each place to trip when you click on it from the search results
function activateAddToTripButtons (){
    $("#search-results-container").click(function () {
        if (event.target.id == "addToTrip") {
            places.push(event.target.parentNode.id);
            tripPrinter.printTrip(event.target.parentNode); // moves the place (parentNodeof the button) over to 'your trip' div on the right
        }
    });
}

// right now save and publish do the same thing, but eventually save would save it locally and publish would stick it on the map
function activateSaveTripButton(){
    $("#save-trip-button").click(function () {
        tripBuilder.saveTrip(places);
    });
}

function activatePublishButton(){
    $("#publish-trip-button").click(function () {
        tripBuilder.saveTrip(places);
    });
}

// when you click on the view trip button on each trip card under 'view all trips', it hides the view all trips scene and shows the individual trip
function activateViewTripButton(){
    $("#view-trip").click(function () {
        $(".hidden").hide();
        $("#single-trip-section").show();
        singleTrip.loadTrip("-L2jQtIMgyhGUVRoAjc7"); // this accepts an arguement of trip name
    });
}

//  event handler for remove from trip button 
//  removes from Dom-- tripBuilderView.js
//  removes from array-- tripBuilder.js

// PAGE LOAD EVENTS

// loads the search map and geolocates to user's location
function makeSearchMap () {
     placesSearch.geoLocate();
 }

 function showHomePage(){
     $(".hidden").hide();
     $(".browse-section").show(); 
 }


module.exports.activateEvents = function () {
    activateNavBar();
    activateSearchButton();
    activateAddToTripButtons();
    activateSaveTripButton();
    activatePublishButton(); 
};

// sets what the viewer sees when the page first loads
module.exports.initializePage = function(){
    showHomePage();
    makeSearchMap();
};