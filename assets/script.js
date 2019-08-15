$(document).ready(function () {

$("#searchBtn1").hide();
$("#movieHeader").hide();
$("#movieInfoHeader").hide();
  // Movie API //

  $("#searchBtn").on("click", function (event) {
    $("#searchBtn1").show();
    $("#movieHeader").show();
$("#movieInfoHeader").show();

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
      tOne.addClass("animated fadeInRight delay-1s")
      movieDiv.append(tOne);

      var runtime = response.Runtime;
      var tTwo = $("<p>").text("Runtime: " + runtime);
      tTwo.addClass("animated fadeInRight delay-2s")
      movieDiv.append(tTwo);

      var actors = response.Actors;
      var tThree = $("<p>").text("Actors: " + actors);
      tThree.addClass("animated fadeInRight delay-3s")
      movieDiv.append(tThree);

      var imdbrating = response.imdbRating;
      var tFour = $("<p>").text("IMDB Rating: " + imdbrating);
      tFour.addClass("animated fadeInRight delay-4s")
      movieDiv.append(tFour);

      var imgURL = response.Poster;
      var poster = $("<img>").attr("src", imgURL);
      poster.addClass("moviePic");
      poster.addClass("animated flip delay-1s")
      imgDiv.append(poster);


    });

    $("#movieInfo").empty();
    $("#movieGif").empty();


  });

  // Cocktail API //

  $("#searchBtn1").on("click", function (event) {
    event.preventDefault();
    
    var drinks = $("#searchInput").val();
    var queryURL2 = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
    $.ajax({
      url: queryURL2,
      method: "GET"
    }).then(function (response) {

      var drinkDiv = $("#drinksInfo");
      var imgDiv = $("#drinksImg");

      // Drink Name //
      var drinkName = response.drinks[0]['strDrink'];
      var aZero = $("<p>").text(drinkName);
      aZero.addClass("drinkName");
      drinkDiv.append(aZero);

      // Image
      var drinkthumb = response.drinks[0]['strDrinkThumb'];
      var image2 = $("<img>").attr("src", drinkthumb);
      image2.addClass("drinkPic");
      image2.addClass("animated flip delay-1s")
      imgDiv.append(image2);

      // Ingredients 
      var ingredients1 = response.drinks[0]['strIngredient1'];
      var aOne = $("<p>").text(ingredients1);
      aOne.addClass("animated zoomInUp delay-1s")
      drinkDiv.append(aOne);

      var ingredients2 = response.drinks['strIngredient2'];
      var aTwo = $("<p>").text(ingredients2);
      aTwo.addClass("animated zoomInUp delay-2s")
      drinkDiv.append(aTwo);

      var ingredients3 = response.drinks[0]['strIngredient3'];
      var aThree = $("<p>").text(ingredients3);
      aThree.addClass("animated zoomInUp delay-3s")
      drinkDiv.append(aThree);

      var ingredients4 = response.drinks[0]['strIngredient4'];
      var aFour = $("<p>").text(ingredients4);
      aFour.addClass("animated zoomInUp delay-4s")
      drinkDiv.append(aFour);

      var instructions = response.drinks[0]['strInstructions'];
      var aFive = $("<p>").text(instructions);
      aFive.addClass("instructions")
      aFive.addClass("animated zoomInUp delay-5s")
      drinkDiv.append(aFive);
    });

    $("#drinksInfo").empty();
    $("#drinksImg").empty();
  
  }); 

  // Contact Form//

  $("#submitBtn").on("click", function(){      
    $("#contactForm").submit(); 
    alert("Thank you for your submission!");
  });


  $('.parallax').parallax();
});//document.ready curly end// 
