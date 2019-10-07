/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Object binding -- When used in the global scope, "this" refers to the console object (basically all of JavaScript).
* 2. Implicit binding -- When an object method is invoked, "this" refers to the object to the left of the dot notation.
* 3. New binding -- When a constructor function is invoked, "this" refers to the new instance of the object that was just created by the constructor.
* 4. Explicit binding -- "This" is explicitly defined when the .call() or .apply() methods are used. Whatever gets passed into those methods becomes "this".
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

console.log(this);

// Principle 2

// code example for Implicit Binding
const myObject = {
    name: 'Janessa',
    introduce: function(lastName) {
        console.log(`Hi, my name is ${this.name} ${lastName}.`)
        console.log(this);
    },
};

console.log('\nPrinciple 2:')
console.log(myObject.introduce('Garrow'));

// Principle 3

// code example for New Binding
function MyConstructor(name) {
    this.name = name;
    this.favWord = 'Ciao';
    this.introduce = function() {
        console.log(`${this.favWord}, my name is ${this.name}!`)
        console.log(this);
    };
}

const Janessa = new MyConstructor('Janessa');
const Peter = new MyConstructor('Peter');

console.log('\nPrinciple 3:')
console.log(Janessa);
console.log(Peter);

// Principle 4

// code example for Explicit Binding

console.log('\nPrinciple 4:')
Peter.favWord = 'Flameo';
console.log(Peter);
console.log(Janessa);

Janessa.introduce.call(Peter);
Peter.introduce.apply(Janessa);