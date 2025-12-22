const promiseOne = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve()
        console.log('Async Task is completed');
        
    },1000)
})

promiseOne.then(function() {
    console.log("Promise Consumed")
})


new Promise(function(resolve,reject) {
    setTimeout(function() {
        console.log("Async Task 2 ");
        resolve();
    },1000)
}).then(function(){
    console.log("Async task 2 Completed")
})


const promiseThree = new Promise(
    function(resolve,reject){
        setTimeout(function(){
            resolve({username:"Ayush", email:"ayush@gmail.com"})
        },1000)
})

    promiseThree.then(function(user){
        console.log(user);
        
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "Ayush" , password: "12345"})
        }
        else{
            reject('ERROR : SOmething went Wrong ');
        }
    },2000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username) =>{
    console.log(username);
}).catch((err) =>{
    console.log(err);
}).finally(()=>{console.log("Promise is either resolved or rejected");
})



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "JavaScript" , password: "12345"})
        }
        else{
            reject('ERROR : JS went Wrong ');
        }
    },2000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
    console.log(response);
    } catch (error) {
        console.log(error);
        
    }
}

consumePromiseFive()



    // async function getAllUsers() {
    //     try {
    //         const response = await fetch('https://jsonplaceholder.typicode.com/users')
    //         const data = await response.json()
    //         console.log(data);
    //     } catch (error) {
    //         console.log("E: ",error);
            
    //     }
    // }

    // getAllUsers()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response) =>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error) => console.log(error)
)