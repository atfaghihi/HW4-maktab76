function monthName (newDate) {
    let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let result = newDate.getMonth();
    return month[result];
}
console.log(monthName(new Date("10/11/2009")));
console.log(monthName(new Date("11/13/2014")));