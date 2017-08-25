class Vehicle {
	constructor(make, color, type){
		this.make = 'audi';
		this.color = 'hot pink';
		this.type = 'idk';
	}

	vehicleDetails(){
		return `${this.make} ${this.color} ${this.type}`
	}
} console.log(Vehicle);