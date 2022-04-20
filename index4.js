function filterArray (array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        let item = array[i];
        if (item) {
           result.push(item);
        }
    }
    return result; 
}
let array = [NaN, 0, false, "", undefined, null, 1, 2, 3];
console.log(filterArray(array));