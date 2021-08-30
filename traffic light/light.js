function myFun() {
    var green = document.getElementsByClassName("green")[0];
    var red = document.getElementsByClassName("red")[0];
    var yellow = document.getElementsByClassName("yellow")[0];

    green.style.opacity = 1;
    setTimeout(function() {
        green.style.opacity = .1;
        red.style.opacity = .1;
        yellow.style.opacity = 1;
    }, 3000);

    setTimeout(function() {
        green.style.opacity = .1;
        red.style.opacity = 1;
        yellow.style.opacity = .1;
    }, 5000);

    setTimeout(function() {
        green.style.opacity = .1;
        red.style.opacity = .1;
        yellow.style.opacity = 1;
    }, 3000);

    setTimeout(function() {
        green.style.opacity = 1;
        red.style.opacity = .1;
        yellow.style.opacity = .1;
    }, 5000);
}

var timer = setInterval(function() {
    myFun()
}, 2000);