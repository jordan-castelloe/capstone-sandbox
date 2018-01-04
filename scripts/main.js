'use strict';

const controller = require("./controller.js");
const pageInitializer = require("./pageInitializer.js");

pageInitializer.initializePage();
pageInitializer.makeSearchMap();
controller.activateEvents();
