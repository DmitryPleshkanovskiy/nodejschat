/**
 * Created by Nick on 05.03.2016.
 */

angular.module("chat")
    .controller('loginCtrl', ['$scope', function ($scope) {
        $scope.isError = false;
        $scope.showError = function(message) {
            $scope.isError = true;
            $scope.errorMessage = 'Error ' + message;
        };
        $scope.login = function () {
            $scope.showError("invalid email");
            console.log($scope.email);
            console.log($scope.password);
        };
    }]);