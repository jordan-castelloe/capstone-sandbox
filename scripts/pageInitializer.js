'use strict';

const placesSearch= require("./placesSearchModel.js");

// decides what's going to show when you first load the page
module.exports.initializePage = function() {
  $(".hidden").hide();
  $(".browse-section").show();
};

// loads the search map and geolocates to user's location
module.exports.makeSearchMap = function(){
    placesSearch.geoLocate();
};





