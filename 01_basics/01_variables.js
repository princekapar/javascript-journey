

const accountId = 11333;
let accountEmail = "princekapar93@gmail.com";
var accountPassword = "12345";
accountCity = "Delhi";
let accountState;


// accountId =  3  not allowed

accountEmail = "prince@gmail.com";
accountPassword = "11211122";
accountCity = "Hyderabad"


console.log(accountId);


/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState ]);
