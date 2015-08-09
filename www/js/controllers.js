angular.module('starter.controllers', [])

.controller('MainCtrl', function($scope, $http) {
 $http.jsonp("http://api.wunderground.com/api/7e887ce754cbf34a/forecast/q/PH/Iloilo.json?callback=JSON_CALLBACK")
 .success(function(data) {
    console.log('Success', data);
    $scope.data = data;
    var x = data.forecast;
    $scope.periods = data.forecast.txt_forecast.forecastday;
    $scope.date = data.forecast.txt_forecast.date;
    // err.status will contain the status code
  })
})

.controller('HomeCtrl', function($scope, $http) {
 $http.jsonp("http://api.wunderground.com/api/7e887ce754cbf34a/astronomy/q/PH/Iloilo.json?callback=JSON_CALLBACK")
 .success(function(data) {
    console.log('Success', data);
    $scope.data = data;
    $scope.moonPhase = data.moon_phase.phaseofMoon;
    $scope.currentTimeH = data.moon_phase.current_time.hour;
    $scope.currentTimeM = data.moon_phase.current_time.minute;
    $scope.sunriseHour = data.sun_phase.sunrise.hour;
    $scope.sunriseMin = data.sun_phase.sunrise.minute;
    $scope.sunsetHour = data.sun_phase.sunset.hour;
    $scope.sunsetMin = data.sun_phase.sunset.minute;
    // err.status will contain the status code
  })
});
