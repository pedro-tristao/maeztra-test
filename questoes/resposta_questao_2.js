let arr = [4, 5, 44, 98, 4, 5, 6, 7];
let duplicates = [];
 
arr.forEach(function (value, index, array) {
    if (array.indexOf(value, index + 1) !== -1
        && duplicates.indexOf(value) === -1) {
        duplicates.push(value);
    }
});
 
console.log('Valores duplicados:', duplicates);