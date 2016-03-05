/**
 * Created by Nick on 03.03.2016.
 */

var app = angular.module('chat', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider, $httpProvider) {

    $routeProvider
        .otherwise({
            redirectTo: '/'
        });

    $locationProvider.html5Mode(true);
});