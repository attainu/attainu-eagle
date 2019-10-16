# Monthly Test - 1

![Initial stage of app](Screenshot 2019-10-16 at 2.51.10 PM.png)

1. Fetch data (App name, Header values, User list) from [data.json](data.json) file
2. App Name, Header values, User list should be rendered dynamically
3. **Delete** button should be dynamically added in each row of the user
4. On click of **Salary** from head of the table, the user list should be sorted in descending order with respect to the *salary* property
5. On Click of **Delete** button, the row should be deleted

Note: 
1. To bind event listener to dynamically added element: Use: `$('body').on('click', '<elem-selector | class or ID>', function() ...`
