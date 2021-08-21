document.write("<hr/>")
var k = 2;
for (var i = 1; i <= 3; i++) {
    for (var j = 1; j <= k; j++) {
        document.write("&nbsp;&nbsp;&nbsp;")
    }
    for (var p = 1; p <= i; p++) {
        document.write(" * ")
    }
    k--
    document.write("<br/>")
}