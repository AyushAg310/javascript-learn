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


const promiseThree = new Promise()