angular.module('assessment')
.controller('mainCtrl', function($scope, mainService) {

    mainService.getData()
        .then(function(response) {
            $scope.shopData = response;
        })

})
