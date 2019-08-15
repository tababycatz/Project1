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
      drinkDiv.append(aZero);

      // Image
      var drinkthumb = response.drinks[0]['strDrinkThumb'];
      var image = $("<img>").attr("src", drinkthumb);
      image.addClass("drinkPic");
      imgDiv.append(image);
      // Ingredients 
      var ingredients1 = response.drinks[0]['strIngredient1'];
      var aOne = $("<p>").text(ingredients1);
      drinkDiv.append(aOne);

      var ingredients2 = response.drinks['strIngredient2'];
      var aTwo = $("<p>").text(ingredients2);
      drinkDiv.append(aTwo);

      var ingredients3 = response.drinks[0]['strIngredient3'];
      var aThree = $("<p>").text(ingredients3);
      drinkDiv.append(aThree);

      var ingredients4 = response.drinks[0]['strIngredient4'];
      var aFour = $("<p>").text(ingredients4);
      drinkDiv.append(afour);

      var instructions = response.drinks[0]['strInstructions'];
      var aFive = $("<p>").text(instructions);
      drinkDiv.append(aFive);
    });

    $("#drinksInfo").empty();
    $("#drinksImg").empty();
  
  }); 
  
  // Contact Form//

  $("#submitBtn").on("click", function(){      
    $("#contactForm").submit(); 
  });

});//document.ready curly end// 
