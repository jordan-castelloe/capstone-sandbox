'use strict';


module.exports.searchPlaces = function(searchString, location, targetMap){
    console.log("this should be the search string again, but from inside the search function", searchString);
    let searchRequest = {
        query: searchString,
        location: location,
        radius: 50000
    };
    let placesService = new google.maps.places.PlacesService(targetMap);
    placesService.textSearch(searchRequest, callback);
};

function callback(results, status) {
    console.log("callback function called!");
    console.log(results);
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (let i = 0; i < results.length; i++) {
        let place = results[i];
        console.log(place);
        }
    }
}



