

// function expression


// const greetStudent = function () {
//     console.log('hello student');
// }


// function declaration


// function greetStudent() {
//     const greeting = 'hello';
//     console.log(`${greeting} student`);
// }

// console.log(greeting);

// greetStudent();

function greet(name, greeting) {
    // console.log(greeting, name);
    // const message = `${greeting} ${name}`
    // return message;
    return `${greeting} ${name}`;
}

const message = greet('tim', 'hi')

// console.log(message);

// gets a string returns true if the number of 
// letters is even, returns false if the number
// is odd

function isNumberOfLettersEven(name) {
    if (name.length % 2 === 0) {
        return true
    }
    return false
}

// console.log(isNumberOfLettersEven('timi'));

function capitalize(name) {
    return name[0].toUpperCase() + name.slice(1)
}

// console.log(capitalize('timmy'));

function greeting(message, name) {
    return `${message} ${capitalize(name)}`
}

// console.log(greeting('hello', 'tim'));



// arrow functions
const addOne = (number) => 3 + 1;



// console.log(addOne(2))


const cities = ['Berlin', 'Amsterdam', 'Paris', 'Madrid', 'Barcelona'];
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const falsy = [null, false, undefined, '', 0, NaN];
const multidimensional = [['a', 'b'], ['c', 'd']];


// console.log(multidimensional[1][0]);


// const empty = [];
// console.log(empty);

// adding an element to the end of the array 
// empty.push('a');

// empty.push('b');
// removing an element from the end of the array
// const element = empty.pop();

// console.log(empty);

// console.log('removed:', element);

// adding an element to the beginning of the array 
// empty.unshift('a');
// empty.unshift('b');
// removing an element from the beginning 
// empty.shift();

// const empty = [];
// // empty[0] = 'a';
// empty[2] = 'a';
// console.log(empty[0]);

const countries = ['portugal', 'bengladesh', 'germany'];

countries.splice(1, 1, 'france', 'poland');

// console.log(countries);


// iterating over an array

// for (let i = 0; i < countries.length; i++) {
//     console.log(countries[i]);
// }


// for of loop
// for (let country of countries) {
//     console.log(country);
// }


countries.forEach(function (country) {
    console.log(country);
})