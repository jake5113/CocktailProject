function loadHTML(id) {
    let url = '../php/load_menu.php?id=' + id;
    fetch(url)
        .then(response => response.text())
        .then(html => {
            document.getElementById('target').innerHTML = html;
            var scripts = document.querySelectorAll("#target script")

            scripts.forEach(s => {
                var script = document.createElement('script')
                script.src = s.src
                document.head.appendChild(script)
            })
            menuNone();
        })
        .catch(error => {
            console.error('Error:', error);
        });

}


function menuAppear() {
    divElement.classList.replace('text-pageheader','text-homeimage')
}
function menuNone() {
    divElement.classList.replace('text-homeimage','text-pageheader')
}
//menu div위치를 전역변수로 만들기 위한 함수.
function defineMenu(){
    divElement = document.querySelector('.text-homeimage');
}



