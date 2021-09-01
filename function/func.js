document.getElementById("btn").addEventListener("click", function() {
    // var h = document.querySelector(".hh")
    //h.style.color = "green"
    this.previousElementSibling.style.color = "red"
    this.nextElementSibling.style.color = "blue"

    this.parentElement.nextElementSibling.children[2].style.color = "yellow"
        //this.className = "bold-btn"
        //this.classList.add("bold-btn")
    this.classList.remove("btn")
    console.log(this.className)
})