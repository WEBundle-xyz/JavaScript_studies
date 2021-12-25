// Classes - used in the same way on the server and in the browser

// class Job {
// 	constructor(jobTitle, place, salary) {
// 		this.title = jobTitle;
// 		this.location = place;
// 		this.salary = salary;
// 	}
// }

// const developer = new Job('web dev', 'Miami', '54000');
// const doctor = new Job('clinical', 'New York', '82000');
// console.log(developer, doctor);

// Classes and Methods

class BestJobs {
	constructor(title, place, salary) {
		this.title = title;
		this.location = place;
		this.salary = salary;
	}

	describe() {
		console.log(
			`I'm a ${this.title}, I work in ${this.location}, and I earn ${this.salary}.`
		);
	}
}

const developer = new BestJobs('web dev', 'Miami', '54000');
const doctor = new BestJobs('clinical', 'New York', '82000');

developer.describe();
doctor.describe();
