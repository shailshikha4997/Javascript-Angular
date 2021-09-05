var all = document.getElementsByTagName("div")
for (var i = 0; i < all.length; i++) {
    console.log(all)

    all[i].onclick = function() {
        event.stopPropagation()
            // console.log(this)
        this.style.background = GeneColor()
    }
}

function GeneColor() {
    var code = "0123456789ABCDEF"
    var color = "#"
    for (var i = 0; i <= 5; i++) {
        color += code.charAt(Math.floor(Math.random() * 16))
    }
    return color;
}