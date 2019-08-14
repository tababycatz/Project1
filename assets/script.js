$(document).ready(function(){
    
    $('.parallax').parallax();
    
    // Movie API //

     $("#searchBtn").on("click", function(event) {

        event.preventDefault();

        var movie = $("#searchInput").val();

        var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=1c5dcd2a";

        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {
          
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

// function newCard() {

//     // Deleting the movies prior to adding new movies
//     // (this is necessary otherwise you will have repeat buttons)
//     $("#movieDump").empty();

//     // Looping through the array of movies
//     for (var i = 0; i < movies.length; i++) {

//       // Then dynamicaly generating buttons for each movie in the array
//       // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
//       var a = $("<div>");
//       // Adding a class of movie-btn to our button
//       a.addClass("movieInfo");
//       // Adding a data-attribute
//       a.attr("data-name", movies[i]);
//       // Providing the initial button text
//       a.text(movies[i]);
//       // Adding the button to the buttons-view div
//       $("#movieDump").append(a);
//     }
//   }; //newCard function curly end//


// // Adding a click event listener to all elements with a class of "movie-btn"
// $("#searchBtn").on("click", function(event){

// });

}); //document.ready curly end// 




