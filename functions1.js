// Rest and Spread Operator

function greetUser(greetingPrefix, userName = 'user') {
	console.log(greetingPrefix + ' ' + userName + '!');
}

// greetUser('HI', 'Stefan');
// greetUser('Hello');

// function sumUp(numbers) {
//   let result = 0;

//   for (const number of numbers) {
//     result += number;
//   }

//   return result;

// }

// console.log(sumUp([3, 54, 54, 12, 1, 4]);

function sumUp(...numbers) {
	let result = 0;

	for (const number of numbers) {
		result += number;
	}

	return result;
}

const inputNumbers = [3, 54, 54, 12, 1, 4, 3, 6, 78];

console.log(sumUp(...inputNumbers));
