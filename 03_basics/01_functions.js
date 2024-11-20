// console.log("H");
// console.log("I");
// console.log("T");
// console.log("E");
// console.log("S");
// console.log("H");


// function sayMyName(){
//     console.log("H");
//     console.log("I");
//     console.log("T");
//     console.log("E");
//     console.log("S");
//     console.log("H");
// }

// sayMyName() //need to write this to execute a function

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result // after return, no code executes in a function, so remember to write at the end
    return number1 + number2 //the short way to write the the above code
}


const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


// function loginUserMessage(username){
//     if(username === undefined){
//         console.log("Please enter a username");
//         return
//     }
//     return `${username} just logged in`
// }

// function loginUserMessage(username){
//     if(!username){
//         console.log("Please enter a username");
//         return
//     }
//     return `${username} just logged in`
// }

//above we used two ways (the username === undefined) way and (!) way, but the ! way seems better, reason is, in the first one we dont get the undefined in (""), but in  the eexclamation way we get it so, using it is better

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username");
        return
    } // if we dont pass anything the value will be sam, orelse it will show the value we typed, but if there is ("") instead of () in loginUserMessage, it will show undefined as well since we are using (!) i.e. (!username)
    return `${username} just logged in`
}


// console.log(loginUserMessage("hitesh"));
// console.log(loginUserMessage("Ricky"));


function calculateCartPrice(val1, val2, ...num1){
    return num1
} //val1 and val2 here will take the first two numbers and will show the rest in consoe log

// console.log(calculateCartPrice(200, 400, 500, 2000));


const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)
// handleObject({
//     username: "sam",
//     price: 399
// })

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
