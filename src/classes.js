// Classes - used in the same way on the server and in the browser

class Job {
	constructor(jobTitle, place, salary) {
		this.title = jobTitle;
		this.location = place;
		this.salary = salary;
	}
}

const developer = new Job('web dev', 'Miami', '54000');
const doctor = new Job('clinical', 'New York', '82000');
console.log(developer, doctor);
