// const userEmail = "prince@gmail.com"
// const userEmail = ""
const userEmail = []

if (userEmail) {
   // console.log("Got user email")
}
else {
    console.log("Don't have user email")
}


//falsey values
//------------>false
//------------>0,-0, BigInt 0n, null,undefine,Nan

// tuthy values
//------------>"0"
//------------>"false"
//------------>" "
//------------>[]
//------------>{}
//------------>function(){}---empty function



// if (userEmail.length === 0) {
//     console.log("Array is empty")
// }


// const emptyObject = {}

// if (Object.keys(emptyObject).length === 0) {
//     console.log("Object is empty")
// }


// false == 0 true
// false == '' true
// 0 == '' true


// Nullish Coalescing Operator (??) : Null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15

console.log(val1)


// Terniary Operator

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80"): console.log("more than 80")