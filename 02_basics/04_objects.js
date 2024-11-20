// const tinderUser = new Object() //this is a singleton object
const tinderUser = {} // this is a non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@google.com",
    fullname: {
        userfullname: {
            firstname: "Hitesh",
            lastname: "Choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2) // the {} considered as empty object and is considered as target and rest are as source, so that we stay error free, not necessary but a good practise so adding the {} is good
const obj3 = {...obj1, ...obj2} // using this spread methos is easier
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "i@gmail.com"
    },
    {
        id: 3,
        email: "j@gmail.com"
    },
    {
        id: 4,
        email: "k@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // to see if there is a property of the following name 

const course = {
    cousename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

//course.courseInstructor //the old way in the console log 

// const {courseInstructor} = course   //since 'courseInstructor'is a long name, we renamed it to instructor below
const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor); // the new way


// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]









// additional React de-structuring 
// const navbar = ({company}) => { 

// } // here we are de-structuring the company thats why it is written within curly bracse {}, this is written is react not necessary for now

// navbar(company = "hitesh")