// ? when declaring an array by const we can modify the values but we can not change the hole array

const myArray = ["marwan", "abdalluah", "omar"];
// const myNum = [89, 34, 2, 42, 42, 97, 49, 51, 4, 5, 8, 9, 4, 3, 1];

// myArray[0] = 'omar';
// myArray.push("bazghifan");
// myArray.push(1, 2);
// myArray.forEach(function (name) {
//   console.log(name);
//   console.log("run");
// });
// console.log(myArray);
// myNum.sort(function(a,b){
//   return a-b;
// });

// myNum.sort((a, b) => a - b);
// console.log(myNum);

// ?map() function allows us to create a copy of one array and modify it or keep it the same or save it to a variable and it loops over each item in the array and allows us to run a function on it and do some modification

const newArray = myArray.map((item)=> {
  return item.toUpperCase();
});
newArray.push('i am new to map');

console.log(myArray);
console.log(newArray);


//? creating copies of arrays using the spread operator and save it to a variable

const myNew = [...myArray];
myNew.push('i am new to spread operator!')

console.log(myNew);

const name = 'marwan the developer';

// const spreadLatters = [...name];
// these are the same give the same output
const spreadLatters =name.split('');

console.log(spreadLatters);






const cars = {
  name: "tyota",
  spead: 120,
  modle: "hypundia",
  spead: 130,
  modle2: "ford",
  spead: 150,
  model3: "nissan",
  spead: 200,
  modlee4: "izozo",
  spead: 170,
  modle5: "ploaatta",
  spead: 190,
  modle6: "marouanie",
  spead: 220,
};
console.log();
// humans.forEach(function(car){
//   console.log(human);
// });


//?HOF higher order function is a function that takes another function as an argument or a parameter
// myArray.forEach(function(name){
//   console.log(name)
//   console.log('run')
// });

//? callback or callback function
// ?it is a function that gets executed later on when a certain event happening like when the user click a button
// button.addEventListener(function(){

// });


// destructuring in arrays

const students = ['Ali' , 'Marwan', 'Mohammed' , 'Salem']

const [,marwan,,] = students
console.log(marwan)
