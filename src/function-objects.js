// functions are objects

function sumUp(...numbers) {
	let result = 0;

	for (const number of numbers) {
		result += number;
	}

	return result;
}

const inputNumbers = [3, 54, 54, 12, 1, 4, 3, 6, 78];

console.log(sumUp(...inputNumbers));

console.log(sumUp);


