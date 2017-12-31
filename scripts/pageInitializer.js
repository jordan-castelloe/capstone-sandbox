'use strict';

const mapMaker = require("./placesSearch.js");

module.exports.initializePage = function() {
  $(".hidden").hide();
  $(".browse-section").show();
};

module.exports.makeSearchMap = function(){
    mapMaker.geoLocate();
};





