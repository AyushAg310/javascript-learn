var c = 300;
let a =300
if(true)
{
    let a = 10
    const b = 20
    var c = 30
    // console.log("Inner value of a: ",a);
    
}
// console.log(a);
//  console.log(b);
// console.log(c);

function one(){
    const username = "Ayush"

    function two(){
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website);

    two();
}

// one();



if (true)
{
    const username = "Ayush"
    if(username ==="Ayush")
    {
        const website = " on Youtube"
        // console.log(username+website);
    }
    // console.log(website);
}
// console.log(username);


// +++++++++++++++++++++++++ interesting +++++++++++++++++++++++++++++++++

console.log(addone(5));
function addone(num){
    return num+1;
}


// Hoisting
addTwo(5)
const addTwo = funstion(num)
{
    return num+2;
}