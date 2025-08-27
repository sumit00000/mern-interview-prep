function sumofarr(arr) {
    var sum = 0;
    arr.forEach(function(value) {
        sum = sum + value;
    });
    return sum;
}

console.log(sumofarr([1,2,3]));
