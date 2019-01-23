/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
* 
* 1. Window binding === if the "this" keywrod is not pointed to a specific use it will always point back to the window object. (Default, Global)

* 2. Implicit binding === the object before the dot is what the "this' keyword will invoke.

* 3. Explicit binging === is to force a function invocation by using "call" (Passes "this" arg and argument), "apply" (Seperates the values of an argument into an array) and "bind" (For later use).

* 4. New binding === builds new objects using a function.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

const myFunction = function () {
  console.log(this);
}

//myFunction();

// Principle 2

// code example for Implicit Binding

const toddler = {
  name: 'Timmy',
  activity: 'run',
  location: function () {
    console.log(`${this.name} likes to ${this.activity} in the park.`);
  }
}
toddler.location();

// Principle 3

// code example for New Binding

function AthleticPerson(athlete) {
  this.athlete = athlete;
  this.activity = 'basketball';
  this.action = function () {
    console.log(`${this.athlete} is amazing at ${this.activity}`)
  }
}

const stephen = new AthleticPerson('Draymond');
const draymond = new AthleticPerson('Stephen');

console.log(stephen);

stephen.action();
draymond.action();

// Principle 4

// code example for Explicit Binding

const cat = {
  name: 'Garfield'
}

const favThings = ['lasagna', 'sleeping', 'coffee'];

function passTimes(item1, item2, item3) {
  "use strict";
  console.log(`${this.name} loves ${item1}, ${item2}, and ${item3}.`);
}

passTimes.apply(cat, favThings);