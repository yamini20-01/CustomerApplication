This is a simple web application for managing customer data. It consists of a front-end implemented in HTML and JavaScript, and a back-end implemented using the Spring Boot framework in Java.                      

Step-1:
First thing we need to open the backend folder in the intelliJ IDE or any other IDE .Then run the Customer Application.
Step-2:
And open the frontend folder in the Visual Studio Code and run the login file.Then Login page will be opened in Browser .
With valid credentials you can logged into the application.
username : test@sunbasedata.com
password :Test@123
If the entered credentials are valid then a customer details page will be opened.It has customer details table,Add New Customer button ,search button,sync button.
Using Add new Customer Button we can add the new customer details,
Using search button we can retrieve the specific details,
and Inside the table we have another attribute named as "Action".The Action column contains the update and delete operations symbols.
We can update the customers data by clicking on '-' symbol and can remove the customer details from database by clicking on removing '/' symbol.



### Backend (Java/Spring Boot):
1. *Customer Entity:* The application defines a Customer entity with attributes such as id, first_name, last_name, street, address, city, state, email, and phone.

2. *Customer Repository:* The CustomerRepository interface extends JpaRepository and provides methods for database operations related to customers, including finding customers by UUID and deleting customers by UUID.

3. *Customer Service:* The CustomerService class contains methods for retrieving all customers, retrieving a customer by UUID, creating or updating a customer, creating or updating a list of customers, and deleting a customer by UUID.

4. *Customer Controller:* The CustomerController class exposes RESTful endpoints for performing CRUD operations on customers. It includes endpoints for getting all customers, getting a customer by UUID, creating, updating, and deleting customers.

### Frontend (HTML, JavaScript):
1. *Customer List Page (customer-list.html):*
   - Displays a table of customers.
   - Allows searching for customers based on various fields.
   - Provides buttons to add a new customer, sync data, and delete or edit existing customers.
   - Uses JavaScript to fetch and display customer data from the backend.

2. *Customer Edit Page (editcustomer.html):*
   - Allows editing customer details.
   - Retrieves customer data by UUID from the backend and populates the form.
   - Submits changes to the backend for updating.

3. *Customer Add Page (addcustomer.html):*
   - Provides a form for adding a new customer.
   - Submits the new customer data to the backend for creation.

4. *JavaScript (CustomerList-Script.js, addcustomer.js, SyncData.js):*
   - Handles various functionalities such as fetching, displaying, and manipulating customer data.
   - Implements functionality for deleting customers and navigating to the edit and add customer pages.
   - Includes a function (authenticateAndStoreCustomerList) to authenticate with an external API, fetch customer data, and store it in the local backend.

### Authentication and External Data Sync:
The application includes a function (authenticateAndStoreCustomerList) that performs the following steps:
1. Authenticates with an external API using credentials.
2. Retrieves a token upon successful authentication.
3. Uses the token to fetch customer data from the external API.
4. Stores the fetched customer data in the local backend using a custom endpoint (/api/customers/addListOfCustomers).

### Note:
- The application uses the Fetch API for making asynchronous requests to the backend.
- The frontend includes basic HTML forms and elements for user interaction.
- Error handling is implemented to manage HTTP errors during data retrieval or manipulation

Frontend:
1. Login Page (index.html):

Users enter their username and password in the login form.
Clicking the "Login" button triggers the attemptLogin function in the login.js script.

2. attemptLogin Function (login.js):

Fetches the entered username and password from the input fields.
Performs simple validation to ensure both fields are filled out.
Checks if the entered credentials match any user data in the usersData array.
If credentials are valid:
Displays a success message.
Redirects to the 'customer-List.html' page after a brief delay (1.5 seconds).
If credentials are invalid, displays an error message.

3. Redirect to Customer List Page ('customer-List.html'):

Upon successful login, the user is redirected to the 'customer-List.html' page.
The customer list page contains a table and buttons for actions.

4. Customer List Page ('customer-List.html'):

Displays the 'Customer List' heading.
Contains buttons for actions like adding a new customer, syncing data, and searching.
The 'Sync' button triggers the authenticateAndStoreCustomerList function in the SyncData.js script.

5. authenticateAndStoreCustomerList Function (SyncData.js):

Performs authentication by sending a request to the 'assignment_auth.jsp' endpoint with login credentials.
If authentication is successful, obtains a bearer token.
Uses the token to fetch the customer list from 'assignment.jsp?cmd=get_customer_list'.
Sends a POST request to the local endpoint ('http://localhost:8080/api/customers/addListOfCustomers') to store the customer list data.
Logs success or failure messages.


Backend:
1. Customer Entity (Customer.java):

Represents the data model for a customer.
Annotated with JPA annotations for entity mapping.
Includes attributes such as uuid, first_name, last_name, street, address, city, state, email, and phone.
Uses the @Id annotation for the primary key (uuid) and the @GeneratedValue annotation with a UUID generator.

2. Customer Repository (CustomerRepository.java):

Extends JpaRepository for CRUD operations on the Customer entity.
Includes custom query methods:
Optional<Customer> findByUuid(UUID uuid): Retrieves a customer by UUID.
void deleteByUuid(UUID uuid): Deletes a customer by UUID using a custom query.

3. Customer Controller (CustomerController.java):

A REST controller that handles HTTP requests related to customers.
Defines request mappings under /api/customers.
Includes methods for:
Retrieving all customers (getAllCustomers).
Retrieving a customer by UUID (getCustomerById).
Adding a new customer (createCustomer).
Updating a customer (updateCustomer).
Adding a list of customers (createCustomers).
Deleting a customer by UUID (deleteCustomer).

4. Customer Service (CustomerService.java):

Implements business logic for customer-related operations.
Autowires the CustomerRepository for data access.
Provides methods for:
Retrieving all customers (getAllCustomers).
Retrieving a customer by UUID (getCustomerByUuid).
Creating or updating a customer (createOrUpdateCustomer).
Creating or updating a list of customers (createOrUpdateCustomers).
Deleting a customer by UUID (deleteCustomer).

