// String
const name = "Prince "
const repoCount = 50;

// console.log(name + repoCount + " value"); Don't follow this way 

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)


const groupMember = new String('Prince-kumar');

console.log(groupMember);
console.log(typeof groupMember);

console.log(groupMember[0])

console.log(groupMember.__proto__);

console.log(groupMember.length)
console.log(groupMember.toUpperCase())
console.log(groupMember.charAt(6));
console.log(groupMember.indexOf('k'));



const newString = groupMember.substring(0, 6);

console.log(newString)

const anotherString = groupMember.slice(-3, 4)
console.log(anotherString)


const newStringOne = "           Prince     ";

console.log(newStringOne);
console.log(newStringOne.trim);


const url = "https://prince.com//prince%20kapar";

console.log(url.replace('%20', '-'));

console.log(url.includes('prince'))