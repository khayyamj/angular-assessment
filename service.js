angular.module('assessment')
.service('mainService', function($http) {

    this.getData = function() {
        return $http({
            method: 'GET',
            url: 'http://practiceapi.devmounta.in/products'
        })
        .then(function(response) {
            console.log(response.data);
            return response.data;
        })
    }

})
