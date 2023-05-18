window.onload = function () {
  showList();
}

function showList() {
  // Fetch API 예시
  fetch('../res/json/cocktail_recipes.json')
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonData) {
      var recipe = jsonData.칵테일

      for (let i = 0; i < recipe.length; i++) {
        document.getElementById("showList").innerHTML +=
          '<div class="col mb-5">'
          + '<div class="card h-100">'
          + '<!-- Product image-->'
          + '<img class="card-img-top" src='
          + Object.values(recipe[i])[1]
          + 'alt="사진 없음" />'
          + '<!-- Product details-->'
          + '<div class="card-body p-4">'
          + '<div class="text-center">'
          + '<!-- Product name-->'
          + '<h5 class="fw-bolder">'
          + recipe[i].이름
          + '</h5>'
          + '<!-- Product price-->'
          + '<h5 class="text-gradient">재료</h5>'
          + gredient(recipe[i].재료)
          + '<h5 class="text-gradient">기법</h5>'
          + '<p>' 
          + recipe[i].기법
          + '</p>'
          + '<h5 class="text-gradient">글라스</h5>'
          + '<p>' 
          + recipe[i].글라스
          + '</p>'
          + '<h5 class="text-gradient">장식</h5>'
          + '<p>' 
          + recipe[i].장식 
          + '</p>'
          + '</div>'
          + '</div>'
          + '</div>'
          + '</div>'
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}

function gredient(object){
  var sentences = ''
  for (let index = 0; index < Object.keys(object).length; index++) {
    sentences += '<li>'+Object.keys(object)[index]+ ' ' + Object.values(object)[index] +'</li>'
  }
  return sentences
}
