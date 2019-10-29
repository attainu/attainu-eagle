## Extend the routes of Node.js app in MVC architecture

 - Add *get*, *update*, *delete* routes with appropriate HTTP method
 - Add/extend controller methods to handle the incoming requests
 - Forward the request from controller to model, wherever necessary
 - In create, update, delete routes, return an object like following:

```
{
	message: <YOUR MESSAGE>
	timestamp: <TIME WHEN THE REQUEST WAS PROCESSED>
}
```

Note: 

 - To print the timestamp, use `moment` package and `moment().format()` expression to get the current time.

	 
