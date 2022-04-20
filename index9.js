function protectEmail (str) {
    let result = str.slice(0, 4);
    let email = result + "..." + str.slice(-10);
    return email;
}
let str = prompt("enter your email:");
console.log(protectEmail(str));