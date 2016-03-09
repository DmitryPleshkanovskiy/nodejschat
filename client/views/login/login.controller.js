/**
 * Created by Nick on 05.03.2016.
 */

angular.module("chat")
    .controller('loginCtrl', ['$scope', function ($scope) {
        $scope.isError = false;
        $scope.showError = function(message) {
            $scope.isError = true;
            $scope.errorMessage = message;
        };
        $scope.login = function () {
            if (isValidEmail($scope.email) && isValidPass($scope.password)) {
                //login
            } else {
                $scope.showError("Wrong pass or email");
            }
            console.log($scope.email);
            console.log($scope.password);
        };
    }]);

function isValidEmail(email) {
    return false;
}

function isValidPass(pass) {
    return true;
}