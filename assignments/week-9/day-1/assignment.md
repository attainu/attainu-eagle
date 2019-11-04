# Book Store with Authentication

1. Create a REST API server (No UI)
2. Create a *protected endpoint* `/book/create` to allow book creation only by logged-in users
3. Create endpoints `/login` & `logout` to log-in & log-out the user, respectively
4. Add an application level middleware (with an exception to `/login` route) which will check for user session on each request, and will return relevant error if the user is not logged-in
5. Clear the cookie when the user logs out (Search for the function which does this job)

Note: 
- Write all business logic in Models.
- Response of all routes should be in JSON format with a `status` flag having boolean value stating whether the requested operation was successful & a `message` property
- Post your doubts in relevant public channels
