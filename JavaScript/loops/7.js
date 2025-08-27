var hold = 1;
for( var i=1; i<4; i++){
    var str = "";
    for(var j=1; j<4; j++){
        str += `${hold}`;
        hold++;
    }
    console.log(str);  
}


for( var i=1; i<4; i++){
    var str = "";
    for(var j=1; j<4; j++){
        str += `${j}`;
    }
    console.log(str);  
}