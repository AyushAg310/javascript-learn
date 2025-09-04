//const tinderUser = new Object(); //singleton
const tinderUser = {} //non singleton

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userFullname: {
            firstname: "Ayush",
            lastname: "Agarwal"
        }
    }
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userFullname);
// console.log(regularUser.fullname.userFullname.lastname);

const obj1 ={1: "a" , 2:"b"}
const obj2 ={3: "c" , 4:"d"}

// const obj3 = { obj1,obj2} // same problem will occur as in case of array
// const obj3 = Object.assign({},obj1,obj2) // static method that copy objects into the target
const obj3 = {...obj1,...obj2} //like a spread stored in obj3
console.log(obj3);

const users =[
    {
        id:"Da12",
        email:"ayush@gmail.com"
    },
    {
        id:"Da12",
        email:"ayush@gmail.com"
    },
    {
        id:"Da12",
        email:"ayush@gmail.com"
    }
] // array of objects

console.log(users[1].email);

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(Object.hasOwnProperty('isLoggedIn'));

// Destructuring
const course ={
    courseName: "js in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

// course.courseInstructor
const {courseInstructor: instructor} = course;
console.log(instructor);

// React concept of Destructuring
// const navbar = ({company}) => {

//     }

//     navbar(company = "hitesh")
// }


// JSON :- in the form of keys and value of string
// {
//     "name":"Hitesh",
//     "coursename":"JS in Hindi",
//     "price":"free"
// }
// or can be in form of Array

[
    {},
    {},
    {}
]
