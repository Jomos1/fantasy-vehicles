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
		this.color = "Hot Pink"
	}
	set vehicleMake(make){
		this.make = "Audi"
	}
	set vehicleType(type){
		this.type = "Bugatti"
	}
} 
class SuperCar  extends Vehicle {
	constructor(make,color,type,topSpeed,cost){
		super(make,color,type);
		this.topSpeed = make;
		this.cost = cost;
	}
	set vehicleTopSpeed(topSpeed){
		this.topSpeed = 254;
	}
	set vehicleCost(cost){
		this.cost = 1700000;
	}
	get superCarDetails{
		return `Your Vehicle is made by ${this.make}, and is ${this.color}, and least importantly it's a ${this.type} its top speed is ${this.topSpeed} and costs ${this.cost}`
	}
}

let jank = new Vehicle;
let jank2 = new SuperCar('Audi', 'Hot Pink', 'Bugatti',254,1700000);
console.log(Vehicle.SuperCar);
