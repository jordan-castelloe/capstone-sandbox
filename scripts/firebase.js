'use strict';

const dbURL = "https://nss-capstone-san-1514656893242.firebaseio.com/";


module.exports.createNewTrip = function (placesArray) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${dbURL}/trips.json`,
            method: "POST",
            data: JSON.stringify(placesArray)
        })
            .done(tripObject => {
                resolve(tripObject);
            })
            .fail(error => {
                console.log("uh-oh", error.statusText);
                reject(error);
            });
    });

};

// read
module.exports.getAllTrips = function () {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${dbURL}/trips.json`
        })
            .done(trips => {
                resolve(trips);
            })
            .fail(error => {
                console.log("uh-oh", error.statusText);
                reject(error);
            });
    });
};

module.exports.getSingleTrip = function (tripID) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${dbURL}/trips/${tripID}.json`
        })
            .done(singleTrip => {
                resolve(singleTrip);
            })
            .fail(error => {
                console.log("uh-oh", error.statusText);
                reject(error);
            });
    });
};

// update
module.exports.updateTrip = function (tripID, description) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${dbURL}/trips/${tripID}.json`,
            method: "PATCH",
            data: JSON.stringify({ description })
        })
            .done(data => {
                resolve(data);
            })
            .fail(error => {
                console.log("uh-oh", error.statusText);
                reject(error);
            });
    });

};

// delete

module.exports.deleteTrip = function (tripID) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${dbURL}/trips/${tripID}.json`,
            method: "DELETE"
        })
            .done(data => {
                resolve(data);
            })
            .fail(error => {
                console.log("uh-oh", error.statusText);
                reject(error);
            });
    });
};

