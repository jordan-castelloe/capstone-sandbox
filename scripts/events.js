'use strict';

const placesSearch = require("./placesSearch");
const domPrinter = require("./domPrinter");
const singleTripMap = require("./singleTripMap");
const firebase = require("./firebase");
const tripFormatter = require("./tripFormatter");

let locations = [];

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

// this needs to get called AFTER the search results print 
// right now it gets called in placesSearch because it's set up in a callback
module.exports.makeSearchResultsDraggable = function(){
    $(".search-result").draggable({
        containment: '#create-section',
        cursor: 'move',
        snap: '#my-trip'
    });
    $("#my-trip").droppable({
        drop: addToTrip
    });
};

// called when location card is dropped in the my-trip div
// pushes place ID into internal locations array
// when the user clicks save, it will add that locations array onto their trip object
function addToTrip(event, ui){
    let locationCard = ui.draggable;
    locations.push(locationCard.attr('id'));
}


// right now save and publish do the same thing, but eventually save would save it locally and publish would stick it on the map
function activateSaveTripButton(){
    $("#save-trip-button").click(function (){
        createNewTrip(locations);
    });
}

function activatePublishButton(){
    $("#publish-trip-button").click(function () {
        createNewTrip(locations);
    });
}

// when you click on the view trip button on each trip card under 'view all trips', it hides the view all trips scene and shows the individual trip
function activateViewTripButton(){
    $(document).on("click", ".view-trip", function (){
        let tripId = $(this).attr("id");
        let trip = firebase.getSingleTrip(tripId)
        .then(trip => {
            domPrinter.viewSingleTrip(trip);
            singleTripMap.loadMap(trip);
        })
        .catch( err => {
            console.log("uh oh", err);
        }); 
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

 function createNewTrip(locationsArray){
     let trip = tripFormatter.formatTrip(locationsArray);
     firebase.createNewTrip(trip)
         .then(trip => {
             loadAllTrips();
             locations = []; // clear locations array when you make a new trip
         })
         .catch(err => {
             console.log("oops", err);
         });  
 }


module.exports.activateEvents = function () {
    activateNavBar();
    activateSearchButton();
    activateViewTripButton();
    activateSaveTripButton();
    activatePublishButton(); 
};

// sets what the viewer sees when the page first loads
module.exports.initializePage = function(){
    showHomePage();
    makeSearchMap();
    loadAllTrips();
};
