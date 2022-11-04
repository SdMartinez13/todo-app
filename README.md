# Context API

## Author

Stephen Martinez

## Phase 1

- In this phase, we’ll be adding some top-level settings for the application, so that the user can make some display choices that the app will use by default.

## Basics/Before you begin

- Create a new React app named todo-app
- Delete the existing src directory
- Paste in the src folder from the lab/starter-code
- npm install any missing dependencies by comparing package.json files. Note: installing most - recent versions is ideal.
- npm start and confirm that the application loads in the browser
- Create an EMPTY GitHub Repository named todo-app
- Follow GitHub instructions labeled “…or push an existing repository from the command line”

## Phase 1 Requirements

- In Phase 1, we’re going to perform some refactoring of the To Do application as built by another team. This application mixes application state and user settings at the top level and passes things around. It was a good proof of concept, but we need to make this production ready.

  - Style the application using the Mantine Component API{target:_blank}

  - Properly modularize the application into separate components

  - Implement the Context API to make some basic application settings available to components

    - How many To Do Items to show at once
    - Hide completed items

## Technical Requirements / Notes

- Implement the React context API for defining settings across the entire application.
  - Create a context for managing application display settings and provide this at the application level.
  - Display or Hide completed items (boolean).
  - Number of items to display per screen (number).
  - Default sort field (string).
  - Manually set (hard code) those state settings in the context provider’s state, they should not be changeable.

- Consume and utilize context values throughout your components
  - Show a maximum of a certain number of items per screen in the `<List />` component
    - Use the Mantine Pagination component to let the users navigate a long list of items
  - Hide completed items in the list (the ability to show will be added in a later lab)

### Pagination Notes

- Only display the first n items in the list, where n is the number to display per screen in your settings context.
  - If you have more than n items in the list, the Pagination Component will add a button that, when clicked, will replace the list with the next n items in the list.
  - the Pagination Component will also manage the previous (<) and next(>) arrow buttons upon correct implementation.

## UML

![UML-coming soon](/Assets/lab31.png)

