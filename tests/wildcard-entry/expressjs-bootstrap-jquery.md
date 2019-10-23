# Eagle Wildcard Entry Test
 - Create a node server with `express`
 - Add `GET` routes *sign-up* and *login*
 - Add `POST` routes *sign-up* and *login*
 - Requests to the above routes should load HTML Pages created in Bootstrap
 - Both the pages should have header and footer.


 - **Sign-up page**
	 - should have three inputs: *username*, *email*, and *password* and a submit button
	 - inputs should be validated before posting data (JSON object of same properties) to the route `POST - sign-up`. If value of any of the inputs is falsy, show an alert with error message and exit the further process
	 - on receiving the data on `POST` endpoint, print (`console.log`) the request body

 - **Login page**
	 - should have two inputs: *username*, and *password* and a submit button
	 - inputs should be validated before posting data (JSON object of same properties) to the route `POST - sign-up`. If value of any of the inputs is falsy, show an alert with error message and exit the further process
	 - on receiving the data on `POST` endpoint, print (`console.log`) the request body
 
