
## Tasks

### 1. Get Users data from API

Contains call to API to get info about users:

File: `users.component.ts`

Requirements:
- transform data using RxJS after request to get strong typed `User[]` after request
- get only first 5 records
- reset loading state on completion and errors
- dispay error on any errors
- avoid memory leaks on using RxJS
- display company name as uppercase (in HTML, not in model)


### 2. Implement `AuthService`

It's a global service and should keep Auth state for current user in app.

File: `auth.service.ts`

You need to implement the following methods and properties:

`login(email, password)` - no checks, we assume it's valid user. Just store user info and mark that user is authenticated.

`logout()` - remove user info and change mark that user is not authenticated.

`isAuthenticated` - to check the current state of auth

`currentUser` - should return email of authenticated user or null

### 3. Login Component

Use Reactive Forms to create Login Form functionality.

File: `login.component.ts`

Requirements:
- email input - add validations: required and email
- password input - add validations: required and min 4 symbols
- display errors
- disable Login button if form not valid
- inject and call `AuthService login` if form is valid

### 4. Header component (optional)

File: `header.component.ts`

- inject `AuthService`
- hide Login button and display user email if user is authenticated

### 5. Protect users route (optional)

File: `app-routing.module.ts`

Allow access to 
`{ path: 'users', component: UsersComponent },`
only if use is authenticted


