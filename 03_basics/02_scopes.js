// var c = 300

let a = 300
if (true) {
    let a = 10
    const b = 20
    // var c = 30
    // console.log("INNER:", a);
    
}


// console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const username = "hitesh"

    function two() {
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website);
    
    two()
}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = "youtube"
        // console.log(username + website);   
    }
    // console.log(website);
}
// console.log(username);

// +++++++++++++++ interesting +++++++++++++++++

// console.log(addone(5));

function addone(num){
    return num +1
    
}

addone(5)

// addTwo(5) this wont happen in this one compared to the above one because this is not just a function, but an expression, as we are storing the function in a variable so its different. and its concept is known as hoisting.
const addTwo = function(num){
    return num + 2
}

addTwo(5)