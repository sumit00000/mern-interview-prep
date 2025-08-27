function checker(str, char){
    return str.startsWith(char);
}

console.log(checker("sumit", "sum"));
console.log(checker("sumit", "SUM"));


// if u wamnna check on lower case
function checker2(str, char){
    return str.toLowerCase().startsWith(char.toLowerCase());
}

console.log(checker2("sumit", "SUM"));
