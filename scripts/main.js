'use strict';

const events = require("./events.js");

events.initializePage();
events.activateEvents();

$(init);

function init() {
    $('#draggable').draggable();
}

