function getFact(n){
    var fact = 1
    for(var i=n; i>0; i--){
        fact = fact * i;
    }
    return fact;
}

console.log(getFact(5));


function getFact2(n){
    var fact = 1;
    for(var i=1; i<=n; i++){
        fact = fact * i;
    }
    return fact;
}

console.log(getFact2(3));
