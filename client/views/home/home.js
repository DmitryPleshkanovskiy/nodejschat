/**
 * Created by Nick on 05.03.2016.
 */

'use strict';

angular.module('chat')
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/home/home.html',
                controller: 'homeCtrl'
            });
    });