// let myName = "Prince    "
// let myPrototype = "chai aru code"


// console.log(myName.truelength);


let myHero = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman:"sling",


getSpiderPower: function () {
    console.log(`Sidy power is ${this.spiderman}`);

    }
}


Object.prototype.prince = function () {
    console.log(`prince is present in all objects`)
}


Array.prototype.heyPrince = function () {
    console.log(`Prince says hello`)
}

//heroPower.prince()
// myHero.prince()
// heroPower, heyPrince()



//inheritance

const User = {
    name: 'chai',
    email:'@google.com'
}

const Teacher = {
    makeVideo:true
}

const TeacherSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS Assignment",
    fullTime: true,
    __proto__:TeacherSupport
}

Teacher.__proto__ = User


/// modern syntex

Object.setPrototypeOf(TeacherSupport, Teacher)


let anotherUsername = "chaiaurcode    "

String.prototype.truelength = function () {
    console.log(`${this}`)
    console.log(`${this.name}`)
    console.log(`True length is : ${this.trim().length}`)
 
}

anotherUsername.truelength()
"prince".truelength()
"iceCoffe".truelength()

