
function sayMyName()
{
    console.log("A");
    console.log("Y");
    console.log("U");
    console.log("S");
    console.log("H");
}
// sayMyName();

function addNumbers(num1, num2)
{
    return num1 + num2;
    
}
// addNumbers(3,4);
// addNumbers(3,"4");
// addNumbers(3,"a");
let result = addNumbers(5,3);
console.log("Result is: ",result);


function loginUserMessage(username="Aayush")
{
    if(!username)
    {
        console.log("Enter a valid username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Ayush"));
console.log(loginUserMessage());

function calculateCartPrice(val1,val2,...num1)
{
    return num1;
}
console.log(calculateCartPrice(200,300,400,500));


const user={
    username:"Ayush",
    price:"199"
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and course price is ${anyobject.price}`); 
}
// handleObject(user);
// passing object in function
// OR

handleObject({
    username:"Ayush",
    price:"199"
})

const myNewArray = [200,300,400,600]

function returnSecondValue(getArray)
{
    return getArray[1];
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,1000,400,600]));
