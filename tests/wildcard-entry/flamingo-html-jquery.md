# Flamingo Lateral Entry Test

 - Create a form with the below details 
	 - Name (validations): 
		 - Minimum length should be 3 characters
		 - Email
			 -  It should contain @ 
			 - It should contain .
			 - Minimum length should be 5 characters
		 - Mobile 
			 - It should have exactly 10 character
			 - It should accept only numbers 
		 - Submit Button 
			 - On click it should add the details into the array called `students` 

- Create a button saying `Delete First Student` just below the form 

- Create a table below the delete button which will display the students added to the list 
    - Table border should have the color `grey`
    - Table headings should have 
	    - background color as red
        - text color as white 

- Functions to create 
    - addStudent (It should be called on form submit)
        - It should check for all the above validations
            - If the validations are failing, give an alert box and mention the respective validation 
        - If all the validations are passed, add the details to the `students` array and give an alert box saying student details are added 
        - New entry should be displayed in the table 
    - countStudents 
        - Maintain a count variable which will keep track of the number of students added to the list
         - count variable should not be accessed by any other function in the same script (use closure)  
    - deleteFirstStudent
        - This function should delete the student entry at index 0 from the array students 

*Follow the bootstrap standards. All the form fields and buttons should use the classes from bootstrap*
