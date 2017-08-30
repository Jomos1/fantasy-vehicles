class Vehicle {
	constructor(make, color, type){
		this._make = make;
		this._color = color;
		this._type = type;
	}

	get vehicleDetails(){
		return `Your Vehicle is made by ${this.make}, and is ${this.color}, and least importantly it's a ${this.type}`	
	}
	set vehicleColor(color){
		if(typeof color === 'string'){
		this._color = "Hot Pink";
		}else{
			throw new TypeError('Not a string')
		}
	}
	set vehicleMake(make){
		if(typeof make === 'string'){
		this._make = "Audi";
		}else{
			throw new TypeError('Not a string')
		}
	}
	set vehicleType(type){
		if(typeof type === 'string'){
		this._type = "Bugatti";
	}else{
		throw new TypeError('Not s string dumbass')
	}
	}
} 
class SuperCar extends Vehicle {
	constructor(make,color,type,topSpeed,cost){
		super(make,color,type);
		this._topSpeed = make;
		this._cost = cost;
	}
	set vehicleTopSpeed(topSpeed){
		this._topSpeed = '254';
	}
	set vehicleCost(cost){
		this._cost = '1700000';
	}
	get superCarDetails() {
		return `Your Vehicle is made by ${this.make}, and is ${this.color}, and least importantly it's a ${this.type} its top speed is ${this.topSpeed} and costs ${this.cost}`
	}
}

class Motorcycle extends Vehicle{
	constructor(make,color,type,topSpeed,cost){
		super(make,color,type,topSpeed,cost)
	}
}

let jank = new Vehicle;
let jank2 = new SuperCar('Audi', 'Hot Pink', 'Bugatti','254','1700000');
console.log(Vehicle.SuperCar);
