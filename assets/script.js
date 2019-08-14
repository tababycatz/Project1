$(document).ready(function () {

    $('.parallax').parallax();

    // Movie API //

    $("#searchBtn").on("click", function (event) {

        event.preventDefault();

        var movie = $("#searchInput").val();

        var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=1c5dcd2a";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            var movieDiv = $("#movieInfo");
            var imgDiv = $("#movieGif");

            var rating = response.Rated;
            var tOne = $("<p>").text("Rating: " + rating);
            movieDiv.append(tOne);

            var runtime = response.Runtime;
            var tTwo = $("<p>").text("Runtime: " + runtime);
            movieDiv.append(tTwo);

            var actors = response.Actors;
            var tThree = $("<p>").text("Actors: " + actors);
            movieDiv.append(tThree);

            var imdbrating = response.imdbRating;
            var tFour = $("<p>").text("IMDB Rating: " + imdbrating);
            movieDiv.append(tFour);

            var imgURL = response.Poster;
            var image = $("<img>").attr("src", imgURL);
            imgDiv.append(image);

        });

        $("#movieInfo").empty();
        $("#movieGif").empty();

    });

    // Cocktail API //
    
    $("#searchBtn").on("click", function (event) {

        event.preventDefault();

       var queryURLONE = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

        $.ajax({
            url: queryURLONE,
            method: "GET"
        }).then(function (response) {

            $("#drinkInfo").text(JSON.stringify(response));
            console.log(response)
    
        });

    

    });

    // Contact Form //



}); //document.ready curly end// 




