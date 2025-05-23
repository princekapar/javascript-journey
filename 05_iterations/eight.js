//reduce

const myNums = [1, 3, 4, 5]

// const mytotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and carrval: ${currval}`)
//     return acc + currval
// }, 3)
//

const myTotal = myNums.reduce((acc, curr) => acc + curr,0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js",
        price: 3999,
    },
    {
        itemName: "data science",
        price: 3999,
    },
    {
        itemName: "DB management",
        price: 3999,
    }
]


const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price,0)
console.log(priceToPay)