const user = {
    username: "PRINCE",
    loginCount: 8,
    signedIn: true,
    
    getUserDetails: function () {
        //  console.log("Got user details from database")
        // console.log(`username: ${this.username}`);
        console.log(this);
    }
}


// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this)


function User(username, loginCount, isLoggedIn) {
    this.myusername = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;


    this.greeting = function () {
        console.log( `Welcome ${this.username}`)
    }
    
    return this
}

const userOne = new User('Prince', 12, true)
const userTwo = new User("chaiaurcode", 11, true)


//console.log(userOne)
//console.log(userTwo)

console.log(userOne.constructor)


//