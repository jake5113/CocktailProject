// Fetch API 예시
fetch('../res/json/cocktail_recipes.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(jsonData) {
    
  })
  .catch(function(error) {
    console.log(error);
  });
