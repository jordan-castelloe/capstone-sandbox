'use strict';

const eventHandler = require("./eventHandler.js");
const pageInitializer = require("./pageInitializer.js");

pageInitializer.initializePage();
pageInitializer.makeSearchMap();
eventHandler.activateEvents();

// AIzaSyCldS4fXbRAX8rHrJpgEGZvPggqYSR0EjI; places library api

// AIzaSyDEfJwa3LEU3awFOtWvICOozyOXGK2lkwI; javascript api