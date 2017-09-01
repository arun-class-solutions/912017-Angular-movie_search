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

        // Make HTTP request to the API using $scope.movieQuery as your search
        $http
        .get("http://omdbapi.com/?apikey=" + apikey + "&s=" + $scope.movieQuery)
        .then(function(movies) {
            // Step 1: Loop through movies.data.Search
            // Step 2: Make HTTP request to retrieve movie details via imdbID
            // Step 3: Push results to an array that is bound to the scope

            $scope.movies = [];

            movies.data.Search.forEach(function(record) {
                $http
                .get("http://omdbapi.com/?apikey=" + apikey + "&i=" + record.imdbID)
                .then(function(movieDetails) {
                    // Add data from the API to the $scope.movies array
                    $scope.movies.push(movieDetails.data);
                }, function(err) {
                    console.log(err);
                });
            });
        }, function(err) {
            console.log(err);
        });

        // Change movieResultsSuccess to true to show movie cards and hide form
        $scope.movieResultsSuccess = true;
    }

});