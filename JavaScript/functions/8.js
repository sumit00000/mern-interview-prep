function larNum(arr) {
    var max = 0;
    for(var i=1; i<arr.length; i++){
        if(arr[i]>arr[max]){
            max=i;
        }
    }
    return arr[max];
}

console.log(larNum([1,7,9,,6,5,3]));
