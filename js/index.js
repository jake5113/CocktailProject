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
        })
        .catch(error => {
            console.error('Error:', error);
        });

}


