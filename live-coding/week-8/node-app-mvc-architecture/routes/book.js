const BookController = {};
const Model = require('./../models/Book.js');

BookController.create = function(request, response) {
	var name = request.body.name;
	var author = request.body.author;

	Model.create(name, author, function(error, data) {
		if(error) {
			return response.status(500).send(error);
		}

		return response.status(200).send(data);
	});
}

BookController.update = function(request, response) {
}

BookController.get = function(request, response) {
}

BookController.delete = function(request, response) {
}

module.exports = BookController;