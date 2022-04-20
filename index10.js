function findDelete (str, the) {
    let array = str.split(" ");
    return array.filter(function(the){
        for(let i in array){
            if(array[i] === the){
                delete array[i];
            }
        }
        return array;
    });
}
let str = prompt("enter your favorite sentence:");
console.log(findDelete(str, 'the'));