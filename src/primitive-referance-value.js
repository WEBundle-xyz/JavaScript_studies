// pimitives and objects //

const hobbies = ['Sports', 'Cooking'];

hobbies.push('Reading');

console.log(hobbies);

// Reference values: Objects

// objects are reference value

const person = { age: 32 };

function getAdultYears(p) {
	p.age -= 18;
	return p.age;

	// return p.age - 18;
}

// console.log(getAdultYears(person));
console.log(getAdultYears({ ...person }));

console.log(person);



