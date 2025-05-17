//Arrow


const user = {
    username: "Prince",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username} , welcome to website`);
        
        console.log(this)
    }


}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this)



// function chai() {
//     let username = "Prince"
//     console.log(this.username);
// }

// chai()


// const chai = function () {
//     let username = "Prince"
//     console.log(this.username);
// }
// chai()


// const chai = () => {
//     let username = "Bitisha"
//     console.log(this.username);
// }
// chai()

//  const addTow =   (num1,num2)=> {
//     return num1 + num2
// }

// console.log(addTow(4,4))


//  const addTow =   (num1,num2)=> num1 + num2

//  const addTow =   (num1,num2)=> (num1 + num2)

const addTow = (num1, num2) => ({ username: "Proplayer" })

console.log(addTow(4, 4))



const myArray = [1, 3, 5, 6, 67,]


