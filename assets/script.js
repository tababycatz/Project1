$(document).ready(function(){
    
    $('.parallax').parallax();
    
    // Movie API
    $('#searchInput').val('');
    M.textareaAutoResize($('#searchInput'));

    
    function displayMovie() {
        
        
       var movie = $(this).attr("data-name");
    var queryURL = "https://www.omdbapi.com/?t=" + movie + "&1c5dcd2a";
    
    //AJAX call//
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        
        // Creating a div to hold the movie
     var movieDiv = $("<div class='movie'>");
     
     // Storing the rating data
     var rating = response.Rated;
     
     // Creating an element to have the rating displayed
     var pOne = $("<p>").text("Rating: " + rating);
     
     // Displaying the rating
     movieInfo.append(pOne);
     
     // Storing the release year
     var released = response.Released;
     
     // Creating an element to hold the release year
     var pTwo = $("<p>").text("Released: " + released);

     // Storing the actors data
     var actors = response.Actors;
     
     // Creating an element to have the rating displayed
     var pOne = $("<p>").text("Rating: " + rating);
     
     // Retrieving the URL for the image
     var imgURL = response.Poster;
     
     // Creating an element to hold the image
     var image = $("<img>").attr("src", imgURL);

     // Appending the image
     movieGif.append(image);
     
    
    });
} //displayMovie function curly end//

function newCard() {

    // Deleting the movies prior to adding new movies
    // (this is necessary otherwise you will have repeat buttons)
    $("#movieDump").empty();

    // Looping through the array of movies
    for (var i = 0; i < movies.length; i++) {

      // Then dynamicaly generating buttons for each movie in the array
      // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
      var a = $("<div>");
      // Adding a class of movie-btn to our button
      a.addClass("movieInfo");
      // Adding a data-attribute
      a.attr("data-name", movies[i]);
      // Providing the initial button text
      a.text(movies[i]);
      // Adding the button to the buttons-view div
      $("#movieDump").append(a);
    }
  }; //newCard function curly end//


// Adding a click event listener to all elements with a class of "movie-btn"
$("#searchBtn").on("click", function(event){

});

}); //document.ready curly end// 




