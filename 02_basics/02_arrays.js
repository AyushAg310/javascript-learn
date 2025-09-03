const marvelHeros = ["Thor","Ironman","Spiderman"];
const dcHeros = ["Superman", "Batman","Flash"];

// marvelHeros.push(dcHeros);
// console.log(marvelHeros);
// console.log(marvelHeros[3]);

// console.log(marvelHeros.concat(dcHeros))

// const allHeros = [...marvelHeros, ...dcHeros];
// // console.log(allHeros)

// const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
// const usableArray = anotherArray.flat(Infinity);
// console.log(usableArray);


console.log(Array.isArray("Ayush"));
console.log(Array.from("Ayush"));
console.log(Array.from({name: "Ayush"})); // interesting case

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));
