$(document).ready(function(){
    
    $('.parallax').parallax();

    // var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    //     $.ajax({
    //     url: queryURL,
    //     method: "GET"
    //     }).then(function(response) {
    //     console.log(response);
    // });
    
    // Movie API
    var queryURL = "https://www.omdbapi.com/?t=" + movie + "&1c5dcd2a"
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

     // Retrieving the URL for the image
     var imgURL = response.Poster;

     // Creating an element to hold the image
     var image = $("<img>").attr("src", imgURL);

     // Appending the image
     movieGif.append(image);

     // Putting the entire movie above the previous movies
    //  $("#movies-view").prepend(movieDiv);
   });

 }   
    });


    
});