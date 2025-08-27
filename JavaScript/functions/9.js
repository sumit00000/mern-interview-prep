function kebab(str) {
    return str.split(' ').join('-');
}

console.log(kebab("hey kaise ho"));


// by using replace
function kebab2(str) {
    return str.replaceAll(' ', '-');
}
console.log(kebab2("hey kaise ho"));
