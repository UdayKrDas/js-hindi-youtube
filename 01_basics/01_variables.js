const accountId = 144553
let accountEmail =  "ricky@google.com"
var accountPassword = "12345"
accountCity = "North Lakhimpur"
let accountState;

// account Id = 2 not allowed

accountEmail = "hchc@google.com"
accountPassword = "54321"
accountCity = "Bengaluru"

/* 
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId)
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])