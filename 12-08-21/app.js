function factorial() {
    var fact, n, a;
    n = document.getElementById("num").value;
    fact = 1;
    a = n;

    while (a > 1) {

        fact = fact * a;
        a = a - 1;


    }
    document.write(n + " factorial is " + "= " + fact)
    document.getElementById("number").innerHTML = number
}
document.getElementById("btn").addEventListener("click", factorial())