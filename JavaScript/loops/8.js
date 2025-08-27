// Method – Swapping in-place
// Modifies the original array directly (in-place).
// Does not use any extra space or new array.
// Faster and more memory-efficient
var arr = [1, 2, 3, 4, 5]
for(var i=0; i<arr.length/2; i++){
    var temp = arr[i];
    arr[i] = arr[arr.length - 1 -i];
    arr[arr.length -1 -i] = temp;
}
console.log(arr);




// Method – Using a new array
// Creates a new array (reversed) and fills it in reverse order.
// Original array (arr) remains unchanged.
const arrr = [1, 2, 3, 4, 5]
const reversed = []
for(let i = arrr.length - 1; i>=0; i--){
    reversed.push(arrr[i]);
}
console.log(reversed);