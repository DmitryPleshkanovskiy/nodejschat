/**
 * Created by Nick on 05.03.2016.
 */

'use strict';

angular.module('chat')
    .config(function ($routeProvider) {
        $routeProvider
            .when('/login', {
                templateUrl: 'views/login/login.html',
                controller: 'loginCtrl'
            });
    });