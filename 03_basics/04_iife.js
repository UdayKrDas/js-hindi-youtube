// Immediately Invoked Function Expressions (IIFE)

// function chai(){
//     console.log(`DB CONNECTED`);
// }
// chai()

(function chai(){
    console.log(`DB CONNECTED`); 
})(); //shortcut way for the above code or immediate execution known as global scope

// Global Scope's pollution causes problem sometimes. So to remove the pollution from Global Scope's variables o any declaration we use IIFE

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('hitesh');