'use strict';

const placesSearch = require("./placesSearch");
const domPrinter = require("./domPrinter");
const singleTripLoader = require("./loadTrip");
const firebase = require("./firebase");
const tripFormatter = require("./tripFormatter");
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
        // need to clear search results every time this is clicked
    });
}

// adds each place to trip when you click on it from the search results
function activateAddToTripButtons (){
    $("#search-results-container").click(function () {
        if (event.target.id == "addToTrip") {
            places.push(event.target.parentNode.id);
            domPrinter.printTripBuilder(event.target.parentNode); // moves the place (parentNodeof the button) over to 'your trip' div on the right
        }
    });
}

// right now save and publish do the same thing, but eventually save would save it locally and publish would stick it on the map
function activateSaveTripButton(){
    $("#save-trip-button").click(function () {
       createNewTrip();
    });
}

function activatePublishButton(){
    $("#publish-trip-button").click(function () {
        createNewTrip();
    });
}

// when you click on the view trip button on each trip card under 'view all trips', it hides the view all trips scene and shows the individual trip
function activateViewTripButton(){
    $(document).on("click", ".view-trip", function (){
        console.log("you want to view a trip!");
        $(".hidden").hide();
        let tripId = $(this).attr("id");
        let trip = firebase.getSingleTrip(tripId)
        .then(trip => {
            domPrinter.viewSingleTrip(trip);
        })
        .catch( err => {
            console.log("uh oh", err);
        });
        // singleTripLoader.loadTrip(tripId);
        
    });
}

//  event handler for remove from trip button 
//  removes from Dom-- tripBuilderView.js
//  removes from array-- tripBuilder.js

// PAGE LOAD EVENTS //

// loads the search map and geolocates to user's location
function makeSearchMap () {
     placesSearch.geoLocate();
 }

 // sets what the user sees when the page loads
 function showHomePage(){
     $(".hidden").hide();
     $(".browse-section").show(); 
 }

 function loadAllTrips(){
     firebase.getAllTrips()
        .then(allTrips => {
            let formattedTrips = tripFormatter.addTripID(allTrips);
            domPrinter.printAllTrips(formattedTrips);
         })
         .catch(err => {
             console.log("oops", err);
         });    
 }

 function createNewTrip(){
     let trip = tripFormatter.formatTrip();
     firebase.createNewTrip(trip)
         .then(trip => {
             loadAllTrips();
         })
         .catch(err => {
             console.log("oops", err);
         });  
 }


module.exports.activateEvents = function () {
    activateNavBar();
    activateSearchButton();
    activateViewTripButton();
    activateAddToTripButtons();
    activateSaveTripButton();
    activatePublishButton(); 
};

// sets what the viewer sees when the page first loads
module.exports.initializePage = function(){
    showHomePage();
    makeSearchMap();
    loadAllTrips();
};