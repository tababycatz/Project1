$(document).ready(function(){
    
    $('.parallax').parallax();
    
    // Movie API //

     // This .on("click") function will trigger the AJAX Call
     $("#searchBtn").on("click", function(event) {

        // event.preventDefault() can be used to prevent an event's default behavior.
        // Here, it prevents the submit button from trying to submit a form when clicked
        event.preventDefault();

        var movie = $("#searchInput").val();

        var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=1c5dcd2a";

        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {
          
            var movieDiv = $("#movieInfo");

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

            var posterDiv = $("movieGif");

            var posterimg = response.Poster;
            var imgpos = $("<img>").attr("src", posterimg);
            posterDiv.append(imgpos);


        });


      });

    
//     function displayMovie() {
        
//         // Creating a div to hold the movie
//      var movieDiv = $("<div class='movie'>");
     
//      // Storing the rating data
//      var rating = response.Rated;
     
//      // Creating an element to have the rating displayed
//      var pOne = $("<p>").text("Rating: " + rating);
     
//      // Displaying the rating
//      movieInfo.append(pOne);
     
//      // Storing the release year
//      var released = response.Released;
     
//      // Creating an element to hold the release year
//      var pTwo = $("<p>").text("Released: " + released);

//      // Storing the actors data
//      var actors = response.Actors;
     
//      // Creating an element to have the rating displayed
//      var pOne = $("<p>").text("Rating: " + rating);
     
//      // Retrieving the URL for the image
//      var imgURL = response.Poster;
     
//      // Creating an element to hold the image
//      var image = $("<img>").attr("src", imgURL);

//      // Appending the image
//      movieGif.append(image);
//     };
     
    
// //displayMovie function curly end//

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




