function sum(x) {
    return function(y) {

        var z = x + y;
        return z;
    }

}
console.log(sum(2)(3))