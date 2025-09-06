// Global object in Browser is the Window object
const user = {
    username:"Ayush",
    price: 999,

    welcomeMessage : function(){
        console.log(`${this.username} ,welcome to website`);
        // console.log(this); // this keyword talks about current context
        
    }
}

// user.welcomeMessage();
// user.username = "Manav"
// user.welcomeMessage()

// console.log(this);


// function chai(){
//     let username = "Ayush"
//     console.log(this);
//     console.log(this.username); // this is used for objects not function
// }
// chai()

// const chai = function() {
//     let username = "Ayush"
//     console.log(this.username);  // this is used for objects not function
// }
// chai()

// const chai = () =>{
//     let username = "Ayush"
//     console.log(this.username); // still wont work
// }
// chai()



// Arrow Function 

// const addTwo = (num1,num2) => {
//     return num1 + num2
// }
const addTwo = (num1,num2) => (num1 + num2) // did had to use return as one line of code inside parenthesis
console.log(addTwo(5,10));

const username = () => ({username:"Ayush"}) //  calling an using using arrow use parenthesis
console.log(username());


