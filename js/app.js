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

    // By default movieResultsSuccess is false to hide movie cards and show the form
    $scope.movieResultsSuccess = false;

    $scope.submitSearch = function(event) {
        event.preventDefault();

        // Change movieResultsSuccess to true to show movie cards and hide form
        $scope.movieResultsSuccess = true;
    }

});