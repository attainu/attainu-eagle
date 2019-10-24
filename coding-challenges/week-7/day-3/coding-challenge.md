## Validation with Middleware in Express.js

 - Create a route `/login` with request body `username` and `password`
 - Create a route `/register` with request body `username`, `password`, `confirmPassword`
 - Check for the existence, and values of these properties in `req.body`, if doesn't exist or the value is falsy, return response with error message and `400` status code
 - In `/register` validation middleware, if `password` & `confirmPassword` are not equal -- return error.
 - The *validations* needs to be in middleware. The final function (middleware) should have only one line `console.log(req.body)`
