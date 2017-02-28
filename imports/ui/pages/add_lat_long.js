var request = require("request");
var rp = require('request-promise');
var Promise = require('promise');
fs = require('fs');
var data = require('./bigdata.json');

var url2 = "https://maps.googleapis.com/maps/api/geocode/json?address=Toledo&key=AIzaSyCvdeOb0v9VMFSpsRDbX8xVJpON-eMB-DM"
url2 = "http://developer.cumtd.com/api/v2.2/json/GetStop?" +
    "key=d99803c970a04223998cabd90a741633" +
    "&stop_id=it";

// First, checks if it isn't implemented yet.

if (!String.prototype.format) {
  String.prototype.format = function() {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function(match, number) {
      return typeof args[number] != 'undefined'
        ? args[number]
        : match
      ;
    });
  };
}
var ApiDomain = "https://maps.googleapis.com/maps/api/geocode/json?address=";
var ApiKey = "&key=AIzaSyCvdeOb0v9VMFSpsRDbX8xVJpON-eMB-DM";
function addLatLngEach(curP) {
  var fullAddress = "{0} {2}".format(curP.address, curP.city, curP.state, curP.zip);
  var url = ApiDomain + fullAddress + ApiKey;
  rp({
      url: url,
      json: true
  }, function (error, response, body) {
      if (!error && response.statusCode === 200) {
          // console.log(body) // Print the json response
          if (body.status === "OK") {
            location = body.results[0].geometry.location;
            curP.lat = location.lat;
            curP.lng = location.lng;
          } else {
            console.log("NOOOooooooo");
          }

      }
  }).then(function(){
    fs.writeFile('bigdatanew.json', JSON.stringify(data));
  });
}
// console.log(data.length);
function addLatLng() {
  for (var i = 0; i < data.length; i++) {
    addLatLngEach(data[i]);
    // console.log(fullAddress);
  }
}
addLatLng();
// fs.writeFile('dataWithLatLng.json', JSON.stringify(data), 'utf8');
