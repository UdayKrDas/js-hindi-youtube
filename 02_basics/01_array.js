// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["Naagraj", "Shaktiman"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[0]);

// Array methods

// myArr.push(6) //adds value at the end
// myArr.push(7) //adds value at the end
// myArr.pop() //ignores the value at the end

// myArr.unshift(9) //inserts the value at the start of the array
// myArr.shift() //removes the first value of the array

// console.log(myArr.includes(3)); //checks if the value is there
// console.log(myArr.indexOf(9)); //shows the index of value (gives -1 if the value isnt there)

// const newArr = myArr.join() // turns the array into strings

// console.log(newArr);
// console.log(typeof newArr);
// console.log(myArr);


//slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) // shows the given value except the last digit
console.log("B", myArr);
console.log(myn1);

const myn2 = myArr.splice(1, 3) //takes out the given value and removes it from the array/manipulates the array
console.log("C", myArr);
console.log(myn2);








