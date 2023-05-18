function loadHTML(id) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById('target').innerHTML = xhr.responseText;
        }
    }
    let url = '../php/load_menu.php?id=' + id;
    xhr.open('GET', url, true);
    xhr.send(); //php 파일만들기
}