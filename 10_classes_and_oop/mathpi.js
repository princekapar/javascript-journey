const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descripter)




const chai = {
    name: 'ginger cahi',
    price: 230,
    isAvailable: true,

    Orderchai: function () {
        console.log("code fat gaya")
    }
}


console.log(Object.getOwnPropertyDescriptor(chai, 'name'))

Object.defineProperty(chai, 'name', {
    // writable: false,
    enumerable: false,
    // configurable:false
})

// console.log(Object.getOwnPropertyDescriptor(chai, 'name'))


for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== "function") {
        console.log(`${key} : ${value}`)
    }
    
}
    