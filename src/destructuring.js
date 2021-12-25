// Array destructuring:

// works the same on both the server and browser side

const input = ['Stef', 'Griffin'];

const firstName = input[0];
const lastName = input[1];

// the array destructuring

const [first, last] = input;

console.log(input);
console.log(first);
console.log(last);

// Object destructuring: 

const job = { title: 'Development', location: 'New York' };

const {title} = job;

console.log(title);

// to change the name:

const {title: jTitle } = job;
console.log(jTitle);
