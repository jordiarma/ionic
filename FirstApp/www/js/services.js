angular.module('starter.services', [])

.factory('Ciutats', function($http) {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var ciutats = [];

  return {
    all: function() {
      return $http.get('http://api.openweathermap.org/data/2.5/find?lat=41.68&lon=1.94&cnt=10&APPID=3da25caa87ab728585fd73a5d2ad6cb7');
    },

    get: function(ciutatId) {
      return $http.get('http://api.openweathermap.org/data/2.5/weather?id='+ ciutatId + '&APPID = 3da25caa87ab728585fd73a5d2ad6cb7');
    }
  };
});
