window.onload = function() {
    test3Content();
};

// 1차 시험 내용
function test1Content() {
    document.getElementById('test1').classList.add('active');
    document.getElementById('test2').classList.remove('active');
    document.getElementById('test3').classList.remove('active');
    document.getElementById('test4').classList.remove('active');

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
function test2Content() {
    document.getElementById('test1').classList.remove('active');
    document.getElementById('test2').classList.add('active');
    document.getElementById('test3').classList.remove('active');
    document.getElementById('test4').classList.remove('active');

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
function test3Content() {
    document.getElementById('test1').classList.remove('active');
    document.getElementById('test2').classList.remove('active');
    document.getElementById('test3').classList.add('active');
    document.getElementById('test4').classList.remove('active');
    
    var url = "./cocktail_test_test3.php";
    fetch(url).then(function(response){return response.text();})
    .then(function(responseText){
        document.getElementById('test_content').innerHTML = responseText;
    });
}

// 4차 시험 내용
function test4Content() {
    document.getElementById('test1').classList.remove('active');
    document.getElementById('test2').classList.remove('active');
    document.getElementById('test3').classList.remove('active');
    document.getElementById('test4').classList.add('active');

    fetch("./cocktail_test_test4.php")
    .then(function(response){return response.text()})
    .then(function(responseText){
        document.getElementById('test_content').innerHTML = responseText;
    });
}