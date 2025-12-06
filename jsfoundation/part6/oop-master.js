let car = {
  make: 'Toyota',
  model: 'Camry',
  year: 2020,
  start: function () {
    return `The ${this.make} car got started in the year ${this.year}`;
  },
};

//console.log(car.start());

function Person(name, age) {
  this.name = name;
  this.age = age;
}

function Animal(type) {
  this.type = type;
}

Animal.prototype.speak = function () {
  return `The ${this.type} makes a sound.`;
};
