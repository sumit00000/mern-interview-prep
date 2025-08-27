// by using .sort()
let nums = [5, 2, 9, 1];
nums.sort((a, b) => a-b);
console.log(nums);

// By using loops, bubble sort (find largest and take it in right side)
// step 1 taking one larghest number to right
var arr = [11, 24, 36, 4, 5];
for( var i=0; i<arr.length-1; i++){
    if(arr[i]>arr[i + 1]){
        var temp = arr[i];
        arr[i] = arr[i +1];
        arr[i +1] = temp;
    }
}
console.log(arr);

// step 2 all in ass
for(var j=0; j<arr.length; j++){
    for(var i=0; i<arr.length-1; i++){
        if(arr[i]>arr[i+1]){
            var temp = arr[i];
            arr[i] = arr[i +1];
            arr[i +1] = temp;
        }
    }
}
console.log(arr);


// optimize version
for(var j=0; j<arr.length-1; j++){
    for(var i=0; i<arr.length-j-1; i++){
        if(arr[i]>arr[i+1]){
            var temp = arr[i];
            arr[i] = arr[i +1];
            arr[i +1] = temp;
        }
    }
}
console.log(arr);

// this i sknown as bubble sorting 
// its opposite is know as selection sorting