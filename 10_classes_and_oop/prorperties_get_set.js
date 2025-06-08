function User(email, password) {
    // Use backing variables with different names
    this._email = email;
    this._password = password;

    Object.defineProperty(this, 'email', {
        get: function () { 
            return this._email.toUpperCase(); // Use _email to avoid recursion
        },
        set: function (value) {
            this._email = value; // Set to _email, not this.email
        }
    });

    Object.defineProperty(this, 'password', {
        get: function () { 
            return this._password.toUpperCase(); // Use _password
        },
        set: function (value) {
            this._password = value; // Set to _password
        }
    });
}

const chai = new User("chai@gmail.com", "milktea");
console.log(chai.email);    // Output: "CHAI@GMAIL.COM"
console.log(chai.password); // Output: "MILKTEA"
