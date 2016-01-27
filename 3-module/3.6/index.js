window.onload = function () {


    function doSmth(event) {

        var request = new XMLHttpRequest();
        request.open('GET', 'http://jsonplaceholder.typicode.com/users');
        request.send();

        request.onreadystatechange = function(){
            if (request.readyState === request.DONE) {

                var jsonString = request.responseText;
                var object = JSON.parse(jsonString);

                for (var i = 0; i < object.length; i++) {
                    var currentObject = object[i];
                    var currentName = currentObject.name;
                    var currentEmail = currentObject.email;


                    var list = document.querySelector('.list');
                    var link = document.createElement('a');

                    link.innerHTML = currentName;
                    link.setAttribute('href', 'mailto:' + currentEmail);
                    link.onmouseover = function () {
                        link.setAttribute('title', currentName);
                    };
                    list.appendChild(link);
                }

            }
        }
    };

    return doSmth();

    var btn = document.querySelector('.btn');
    btn.addEventListener('click', function(){
        console.log('ytwreyef')
    }, true);

};