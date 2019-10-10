function Car(color, seatCount, acStatus) {
	this.color = color;
	this.seatCount = seatCount;
	this.maxSpeed = 120; // Unit in KMs

	if(acStatus === true) {
		this.acStatus = "ON";
	} else {
		this.acStatus = "OFF";
	}
}

Car.prototype.start = function() {
	console.log("Color: ", this.color);
	console.log("Seat count: ", this.seatCount);
	console.log("Max Speed: ", this.maxSpeed);
	console.log("AC status: ", this.acStatus);

	console.log("\n\n\n\n\n");

	console.log("Starting the car....");
}

Car.prototype.toggleAC = function() {
	if(this.acStatus == 'OFF') {
		this.acStatus = 'ON';
	} else { // It is ON
		this.acStatus = 'OFF';
	}

	console.log("AC status: ", this.acStatus);

	return this.acStatus;
}

var myCar = new Car("white", 4, true);

myCar.start();
myCar.toggleAC();