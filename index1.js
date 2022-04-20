function exponent(num, n) {
    if(n === 0) 
     return 1;
    else
     return num * exponent(num, n-1);
}
console.log(exponent(6, 3));