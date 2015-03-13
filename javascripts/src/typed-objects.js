// Write your Orange Tree code here - you may use constructor functions

/* Write your code for the plain-old-js-objects-spec here */

var FRUIT_BEARING_AGE = 5;
var MAX_AGE = 15;

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function orangeConstructor(diameter) {
  this.diameter = getRandomArbitrary(1,10);
};

function Tree(isAlive, age, height, orangeCount) {
  this.isAlive = true;
  this.age = 0;
  this.height = 0;
  this.orangeCount = 0;

  this.grow = function () {
    this.age++;
    this.height = this.height + 10;
    if (this.age >= FRUIT_BEARING_AGE) {
      this.orangeCount = this.orangeCount + 1;
    }
    if (this.age > MAX_AGE) {
      this.isAlive = false;
    }
  }

  this.dropOrange = function() {
    if (this.orangeCount > 0) {
      this.orangeCount--;
      var orange = new orangeConstructor();
      return orange;
    }
  }

};


function createTree() {
  var tree = new Tree();
  return tree;
};

function pickOrange() {
  var anOrange = new orangeConstructor();
  return anOrange;
}