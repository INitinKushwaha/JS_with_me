const accountId = 144553
let accountEmail = "nitinkushwaha@google.com"
var accountPassword ="12345"
accountCity = "kanpur"
let accountState; // undefined

// accountId = 2  not allowed

/*
Perfer not to use Var 
becaus of issue in block and function scope
*/
accountEmail ="aman@google.com"
accountPassword =" 22244"
accountCity = "lucknow"

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

console.table([accountId, accountEmail, accountPassword, accountCity,accountState]);