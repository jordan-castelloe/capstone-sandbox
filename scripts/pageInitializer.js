'use strict';

const mapMaker = require("./mapMaker.js");

module.exports.initializePage = function() {
  $(".hidden").hide();
  $(".browse-section").show();
};

module.exports.makeSearchMap = function(){
    mapMaker.geoLocate();
};

