# Module Test - Express App w/ CRUD functionality
 - Create an express app with connection to MongoDB server 
	 - db name: `eagle-yourFirstName-yourLastName`
   
 - Create a node.js file to upload data from this [CSV file](data.csv) to mongodb collection
   - please download the file and place it in your project directory
   - node.js file should be accessible from terminal/command prompt and should populate the database with data
	 - collection name: `users`
	 - package to use: `csvtojson`
   
 - Create routes with GET, POST, PUT, DELETE HTTP methods ONLY on `/users` route to retrieve or add or manipulate or delete data 
	 - No extra route name needed like `/users/get` or `/users/create`
	 - Use placeholders to deal with one row/document `/users/:username`
   
 - Create UI in handlebars
 
 - Use Bootstrap for styling
 
 Note: 
1. Add node_modules directory to .gitignore file before commiting (VERY IMPORTANT)
2. Commit every 45-40 minutes because just in case you lose the file or anything bad happens -- you can have some saved data
3. You're amazing, and you can do this :)
