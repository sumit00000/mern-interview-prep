var arr = [11, 24, 36, 4, 5];

var arr2 = []
// without mutating means without changing origional array
arr.forEach(function(value){
    arr2.push(value);
})

arr2.pop()

console.log(arr);
console.log(arr2);