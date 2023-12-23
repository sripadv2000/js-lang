const accountId = 12345
let accountEmail ="vayu@gmail.com"
var accountPassword = "Vayu@123"
accountCity = "Hyd"
let accountState;

console.log(accountId);

/*
Prefer not use var
because of issue in block scope and functional scope.
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);