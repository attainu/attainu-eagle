const Book = {};

Book.create = function(bookName, authorName, callback) {
	// Validate the required data before proceeding with main operation
	if(!bookName) {
		return callback("Error! Book name is required");
	}

	if(!authorName) {
		return callback("Error! Author name is required");
	}

	console.log("Adding book with following details: ", bookName, authorName);

	// Spoofing the database call with a delay of 500 milliseconds
	setTimeout(function() {
		return callback(null, "Success! Book has been stored");		
	}, 500);
}

Book.update = function() {
}

Book.get = function() {
}

Book.delete = function() {
}

module.exports = Book;