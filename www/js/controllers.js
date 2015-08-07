angular.module('starter.controllers', [])

.controller('MainCtrl', function($scope, $http) {
 $http.jsonp("http://api.wunderground.com/api/7e887ce754cbf34a/forecast/q/PH/Iloilo.json?callback=JSON_CALLBACK")
 .success(function(data) {
    console.log('Success', data);
    $scope.data = data;
    var x = data.forecast;
    $scope.periods = data.forecast.txt_forecast.forecastday;
    // err.status will contain the status code
  })
});
