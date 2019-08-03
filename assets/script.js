var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php"
        $.ajax({
        url: queryURL,
        method: "GET"
        }).then(function(response) {
        console.log(response);
    });