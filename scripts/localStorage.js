'use strict';

module.exports.add = function(name, data){
  localStorage.setItem(name, JSON.stringify(data));
};

module.exports.get = function (name){
    let data= JSON.parse(localStorage.getItem(name));
    return data;
};