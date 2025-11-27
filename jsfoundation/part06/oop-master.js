let car = {
  make: 'Toyota',
  model: 'Camry',
  year: 2020,

  start: function () {
    return `${this.make} car got started in ${this.year}`;
  },
};

//console.log(car.start());

function Person(name, age) {
  this.name = name;
  this.age = age;
}

let john = new Person('John', 30);

//console.log(john.name); // Output: John
//console.log(john.age); // Output: 30

function Animal(type) {
  this.type = type;
}

Animal.prototype.speak = function () {
  return `The ${this.type} makes a sound.`;
};

Array.prototype.jeff = function () {
  return `Custom method ${this}!`;
};

let myArray = [1, 2, 3];
//console.log(myArray.jeff()); // Output: Custom method 1,2,3!

let myNewArray = [4, 5, 6];
//console.log(myNewArray.jeff());

class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  start() {
    return `${this.model} is a car from ${this.make}`;
  }
}

class Car extends Vehicle {
  drive() {
    return `${this.make} : This is an inheritance example`;
  }
}

let myCar = new Car('Honda', 'Civic');
//console.log(myCar.start());
//console.log(myCar.drive()); // Output: Honda : This is an inheritance example

let vehOne = new Vehicle('Ford', 'Mustang');
//console.log(vehOne.make); // Output: Mustang is a car from Ford

// Encapsulation Example
class BankAccount {
  #balance = 0; // Private field

  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }

  getBalance() {
    return `$ ${this.#balance}`;
  }
}

let account = new BankAccount();
//console.log(account.getBalance()); // Output: 100

// Abstraction Example
class CoffeeMachine {
  start() {
    // call DB
    // filter value
    return `Starting the machine...`;
  }

  brewCoffee() {
    return `Brewing coffee...`;
  }

  pressStartButton() {
    let message1 = this.start();
    let message2 = this.brewCoffee();
    return `${message1}\n${message2}`;
  }
}

let myMachine = new CoffeeMachine();
//console.log(myMachine.start());
//console.log(myMachine.brewCoffee());
console.log(myMachine.pressStartButton());
