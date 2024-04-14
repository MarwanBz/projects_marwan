//! global()or default execution context gets created with its ---this--- at creation phase

//? callstack is a way of javascript engin to keep track of your execution context and on how your code is basically runs

//? javascript code is run line by line

/* function sayHi() {
  console.log(`hello callstack ${name}`);
  changeName();
  console.log(`sayHi is finished`);
}

function changeName() {
  name = "marwan";
  console.log(`we change it to ${name}`);
  console.log(`changeName is finished`);
}

let name = "Baz";

sayHi();*/

// ? when invoke a function a new execution context gets created and when run a function its create its own execution context with its on key word ---this---

// ?when a new execution context gets created javascript start reading its code line by line until finish and it is not going to skip or jump the rest of the code until finish that execution context

// console.log(`we are done running the code`);

// !this keyword
// ?when using the keyword --this-- inside a method on an object the this keyword gonna point to the object itself
/* example
const cars = {
  modle: "tyota",
  name: "corola",
};

const plans = {
  modle: "helicopter",
  name: "NAMVA991",
};

function giveAlert() {
  console.log(this.modle.toUpperCase());
}*/
//? example attach a function to objects to avoid duplicate code
/*
cars.lert = giveAlert;
plans.lert = giveAlert;
cars.lert();
plans.lert();*/

//?functions are special objects and when you create a new function you have access to three methods that you can apply to them called ..=>  //**  Call, Bind and Apply

/*const person = {
  firstName: "marwan",
  lastName: "baz",
  getName() {
    console.log(this.firstName + " " + this.lastName);
  },
};

function userRegister(country, lang) {
  this.getName();
  console.log(person.lastName);
  console.log(`your country is ${country} and your lang is ${lang}`);
}

// !Bind ربط وصل
const register = userRegister.bind(person);
register('us', 'en');

// ?the difference between bind and call is when use call we just invoke the function without saving it to a varible and the first args be the object then the other args like function args
// !Call
userRegister.call(person,'yemen', 'ar');

// ? the difference between call and apply is when we passing the args in call we pass it as "country" but in apply we pass an array ['country',]
// ! Apply
userRegister.apply(person,['yemen', 'ar']);
*/

// ?constructor function
/*function Todo(name, completed) {
  this.name = name;
  this.completed = completed,
    this.getTodoName = function () {
      console.log(this.name, this.completed);
    };
    this.getCheck = function () {
      console.log("checked");
    };
    this.getDelete = function () {
      console.log('deleted');
    };
}

const todo = new Todo("read 10 pages", false);
const todo2 = new Todo("go to library", true);
console.log(todo, todo2);
// todo.getTodoName();
// todo2.getTodoName();
*/

//! when constructor function gets built the newly created objects  inherit the prototype properties of the constructor function
// every time when creating a new array we inherit all the methods from its prototype
// example new Array(1,2,3,4,5);
// ?prototype is a simple reference to another object and contains common properties and attributes across all the instances=copies
/* Todo(name, completed) {
  this.name = name;
  this.completed = completed;
}

Todo.prototype.getTodoName = function () {
  console.log(this.name);
};
const todo = new Todo("read 10 pages", false);
const todo2 = new Todo("go to library", true);
todo.getTodoName();
console.log(todo, todo2);*/

// ?prototype inheritence our goal is to copy over functionality methods and properties  from anther constructor function

/*function Enemy(life, name, level) {
  this.life = life;
  this.name = name;
  this.level = level;
}

Enemy.prototype.getInfo = function () {
  console.log(this.life, this.name, this.level);
};

Enemy.prototype.attack = function () {
  console.log(`${this.name} has attacked!!`);
};

Enemy.prototype.block = function () {
  console.log(`${this.name} has blocked!!`);
};

//?this Giant gonna inherit all the properties above
function Giant(life, name, level, color, spell) {
  //**this keyword gonna reference the new giant object
  Enemy.call(this, life, name, level);

  //**  the other parameters we define them  here as normal

  this.color = color;
  this.spell = spell;
}
*/
/**
// ?inherit prototype a
Giant.prototype = Object.create(Enemy.prototype);

const newGiant = new Giant(406, "giant", 5, "dark", "destroy");

Giant.prototype.Destroying = function () {
  console.log("Destroying now!!!");
};

newGiant.getInfo();
*/

// ? classes
//? example like prototype inheritence but in a nicer and easier way with classes
/*function Enemy(life, name, level) {
  this.life = life;
  this.name = name;
  this.level = level;
}
Enemy.prototype.getInfo = function () {
  console.log(this.life, this.name, this.level);
};
Enemy.prototype.attack = function () {
  console.log(`${this.name} has attacked!!`);
};
Enemy.prototype.block = function () {
  console.log(`${this.name} has blocked!!`);
};*/
/*
class Enemy {
  constructor(life, name, level) {
    this.life = life;
    this.name = name;
    this.level = level;
  }

  getInfo() {
    console.log(`Life is ${this.life}, the name is ${this.name},and the level is ${this.level}`);
  }

  attack() {
    console.log(`${this.name} has attacked!!`);
  }

  block() {
    console.log(`${this.name} has die!!`);
  }
}

const wizard = new Enemy(133, "wizard of ous", 3);
wizard.getInfo();
wizard.attack();
wizard.block();

class Dragon extends Enemy {
  constructor(life, name, level, power, hit) {
    super(life, name, level);
    this.power = power;
    this.hit = hit;
  }
}

const electronicDragon = new Dragon(3600, "Electronic Dragon", 9 , 189, 1000);
electronicDragon.getInfo();
electronicDragon.attack();
electronicDragon.block();
*/

// destructuring in Objects 
const student = {
  name: 'Marwan',
  age: 24,
  dep: 'IT',
  id: 100900,
}
getStudent(student);
function getStudent({name,age,dep,id}) {
  const msg = 'Iam ' + name + 'and Iam '+age + 'years old'+ 'I study ' +dep +'at collage' + 'and my id is' + id;

  console.log(msg);
}