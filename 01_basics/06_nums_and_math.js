
const score = 800;

// console.log(score)



const balance = new Number(100)

// console.log(balance)

// console.log(balance.toString().length)

// console.log(balance.toFixed(2));
// console.log(balance.toFixed(3));
// console.log(balance.toFixed(4));


const otherNumber = 123.4555;

// console.log(otherNumber.toPrecision(3));


const hundreds = 10000000;

// console.log(hundreds.toLocaleString());
// console.log(hundreds.toLocaleString('en-IN'));



//************************* Maths **************************


// console.log(Math);


// console.log(Math.abs(-4));
// console.log(Math.round(444.555));
// console.log(Math.ceil(45.5))
// console.log(Math.floor(45.55))





console.log(Math.random());

console.log((Math.random() * 10) + 1);
console.log((Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);



const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // important

//Dice roll demo:

console.log(Math.floor(Math.random() * 6) + 1)