class Vehicle {
	constructor(make, color, type){
		this.make = make;
		this.color = color;
		this.type = type;
	}

	get vehicleDetails(){
		return `Your Vehicle is made by ${this.make}, and is ${this.color}, and least importantly it's a ${this.type}`	
	}
	set vehicleColor(color){
		this.color;
	}
} 
console.log(Vehicle.vehicle);
