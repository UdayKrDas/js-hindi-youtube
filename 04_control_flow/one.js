// if
// const isUserloggedIn = true


// if (2 === "2"){
//     console.log("executed");
// }

// <, >, <=, >=, ==, !=, ===, !==

// we use = to assign valiue, == to check the value, and === to check the value and the type of the value as well eg. string, boolean etc.


// const temperature =  41

// if (temperature === 41){
//     console.log("less than 50");
    
// } else {
//     console.log("temperature is greater than 50");
    
// }
// console.log("Execute");


// const score = 200

// if (score > 100) {
//     const power = "fly"
//     console.log(`User power: ${power}`); 
// }


const balance = 1000

// if (balance > 500) console.log("test"), console.log("test2");
// dont write code like the above, it isnt reccomended
// canw write like this -
// if (balance > 500) console.log("test"); // this is implicit scope, so curly braces arent necessary
// OR write like this - 
// if (balance > 500) console.log("test"),
// console.log("test2");


// if (balance > 500) {
//     console.log("greater than 500");
// } else if (balance < 750){
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 900");
// } else {
//     console.log("less than 1200");
// }

const userLoggedIn =  true
const debitCard =  true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}