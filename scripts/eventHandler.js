'use strict';

const placesSearch = require("./searchPlaces.js");

module.exports.activateEvents = function(){

     $(".navbar").click(function() {
       $(".hidden").hide();
       let currentButtonName = event.target.id;
       $(`#${currentButtonName}-section`).show();
     });

     $("#search-button").click(function(){
        let searchString = $(".search-bar").val();
        console.log("this is the search string you're passing in", searchString);
        // placesSearch.searchPlaces(searchString);
     });
};

