const user = {
    username: "Ricky",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }

}

// user.welcomeMessage()

// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username); //this wont happen coz we dont use this inside funtion, only in objects
// }

// chai()

 const chai = () => { // we can use "() =>" instead of function() and that is called arrow function
    let username = "hitesh"
    console.log(this);
 }

//  chai()

() => {} // basic arrow function syntax

// const addTwo = (num1, num2) => {
//     return num1 + num2; // this is also called explicit return where we use the word "return" after using curly backets
// }

// const addTwo = (num1, num2) => num1 + num2 // this is called implicit return, the short form of the above code, mostly used in react
// const addTwo = (num1, num2) => (num1 + num2) // coukd write inside normal brackets too but if used curly bracket we need to user the word return

const addTwo = (num1, num2) => ({username: "ricky"}) // need to use curly braces inside of normal bases incase of using objects.

console.log(addTwo(3, 4));


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()