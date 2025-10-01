var timestart = new Date().getTime();
var circle = document.getElementById('circle');
var showTime = document.getElementById('time');

function showCircle() {
    Circle.style.display = 'blocl';
    Circle.style.top = Math.random() * 500 + 'px';
    Circle.style.left = Math.random() * 900 + 'px';
    Circle.style.backgroundColor = randomColor();
    timestart = new Date().getTime();

}
showCircle();

Circle.onclick = function() {
    Circle.style.display = 'none';
    setTimeout(showCircle, 1000);
    var timeEnd = new Date().getTime();
    var time = (timeEnd - timestart) / 1000;
    showTime.innerHTML = time + ' s';

}

function randomColor() {
    var s = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += s[Math.floor(Math.random() * 16)];
    }
    return color;
}