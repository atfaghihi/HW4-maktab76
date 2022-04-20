function curDay (char) {
    const date = new Date();
    let result = date.getDate() + char + date.getMonth() + char + date.getFullYear();
    return result;
}
console.log(curDay('/'));
console.log(curDay('-'));