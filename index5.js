function mergeArray (arr1, arr2) {
    let arr = arr1.concat(arr2);
    let array = [];
    for (let i of arr) {
        if (array.indexOf(i) === -1) {
            array.push(i);
        }
    }
    return array;
}
let arr1 = [1, 2, 3];
let arr2 = [2, 30, 1];
console.log(mergeArray(arr1, arr2));