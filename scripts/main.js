'use strict';

const events = require("./controller.js");
const pageInitializer = require("./pageInitializer.js");

pageInitializer.initializePage();
pageInitializer.makeSearchMap();
events.activateEvents();
