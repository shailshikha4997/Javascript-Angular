 setInterval(function bg_change() {
     var randomColor = Math.ceil(Math.random() * 12548763).toString(16);
     document.body.style.backgroundColor = "#" + randomColor;

 }, 3000);
 bg_change();