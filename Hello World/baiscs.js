//! hoisting and how does it work
// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution and we have three scopes FUNCTION or Block scope , Global scope and Local scope.
// !Let and Const are Block===loops or if| level Scope and Var has a function scope.



// var a = 1;
let b = 2;
const c = 3;
console.log(a);

myfun();

function myfun() {
  var a = 4;
  let b = 5;
  const c = 6;
console.log(a,b,c);
};

if(true) {
  var a=10;
  let b = 8;
  // const c = 9;
console.log(a,b,c);
};


//!objects examples 
/*
let person = {
  name : 'Marwan',
  age : 23,
  lastName: 'Baz',
};
console.log(person.age)

let val;
val = document.all;
val = document;
val = document.all[1];
val = document.URL;
val = document.styleSheets;
console.log(val);


document.getElementById('id').style.color = '#000000';
document.getElementById('id').style.padding = '20px';

document.getElementById('id').style.backgroundColor = 'lightgray';
document.getElementById('id').style.border = '2px solid #ff0000';

document.getElementById('id').style.borderRadius = '30px';



document.getElementsByClassName

const items = document.getElementsByClassName('collection-item');
console.log(items);
console.log(items[0]);
items[0].style.color = 'red';
items[3].textContent = 'Hello';

const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

console.log(listItems);

document.getElementsByTagName
let lis = document.getElementsByTagName('li');
console.log(lis);
console.log(lis[0]);
lis[0].style.color = 'red';
lis[3].textContent = 'Hello';

//! Convert HTML Collection into array
lis = Array.from(lis);

lis.reverse();

lis.forEach(function(li, index){
  console.log(li.className);
  li.textContent = `${index}: Hello`;
});

console.log(lis);

document.querySelectorAll
const items = document.querySelectorAll('ul.collection li.collection-item');

items.forEach(function(item, index){
    item.textContent = `${index}: Hello`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li, index){
  li.style.background = '#ccc';
});

for(let i = 0; i < liEven.length; i++){
  liEven[i].style.background = '#f4f4f4';
}

console.log(items);

//!انشاء عناصر 
//! Create element

let a = document.createElement('div');
a.appendChild(document.createTextNode('hello world'));

a.cloneNode('div');
console.log(a);
const codeHeading = document.createElement('h2');
(document.createTextNode('marwan code here'));
codeHeading.id = 'heading';
console.log(codeHeading);
h2.id = 'id';
h2.className = 'h2';
h2.setAttribute('title', 'Marwan');
h2.appendChild(document.createTextNode('Hello marwan'));
h2.innerHTML('h1');

const h1 = document.createElement('li');
h1.id = 'id';
h1.className = 'h2';
h1.setAttribute('title', 'Marwan');
h1.appendChild(document.createTextNode('Hello marwan'));
h1.appendChild('p');

console.log(h1)

const li  = document.createElement('li');

//!Add class
li.className = 'collection-item';

//! Add id
li.id = 'new-item';

//! Add attribute
li.setAttribute('title', 'New Item');

// !Create text node and append
li.appendChild(document.createTextNode('Hello World'));

//! Create new link element
const link = document.createElement('a');
//! Add classes
link.className = 'delete-item secondary-content';
//! Add icon html
link.innerHTML = '<i class="fa fa-remove"></i>';

//! Append link into li
li.appendChild(link);

//! Append li as child to ul
document.querySelector('ul.collection').appendChild(li);

console.log(li);
// //! Events
const button = document.querySelector('#submit');
const todoList = document.querySelector('.todo-list');
const todoNum = document.querySelector('#num span');
console.log(todoNum);
const items = todoList.children;
const title = document.querySelector('.title');
const input = document.querySelector('.input');


//* click scroll mouseover mouseenter mouseup etc submit...

button.addEventListener("click",function(e){
//!stops the natural behaver of forms and etc..
  e.preventDefault();
//!create html element
  const newItem = document.createElement('li');
//! add class to element
  newItem.classList.add('item');
//!add inner text to element
  newItem.innerText = input.value;
//!add child element to parent //*appendChild const name
  todoList.appendChild(newItem);
//!updating number of elements added
  todoNum.innerText = items.length;
//!add event listener to every new item added to the todo
  newItem.addEventListener('click', deleteItem)
//!clear input felled after submit the value
  input.value = '';
//! A WAY TO CONVERT HTMLCOLLECTION TO AN ARRAY

let collection = document.querySelectorAll('li');
collection = Array.from(collection);
console.log(collection);
})

button.addEventListener("keydown",function(event) {
  //!add and remove classes by toggle
  //!keycode 81 is 
  if (event.keyCode === 81){
  title.classList.toggle('style');
  }
});

button.addEventListener('mouseenter', function(){
  button.style.backgroundColor = 'red';
});

// //!delete item form the todo list
function deleteItem(e){
  e.target.remove();
}
//!local local Storage and 
localStorage.setItem('hello',' Marwan');

//!session storage
//? local storage and session storage are like local== your notebook and session == your brain 

sessionStorage.setItem('hello',' Marwan');*/









