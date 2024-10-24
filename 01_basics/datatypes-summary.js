// Primitive

// 7 types : String, number, boolean, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = ('123')
const anotherId = Symbol('123')

console.log( id === anotherId);

const bigNumber = 2809238492843984789374983749374n // using (n) at the end for BigInt numbers


// Reference (Non primitive)

// Array, Objects, Functions

const heroes = ["batman", "superman", "spiderman"];
let myObj = {
    name: "Ricky",
    age: 20,
}

const myFunction = function (){
    console.log("Hello World");
}

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "rickydraxdotcom"
let anothername = myYoutubename
anothername = "udaykrdas"

console.log(myYoutubename);
console.log(anothername);


let userOne =  {
    email: "ricky@google.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "ukd@google.com"

console.log(userOne.email);
console.log(userTwo.email);
