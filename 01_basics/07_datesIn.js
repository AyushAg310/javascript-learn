// Dates

let myDate = new Date();
console.log(myDate);
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());

console.log(typeof myDate);

// let myCreatedDate = new Date(2025 , 8 ,1)
let myCreatedDate = new Date("9-1-2025")
console.log(myCreatedDate.toDateString());


let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.round(Date.now()/1000))

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);

newDate.toLocaleString('default',{
    weekday : "long",
}
)



