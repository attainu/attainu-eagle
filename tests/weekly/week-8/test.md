# Weekly Test - 3 

 1. Create a node.js server with no view engine i.e. No UI (REST only)
 2. The structure of application should be in MVC architecture
 3. Create a route `/upload-files` to handle Image & PDF file uploads
 4. On successful upload of each file, the following data should be stored as an object in an (storage)  array: 
`{ 
	filePath: "<ROOT-URL>/public/<FILE-NAME>"
	mimeType: <FILE-MIME-TYPE>
}`
5. Create a route `/get-files` and return the array which holds data of all uploaded files

Note: 
- (Storage) Array should be declared on top in your model.
- Whenever your app will restart, this array will be reinitialised which means it will be empty.
- All the business logic needs to be only in Model
- All routes should return only JSON response
