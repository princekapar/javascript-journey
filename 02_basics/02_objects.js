
// // Objects

// //Singleton

// // Objects literals

// // Object.create


const mySym = Symbol("key1")

const jsUser = {
    name: "Prince",
    "full Name": "Nitan",
    [mySym]:"mykey1",
    age: "23",
    location: "jaipur",
    email: "prince@google.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","wednesday"]
}


console.log(jsUser.email)//but this not right way
console.log(jsUser["email"])//this is wright way
// console.log(jsUser.full Name) //can't access with . method
console.log(jsUser["full Name"])
console.log(jsUser[mySym])



// jsUser.email = "prince@microsoft.com"
// // Object.freeze(jsUser)
// jsUser.email = "bitisha@google.com"
// console.log(jsUser);


// jsUser.greeting = function () {
//     console.log("Hello Js user");
// }

// jsUser.greetingTwo = function () {
//     console.log(`Hello Js user, ${this.name}`);
// }

// console.log(jsUser.greeting())
// console.log(jsUser.greetingTwo())


// //final most of the time we are excssing the value using "".""







//const tinderUser = new Object()  //singleton object

const tinderUser = {} //non singleton

tinderUser.id = "1234abc"
tinderUser.name = "Harry"
tinderUser.isLoggedIn = false



// console.log(tinderUser)


const regularUser = {
    email: "some@gamil.com",
    fullName: {
        userFullname: {
            firstName: "Rohan",
            lastName:"choudhary"
        }
    }
}

// console.log(regularUser.fullName.userFullname.firstName)


const obj1 = {
    a: "a",
    b:"b"
}
const obj2 = {
    c: "ab",
    d:"bb"
}
const obj4 = {
    e: "ab55",
    f:"bb55"
}


// const obj3 = { obj1, obj2 }

// const obj3 = Object.assign({},obj1,obj2,obj4) // imp


const obj3 = {...obj1, ...obj2, ...obj4} ///mostly use


// console.log(obj3)



const users = [
    {
    id: 1,
    email:"data@gamil.com"
},
{
    userLoginName: "Bitisha",
    userPassword:"1244prince"
    },
{
    userLoginName: "Prince",
    userPassword:"1244prince"
    },
{
    userLoginName: "Prince",
    userPassword:"1244prince"
    },
]

// console.log(users[1].userLoginName);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));




// objects de-structure and JSON AIP intro


const course = {
    courseName: "javaScript in Hindi",
    price: "999",
    courseInstruction:"Prince Kumar Kapar"
}

// course.courseInstruction

const { courseInstruction: instructor } = course 
console.log(courseInstruction);


// {
//     "name": "Prince",
//         "course": "Data Science",
//             "price": "false",
// }



[
    {},
    {},
    {}
]