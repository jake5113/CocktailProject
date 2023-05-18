// Fetch API 예시
fetch('../res/json/cocktail_recipes.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonData) {

  })
  .catch(function (error) {
    console.log(error);
  });


window.onload = function () {
  showList();
}
function showList() {
  for (var index = 0; index < 10; index++) {

    document.getElementById("showList").innerHTML =
      '<div class="col mb-5">'
      + ' <div class="card h-100">'
      + '     <!-- Product image-->'
      + '     <img class="card-img-top" src="https://t1.daumcdn.net/cfile/tistory/995DAE425A503C751E"'
      + '         alt="..." />'
      + '         <!-- Product details-->'
      + '           <div class="card-body p-4">'
      + '             <div class="text-center">'
      + '             <!-- Product name-->'
      + '             <h5 class="fw-bolder">러스티 네일 (Rusty Nail)</h5>'
      + '             <!-- Product price-->'
      + '             <h5 class="text-gradient">재료</h5>'
      + '             <li>스카치 위스키 1oz</li>'
      + '             <li>드람부이 0.5oz</li>'
      + '             <h5 class="text-gradient">기법</h5>'
      + '             <p>직접 혼합하기(Build)</p>'
      + '             <h5 class="text-gradient">글라스</h5>'
      + '             <p>올드 패션드 글라스</p>'
      + '             <h5 class="text-gradient">장식</h5>'
      + '             <p>-</p>'
      + '         </div>'
      + '     </div>'
      + ' </div>'
      + '</div>'
  }
}
