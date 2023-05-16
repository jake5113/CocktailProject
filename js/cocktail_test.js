var clickedtestEl = document.getElementsByClassName('')

// 1차 시험 내용
function test1Content() {
    var test1 = document.getElementById('test1');


    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4 && xhr.status == 200) {
            var e = document.getElementById('test_content');
            e.innerHTML = xhr.responseText;
        }
    }

    xhr.open('GET', './cocktail_test_test1.php', true);
    xhr.send();
}

// 2차 시험 내용
function test1Content() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4 && xhr.status == 200) {
            var e = document.getElementById('test_content');
            e.innerHTML = xhr.responseText;
        }
    }
    
    xhr.open('GET', './cocktail_test_test2.php', true);
    xhr.send();
}

// 3차 시험 내용
function test1Content() {
    var url = "./cocktail_test_test3.php";

    fetch(url).then(function(response){return response.text();})
    .then(function(responseText){
        document.getElementById('test_content').innerHTML = responseText;
    });
}

// 4차 시험 내용
function test1Content() {
    fetch("./cocktail_test_test4.php")
    .then(function(response){return response.text()})
    .then(function(responseText){
        document.getElementById('test_content').innerHTML = responseText;
    });
}