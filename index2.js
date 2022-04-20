function sum(array) {
    return array.reduce(function(a, b){
           return a + b;
           }, 0);
} 
let array = [1, 2, 3, 4, 5, 6];
console.log(sum(array));