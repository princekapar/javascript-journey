class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`USERNAME is ${this.username}`);
    }
}

class teacher extends User {
    constructor(username, email, password) {
        super(username)
        this.email = email;
        this.password = password;
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`)
    }
}

const chai =new teacher("chai", "google@gmail.com", 32424)

chai.addCourse()

const masalaChai = new User("masalaChai")

masalaChai.logMe()

console.log(chai instanceof User)