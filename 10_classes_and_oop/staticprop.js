
class User {
    constructor(username) {
        this.username = username

    }

    logMe() {
        console.log(`Username: ${this.username}`)
    }

   static createId() {
        return `2343`
    }
}

const Prince = new User("Prince")
//console.log(Prince.createId())


class Teacher extends User {
    constructor(username, email) { 
        super(username)
        this.email
    }
}

const iphone = new Teacher("iphone", "iphone@gamil.com")
iphone.logMe()
console.log(iphone.createId())