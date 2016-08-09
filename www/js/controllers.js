angular.module('starter.controllers', [])

.controller('AboutController', function () {

})

.controller('BmiController', function($scope) {
  $scope.data = {};
  $scope.data.method = "metric"
  $scope.calculateBMI = function() {
   var person = new Person({
     weight: $scope.data.weight,
     height: $scope.data.height,
   });
   person.calculate_bmi($scope.data.method);
   $scope.person = person;
 };

});