- worked with [JunYoung Son](https://github.com/Junyoungson808) to complete UMLs

## Deployment

[Linked to Deployed Site](https://codesandbox.io/p/github/SdMartinez13/todo-app/context-settings?workspace=%257B%2522activeFileId%2522%253Anull%252C%2522openFiles%2522%253A%255B%255D%252C%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522gitSidebarPanel%2522%253A%2522COMMIT%2522%252C%2522sidekickItems%2522%253A%255B%257B%2522type%2522%253A%2522PREVIEW%2522%252C%2522taskId%2522%253A%2522start%2522%252C%2522port%2522%253A3000%252C%2522key%2522%253A%2522cl9y30elz00a83b6hczpgsq84%2522%252C%2522isMinimized%2522%253Afalse%257D%255D%257D)

[PR Link](https://github.com/SdMartinez13/todo-app/pull/1)

## Phase 2

- In this phase, we’ll be adding an editor so that users can save their preferences for the application, allowing them to change some of the default behaviors

## Before you begin

- Continue to work in your GitHub Repository named todo-app
- Create and work in a new branch for today called ‘context-methods’

## Phase 2 Requirements

- Implement the Context API to make some basic application settings available to components
  - How many To Do Items to show at once
  - Whether or not to show completed items
- Provide the users with a form where they can change the values for those settings
  - This should be given in the form of a new component, perhaps linked to from the main navigation
  - Hint: Use Browser Router to create the page/route/component for this
  - Once settings are updated, render the updated settings to the right of the “form”. Consider using Grid, Card, and When components.
- Save the user preferences in Local Storage
- Retrieve their preferences from Local Storage and apply them to the application on startup

## Technical Requirements / Notes

- Extend your context provider to include all of the following features:
  - Create a context for managing application settings and provide this at the application level.
  - Display or Hide completed items (boolean).
  - Number of items to display per screen (number).
  - Default sort field (string).
  - Create a function in your context that saves user preferences (for the above) to local storage.
  - Implement a useEffect() (or componentDidMount()) in your context to read from local storage and set the values for those 2 state properties on application load.
Note: You will need to stringify your state prior to saving to local storage, and parse it when you retrieve it.

- Consume and utilize Context values throughout your components:
  - Show a maximum of a certain number of items per screen in the `<List />` component.
    - Properly implement the Mantine Pagination component functionality to let the users navigate a long list of items with the correct number of tasks showing per “page”.
  - Hide or show completed items in the list.

## UML

![UML-coming soon](/Assets/lab32.png)

- worked with [JunYoung Son](https://github.com/Junyoungson808) to complete UMLs

## Deployment

[Linked to Deployed Site]()CODESANDBOX WONT LOAD

 [PR Link](https://github.com/SdMartinez13/todo-app/pull/3)

## Phase 3

- In this final phase, we’ll be requiring that users be logged in, in order to see the to do items. Additionally, based on their user type, they will be allowed (or denied) to perform actions such as editing or deleting them.

## Before you begin

- Refer to Getting Started in the lab submission instructions for complete setup, configuration, deployment, and submission instructions.

  - Building off of your previous day’s branch, create a new branch for today called ‘auth’ and continue to work in your ‘todo’ repository.

## Phase 3 Requirements

- In Phase 3, we’d like to extend the functionality of the application by requiring users be logged in to view items and also restrict access based on user type. The user stories from Phases 1, and 2 remain unchanged. For this phase, we are now adding the following new user stories.

- As a user, I want to provide a way for other users to create new accounts
- As a user, I want to provide a way for all users to login to their account
- As a user, I want to make sure that my To Do items are only viewable to users that have logged in with a valid account.
- As a user, I want to ensure that only fellow users that are allowed to “create”, based on their user type, can add new To Do Items
- As a user, I want to ensure that only fellow users that are allowed to “update”, based on their user type, can mark To Do Items complete
- As a user, I want to ensure that only fellow users that are allowed to “delete”, based on their user type, can delete new To Do Items

## Technical Requirements / Notes

    - Technical requirements for the core application are unchanged from the prior phases, with the addition of an Authentication Context Provider and Components that consume the Context Values and Behaviors.

1. Implement a Login/Auth React Context, “protect” the To Do application by restricting access to the various application features based on the users’ login status and capabilities.

- Define a function that can simulate a login event.
Parameters: username and password as strings.
Sets a User on the auth context, and changes login status to true.
- Define a function that can simulate a logout event.
Resets the User object and changes login status to `false.
- Define a function that can authorize a User based on a capabilty.
  - Parameters: a capability as a string.
  - Returns a boolean whether the user has the capabililty parameter.

2. Create an `<Auth />` component with the following features:

- Given a capability prop of type string, conditionally render components based on the user stored in context.
- Hide the entire interface until the user has logged in.
- Implements the following RBAC rules:
  - Logged In Users with ‘update’ permissions can click the records to mark them as complete.
  - Logged In Users with ‘create’ permissions can create new items.
  - Logged In Users with ‘delete’ permissions can delete items.
  - Logged In Users with ‘read’ permissions can see the list of To Do Items.

          - Note: since only writers can ‘create’ and add new ToDo items to state, in this lab, a person with read only access will not see any ToDo items. This will change in the next lab once we populate ToDo items from a database on page load.

1. Implement a <Login /> Component that has the following features:

- Provide an account login screen with a form.
Accepts Username and Password
On successful login, store the token as a cookie
- If a user returns and has a valid login cookie, hide the login form and consider them “Logged In”
Display a logout button instead of a form if they are “Logged In”.

### Tools you will need to complete the above requirements

#### Login/Auth Components and API

- You have been provided, in the starter-code folder, a sample application built using the `<Login />` and `<Auth />` components built during class. Get this running first, and analyze it. You will need these components to complete the Authentication tasks specified above

  - Convert the Auth/Context.js Context Provider to be a function, rather than a class
  - Convert the `<Login />` and `<Auth />` components to be implemented as ‘function’ components instead of ‘class’ components
- Once you have a working practice app, extract the Login Context and relevant components from it and incorporate them into your To Do application, implementing Authentication and Authorization as described in the requirements above

### Application Structure (proposed)

#### In this proposal

- styles.scss files may or may not be necessary for each component
- unit tests are placed in the component directory (testing one file only)
- integration tests are placed in the __tests__ directory (testing more than one file)

## UML

![UML-coming soon](/Assets/lab33.png)

- worked with [JunYoung Son](https://github.com/Junyoungson808) to complete UMLs

## Deployment

[Linked to Deployed Site]()CODESANDBOX WONT LOAD

[PR Link](https://github.com/SdMartinez13/todo-app/pull/5)

## Phase 4

- In this final phase, we’ll be requiring that users be logged in through a live authentication server, in order to see the to do items. Additionally, based on their user type, they will be allowed (or denied) to perform actions such as editing or deleting them. All To Do items will be stored in a database, accessed through a deployed API

## Before you begin

- Refer to Getting Started in the [lab submission instructions](https://codefellows.github.io/code-401-javascript-guide/reference/submission-instructions/labs/) for complete setup, configuration, deployment, and submission instructions.

Building off of your previous day’s branch, create a new branch for today called ‘auth’ and continue to work in your ‘todo’ repository.

## Phase 4 Requirements

- In Phase 4, we will finalize the functionality of the application by connecting to live servers for login, authorization, and data access

## Technical Requirements / Notes

    - Technical requirements for the core application are unchanged from the prior phases, with the addition of Performing actual HTTP requests with an Authenticated API server:

- Alter the Add, Toggle Complete, and Delete functions within your to do application to use your API instead of in memory state.
  - Fetch the current list of items from the database on application start
  - Whenever you add/update/delete an item, refresh the state so the user can instantly see the change
    - Consider: Do you re-fetch from the server every time you make a change?
    - If so, how?
    - If not, how will you stay in sync?
- Alter the Login Context to use the server to login users instead of our mock users list.
  - Be sure to store the token in state as well as in a cookie so you can reference it later.


### API Server

- You will need deployed API Server, which implements a todo item data model
  - GET /todo: Gets a list of all items
  - ‘POST /todo’: Adds an item
  - ‘PUT /todo’: Updates an item (you’ll use this to mark them as complete)
  - ‘DELETE /todo/:id’ : Deletes an item

### Authentication Server

- You will need a deployed Authenticated API Server, which supports:
  - Registration (/signup)
  - Login (/signin)
  - Authorization (via Bearer Token)
  - ACL (using user roles)
    - Make sure you have created the user roles and permissions lists that your front-end is expecting to tap into
  - To Do data model for storing the actual to do items

## UML

![UML-coming soon](/Assets/34lab.png)

## Deployment

[Linked to Deployed Site]()CODESANDBOX WONT LOAD

[PR Link](https://github.com/SdMartinez13/todo-app/pull/6)
