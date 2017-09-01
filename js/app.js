var app = angular.module("movieApp", ["ngRoute"]);

// Configure routing for the entire application
app.config(function($routeProvider) {
    $routeProvider
        .when("/movies", {
            templateUrl: "templates/movie-list.html",
            controller: "movieCtrl"
        })
        .otherwise({
            redirectTo: "/movies"
        });
});

// Main application controller
app.controller("movieCtrl", function($scope, $http) {

    $scope.submitSearch = function(event) {
        event.preventDefault();

        console.log($scope.movieQuery);
    }

});