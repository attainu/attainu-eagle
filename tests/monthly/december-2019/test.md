## Eagle Monthly Test - December

 1. Create a Cart system (express app) with the good old MVC structure 
 2. The code should be strictly written in JS ES6
 3. There should be a few basic routes like:
	 a. POST `/cart/add`
	 b. PUT `/cart/update`
	 c. GET `/cart/retrieve`
	 d. DELETE `/cart/remove`
	 Each of the above route has to be mapped with a static function of the respective controller class.
 4. `/cart/add` should create a new cart, and add items to it with props like: itemName, quantity, pricePerItem, totalAmount
 5. `/cart/update` should update the existing cart (pass an identifier to update the correct cart). If the cart identifier is incorrect, the API should throw an error
 6. `/cart/retrieve` should fetch the cart items
 7. `/cart/remove` should remove the item(s) - *not the cart*
 8. The UI should be developed using HBS, Bootstrap, jQuery (Keep the UI simple)
 9. Setup Babel in your express app so that the modern JS code can be transpiled to ES5

