# Documentation - Assignment 1: Eric Martin s2985817
## Git organisation
The git repository was commited and pushed in sessions.
During the first session, a basic login function, including pages for the login and page after login, server set up and some css were created.
The next session, a branch called ***chat*** was created. In this branch, very basic socket.io setup was achieved, as well as some other small parts. 
Switching back to the main branch, ***chat*** was merged and pushed to main
Group setup was done in a new branch named ***groups***. This was merged and pushed after completion.

Due to most of the elements of the project relying on front and backend functionality, there was no seperate branching for front and backend components.
This allowed more frequent testing.

## Data Structures
### User Data
User data is stored in two json files. The first file - *users* - contains an array of user objects that contain usernames and passwords for logging in.
The second file - *extendedUsers* - contains user object with the following keys:

- username
- email
- password
- userID
- roles
- groups


### Group Data
Group data is also stored as a json file in the backend. The groups are stored in one file named *groups*. The objects have the following keys:

- groupName
- admins

### Client Data
SessionStorage was used to keep the user's data stored. When logging in, a call to the backend was sent and the recieved data from the *extendedUsers* file was set to corresponding session variables.

## Angular Components
### Setup
The following terminal commands were run to set up the angular app:

1. ng new Assignment
2. cd Assignment
3. npm install bootstrap --save

To create each new page, **ng g c *pageName*** was run.

The backend server side was set up using:

1. mkdir server
2. cd server
3. npm init -y
4. npm install express --save

### Services
The socket.io service was created by running ****ng g s *socket*** inside a services folder (for better organisation).

### Routes
To be able to navigate between pages the *Router* component was imported to the *component.ts* files of each component.

In **app.routes.ts** each component was imported and then exported as route paths.

### Models
Models were used in the login and groups components.
In the login component, a small model was used to pass the input values in the login form.\
In the groups component, models were used to display the group names stored in the server, as well as display users.

## Rest API
In the login component, once the form is submitted, a user object is created. This object is then passed as the body of the *httpClient.post* request.\
The .subscribe() method handles the response from the API, as saves user info to sessionStorage if there is a successful response.\
\
A similar process is used when creacting a new group in the groups component. \
A group object is created using a form input and the current session stored value for username. This object is passed as the body.\
This API request was created to add an object to the groups.json file, so unlike the login component, a successful response was not awaited.




