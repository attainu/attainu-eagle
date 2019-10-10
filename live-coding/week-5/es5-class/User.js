function User(firstName, lastName, age, email, phoneNumber) {
	// Validations
	if(!firstName) {
		throw new Error("First name is required");
	}

	if(!lastName) {
		throw new Error("Last name is required");
	}

	if(!age) {
		throw new Error("Age is required");
	}

	if(!email) {
		throw new Error("Email is required");
	}

	// Assign the base properties
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
	this.email = email;


	// Default
	this.phone = false;

	if(phoneNumber) {
		this.phone = phoneNumber;
	}
}

User.prototype.validateAge = function() {
	if(this.age < 18) {
		throw new Error("Your age should be 18 or above to register on our platform");
	}
}

User.prototype.register = function() {
	this.validateAge();

	var username = this.generateUsername();
	var password = this.generatePassword();

	console.log("Saving the user in database >>>");

	console.log("First Name: ", this.firstName);
	console.log("Last Name: ", this.lastName);
	console.log("Age: ", this.age);
	console.log("Email: ", this.email);
	console.log("Phone: ", this.phone);
	console.log("Username: ", username);
	console.log("Password: ", password);
	console.log("\n\n\n\n\n");


	// Send notifications to the user
	this.sendNotification();
}

User.prototype.generateUsername = function() {
	return 'iamcrazycoder';
}

User.prototype.generatePassword = function() {
	return '123456';
}

User.prototype.sendNotification = function() {
	this.sendSMS();
	this.sendEmail();
}

User.prototype.sendSMS = function() {
	if(!this.phone) {
		console.log("Cannot send SMS because phone number was not given by the user");
	} else {
		console.log("Sending SMS to user at phone: ", this.phone)
	}
}

User.prototype.sendEmail = function() {
	console.log("Sending Email to user at address: ", this.email)
}

var myUser = new User("Nishant", "Ghodke", 23, "iamcrazycoder@gmail.com", "654567645467");

myUser.register();