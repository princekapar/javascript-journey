// //ES6

// class User {
//     constructor(username, email, password) {
//         this.username = username
//         this.email = email;
//         this.password = password;

//     }

//     encryptPassword() {
//         return `${this.password}abc`
//     }

//     changeUsername() {
//         return `${this.username.toUpperCase()}`
//     }
// }


// const chai = new User("chai with code", "chai@gmail.com", "3455")
// console.log(chai.encryptPassword());
// console.log(chai.changeUsername())

// behind the scean


function User(username, email, password) {
        this.username = username
        this.email = email;
        this.password = password;

    }

User.prototype.encryptPassword = function () {
     return `${this.password}gghfh`
}

User.prototype.changeUsername= function() {
        return `${this.username.toUpperCase()}`
}
    
const tea = new User("tea", "tea@gmail.con", "43344")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());