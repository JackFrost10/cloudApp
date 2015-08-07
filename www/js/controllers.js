angular.module('starter.controllers', [])

.controller('MainCtrl', function($scope, $http) {
 $http.jsonp("http://api.wunderground.com/api/7e887ce754cbf34a/conditions/q/PH/Iloilo.json?callback=JSON_CALLBACK")
 .success(function(data) {
    console.log('Success', data);
    $scope.data = data;
    var x = data.current_observation;
    $scope.location = x.display_location.full;
    $scope.localTime = x.local_time_rfc822;
    $scope.weather = x.weather;
    $scope.temp = x.temperature_string;
    $scope.humi = x.relative_humidity;
    $scope.windSpeed = x.wind_kph;
    $scope.windGust = x.wind_gust_kph;
    $scope.comment = x.estimated.description;
    $scope.windStr = x.wind_string;
    $scope.icon = x.icon_url;
    // err.status will contain the status code
  })
});
