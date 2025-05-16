
//function
//... rest operator


function calculateCartPrice(...num1) {
    return num1
}

// console.log(calculateCartPrice(200, 300, 600, 800))


const user = {
    username: "Prince",
    prices:199
}


function handelObject (anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handelObject(user)
handelObject({
    username: "Rohit",
    price:499
})


const myNewArray = [200, 300, 500, 600]

function returnSecondValue(getArray) {
    return getArray[3]
}

// console.log(returnSecondValue(myNewArray))

console.log(returnSecondValue([300, 400, 500, 700, 800, 900, 1200]))


