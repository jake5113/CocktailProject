window.onload = function() {
    // 컴퓨터를 켰는데 굳이 모바일 화면으로 변경해서 볼 이유가 없으므로..
    // 처음 화면이 로드될 때 화면의 크기를 판단하여 PC화면으로 보이게 할지,
    // 모바일 화면으로 보이게할 지 결정한다.
    var mql = window.matchMedia("screen and (max-width:480px)");
    if(mql.matches) {
        document.getElementById('pc_screen').style.display = 'none';
        document.getElementById('mobile_screen').style.display = 'block';
        test3Content();
    }
};

// 반응형 웹으로 구현
window.onresize = function() {
    var mql = window.matchMedia("screen and (max-width:480px)");
    if(mql.matches) {
        document.getElementById('pc_screen').style.display = 'none';
        document.getElementById('mobile_screen').style.display = 'block';
        test3Content();
    } else {
        document.getElementById('pc_screen').style.display = 'block';
        document.getElementById('mobile_screen').style.display = 'none';
    }
}


// 1차 시험 내용
document.getElementById('test').addEventListener('click', function(){
    this.classList.add('active');
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

    xhr.open('GET', './php/cocktail_certificate_exam1.php', true);
    xhr.send();
});

// 2차 시험 내용
document.getElementById('test2').addEventListener('click', function(){
    this.classList.add('active');
    document.getElementById('test1').classList.remove('active');
    document.getElementById('test3').classList.remove('active');
    document.getElementById('test4').classList.remove('active');

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4 && xhr.status == 200) {
            var e = document.getElementById('test_content');
            e.innerHTML = xhr.responseText;
        }
    }
    
    xhr.open('GET', './php/cocktail_certificate_exam2.php', true);
    xhr.send();
});

// 3차 시험 내용
document.getElementById('test3').addEventListener('click', function(){
    this.classList.add('active');
    document.getElementById('test1').classList.remove('active');
    document.getElementById('test2').classList.remove('active');
    document.getElementById('test4').classList.remove('active');
    
    var url = "./php/cocktail_certificate_exam3.php";
    fetch(url).then(function(response){return response.text();})
    .then(function(responseText){
        document.getElementById('test_content').innerHTML = responseText;
    });
});

// 4차 시험 내용
document.getElementById('test4').addEventListener('click', function(){
    this.classList.add('active');
    document.getElementById('test1').classList.remove('active');
    document.getElementById('test2').classList.remove('active');
    document.getElementById('test3').classList.remove('active');

    fetch("./php/cocktail_certificate_exam4.php")
    .then(function(response){return response.text()})
    .then(function(responseText){
        document.getElementById('test_content').innerHTML = responseText;
    });
});