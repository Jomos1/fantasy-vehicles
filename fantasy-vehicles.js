class Vehicle {
	constructor(make, color, type){
		this._make = make;
		this._color = color;
		this._type = type;
	}

	get vehicleDetails(){
    return `Your vehicle is a ${this._type}, made by ${this._make}, and is ${this._color}.`;	
	}
	set vehicleColor(color){
		if(typeof color === 'string'){
		this._color = "Hot Pink";
		}else{
			throw new TypeError('Not a string');
		}
	}
	set vehicleMake(make){
		if(typeof make === 'string'){
		this._make = "Audi";
		}else{
			throw new TypeError('Not a string');
		}
	}
	set vehicleType(type){
		if(typeof type === 'string'){
		this._type = "Bugatti";
	}else{
		throw new TypeError('Not s string dumbass');
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
		if(typeof cost === 'number'){
		this._cost = 1700000;
	}else{
		throw new TypeError('not a number...baka');
	}
	}
	get superCarDetails() {
			return `Your super car is a ${this._type}, made by ${this._make}, and is ${this._color} with a top speed of ${this._topSpeed} mph and total cost of ${this._cost} million.`
	}
}

class Motorcycle extends Vehicle{
  constructor(make, color, type, topSpeed, cost){
    super(make, color, type);
    this._topSpeed = topSpeed;
    this._cost = cost;
  }

  get bikeDetails(){
    return `Your motorcycle is a ${this._type}, made by ${this._make}, and is ${this._color} with a top speed of ${this._topSpeed} mph and total cost of ${this._cost} dollars.`
  }

  set bikeSpeed(topSpeed){
    if(typeof topSpeed === 'number'){
      this._topSpeed = 200;
    }else{
      throw new TypeError('Motorcycle.topSpeed is not a number');
    }
  }
  set bikeCost(cost){
  	if(typeof cost === 'number'){
  		this._cost = 20000;
  	}else{
  		throw new TypeError('Motorcycle.cost is not a number...baka');
  	}
  }
}
let jank = new Vehicle;
let jank2 = new SuperCar('Audi', 'Hot Pink', 'Bugatti','254','1700000');
console.log(Vehicle.SuperCar);
