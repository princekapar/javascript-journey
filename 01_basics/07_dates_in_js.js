/// Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toTimeString());
console.log(myDate.toUTCString());
console.log(typeof myDate)


// let myCreateDate = new Date(2023, 0, 23);
// let myCreateDate = new Date(2023, 0, 23,5,2);
// let myCreateDate = new Date("2023-01-14");
let myCreateDate = new Date("01-14-2025");
// console.log(myCreateDate.toLocaleString())


let myTimeStamp = Date.now()

// console.log(myTimeStamp)
// console.log(myCreateDate.getTime())
// console.log(Math.floor(Date.now() / 1000));


let newDate = new Date();
console.log(newDate.getMonth())
console.log(newDate.getDate())


   // `${newDate.getDay()}` //and the time


newDate.toLocaleString('default', {
        weekday: "long"
})
    
