function sum (array) {
    return array.reduce(function(a, b){
        let result = Math.round(a + b);
        return result;
    },0);
}
let array = [15.5, 2.3, 1.1, 4.7];
console.log(sum(array));