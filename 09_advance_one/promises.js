// const promiseOne = new Promise(function (resolve, reject) {
//     // Do an async task
//     //DB  calls, cryptography, network
//     setTimeout(() => {
//         console.log('Async task is complete')
//         resolve()
//     }, 1000);
// })

// promiseOne.then(function () {
//     console.log('Promise consumed')
// })



new Promise(function (resolve, reject) {

    setTimeout(function () {
        console.log('Async task 2')
    }, 1000)
    resolve()
}).then(function () {
    console.log('Async 2 is resolved')
})




const promiceThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({
            username: 'chai',
            email:'function@gmail.com'
        
        })
    },1000)
})

promiceThree.then(function (user) {
    console.log(user)
})




const promiseFour = new Promise(function (resolve, reject) {
    
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({username:"prince", pasword:"1234this"})
        } else {
            reject('ERROR: something went wrong')
        }
    },1000)
})


promiseFour
    .then((user) => {
    console.log(user);
    return user.username
    })
    .then((username) => {
    console.log(username)
    })
    .catch(function (error) {
     console.log('ERROR: something went wrong')
    }).finally(() => {
    console.log("The promise is either resolve or rejected")
    })


const promiseFive = new Promise(function (resolve, reject) {
        
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({username:"JavaScript", pasword:"1234this"})
        } else {
            reject('ERROR: Something went wrong')
        }
    },1000)


})

async function consumePromiseFive() {
   try {
     const response = await promiseFive
    console.log(response)
   } catch (error) {
    console.log("ERROR: Something went wrong")
   }
}


consumePromiseFive()





// async function getAlluser() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data =await response.json()
//     console.log(data)
//     } catch (error) {
//         console.log('ERROR')
//     }
// }


// getAlluser()




fetch('https://jsonplaceholder.typicode.com/users')
    .then(function (response) {
        return response.json()
    }).then((data) => {
        console.log(data)
    })
.catch((error) => console.log('error'))

