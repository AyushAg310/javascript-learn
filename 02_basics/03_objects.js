// singleton  - constructor se banega toh singleton hoga
//Object.create

const mySymbol = Symbol("key1")

// object literals 
const jsUser = {
    name: "Ayush",
    // key:value
    age:18,
   // mySymbol:"myKey1", // Symbol is not getting used its still acting as String
    [mySymbol]:"mykey1", 
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Mondays" , "Saturday"],

    // behind the scene all the keys ar estored as strings

    "full name": "Ayush Agarwal" // cannot be accessed using dot
}
console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
console.log(jsUser[mySymbol]);

//console.log(typeof jsUser.mySymbol);


jsUser.email = "ayushagarwal@gmail.com"
// Object.freeze(jsUser) // no changes will reflect further
console.log(jsUser);

jsUser.greetings = function()
{
    console.log("Hello JS User"); 
}
jsUser.greetingsTwo = function()
{
    console.log(`Hello JS User , ${this.name}`); 
}
console.log(jsUser.greetings());
console.log(jsUser.greetingsTwo());

 