function palindrom(str) {

    var msg = ""


    var n1 = string.split("");

    var n2 = n1.reverse();

    var n3 = n2.join("");

    if (string = n3) {
        msg = "It is a palindrom string"
    } else {
        msg = "It is not a palindrom string"
    }

    var string = JSON.parse(document.getElementById("txt").value)
    var value = palindrom(string);

    document.getElementById("msg").innerHTML = msg

}


document.getElementsById("btn").addEventListener("click", palindrom)