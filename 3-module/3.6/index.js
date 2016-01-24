window.onload = function () {

    var request = new XMLHttpRequest();
    request.open('GET', 'http://jsonplaceholder.typicode.com/users');
    request.send();
    function doSmth(event) {
        if (request.readyState === request.DONE) {

            var jsonString = event.target.responseText;
            var object = JSON.parse(jsonString);
            console.log(object)

            for (var i = 0; i < object.length; i++) {
                var currentObject = object[i];
                var currentName = currentObject.name;
                var currentEmail = currentObject.email;

                var list = document.querySelector('.list');
                var link = document.createElement('a');

                link.innerHTML = currentName;
                link.setAttribute('href', 'mailto:' + currentEmail);
                link.onmouseover = function () {
                    link.setAttribute('title', currentName)
                }
                list.appendChild(link);
            }

            var date = new Date;
            console.log(event);
        }

    };

    request.addEventListener('readystatechange', doSmth);

    var btn = document.querySelector('.btn');
    btn.addEventListener('click', doSmth, false)
};