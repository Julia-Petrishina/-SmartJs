window.addEventListener('load', function() {
    var circles = [];


    function createFlyer() {
        var quantity = parseInt(Math.random() * 10) + 10;

        for (var i = 0; i <= quantity; i++) {
            var container = document.querySelector("#container");
            var size = parseInt(Math.random() * (150 - 50 + 1)) + 50;
            var color = '#' + (parseInt(Math.random() * 256 * 256 * 256).toString(16));
            var left = parseInt(Math.random() * (container.offsetWidth - size) - 0 + 1);
            var top = parseInt(Math.random() * (container.offsetHeight - size) - 0 + 1);
            var container = document.querySelector('#container');
            var flyer = document.createElement('div');
            console.log(flyer)
            flyer.className = 'flyer';
            flyer.style.width = size + 'px';
            flyer.style.height = size + 'px';
            flyer.style.background = color;

            flyer.dataset.dx = parseInt(Math.random() * 20) + 2;
            flyer.dataset.dy = parseInt(Math.random() * 20) + 2;
            flyer.style.left = left + 'px';
            flyer.style.top = top + 'px';

            console.log(container)
            container.appendChild(flyer);
            circles.push(flyer);
        }
    };

    createFlyer();

    var container = document.querySelector(".container");

    for (var i = 0; i <= circles.length-1; i++) {

        var flyer = circles[i];
        console.log(circles[i]);
        var dx = flyer.dataset.dx;
        var dy = flyer.dataset.dy;

        function move(event) {
            flyer.style.left = (parseInt(flyer.style.left, 10) + dx) + 'px';
            flyer.style.top = (parseInt(flyer.style.top, 10) + dy) + 'px';

            var left = flyer.offsetLeft;
            var top = flyer.offsetTop;
            var right = left + flyer.offsetWidth;
            var bottom = top + flyer.offsetHeight;

            if (right > container.offsetWidth) {
                flyer.style.left = (container.offsetWidth - flyer.offsetWidth) + 'px';
                dx = -dx;
            }

            if (bottom > container.offsetHeight) {
                flyer.style.top = (container.offsetHeight - flyer.offsetWidth) + 'px';
                dy = -dy;
            }

            if (left < 0) {
                flyer.style.left = '0px';
                dx = -dx;
            }

            if (top < 0) {
                flyer.style.top = '0px';
                dy = -dy;
            }
        };
        setInterval(move, 50);
    }

});