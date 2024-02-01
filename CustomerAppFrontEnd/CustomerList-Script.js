document.addEventListener("DOMContentLoaded", function () {
    fetchCustomerData();
});

function fetchCustomerData() {
    fetch("http://localhost:8080/api/customers/allCustomers")
        .then(response => response.json())
        .then(data => {
            console.log("Data Fetched:", data);
            displayCustomers(data);
        })
        .catch(error => {
            console.error('Error fetching customer data:', error);
        });
}

function displayCustomers(customers) {
    const tableBody = document.getElementById("customerTableBody");

    customers.forEach(customer => {
        const row = createCustomerRow(customer);
        tableBody.appendChild(row);
    });
}
function createCustomerRow(customer) {
    const row = document.createElement("tr");
    row.id = `row_${customer.id}`;
    row.innerHTML = `
        <td>${customer.id}</td>
        <td>${customer.first_name}</td>
        <td>${customer.last_name}</td>
        <td>${customer.street}</td>
        <td>${customer.address}</td>
        <td>${customer.city}</td>
        <td>${customer.state}</td>
        <td>${customer.email}</td>
        <td>${customer.phone}</td>
        <td>
            <button onclick="deleteCustomer(${customer.id})">-</button>

            <button onclick="editCustomer(${customer.id})">✎</button>
        </td>
    `;

    return row;
}

function searchCustomers() {
    const searchInput = document.getElementById("searchInput");
    const searchTerm = searchInput.value.toLowerCase();

    fetch("http://localhost:8080/api/customers/allCustomers")
        .then(response => response.json())
        .then(data => {
            const filteredCustomers = data.filter(customer =>
                Object.values(customer).some(value =>
                    value.toString().toLowerCase().includes(searchTerm)
                )
            );

            // Clear existing table rows
            const tableBody = document.getElementById("customerTableBody");
            tableBody.innerHTML = "";

            // Display filtered customers
            filteredCustomers.forEach(customer => {
                const row = createCustomerRow(customer);
                tableBody.appendChild(row);
            });
        })
        .catch(error => {
            console.error('Error fetching and filtering customer data:', error);
        });
}


function deleteCustomer(customerId) {
    fetch(`http://localhost:8080/api/customers/delById/${customerId}`, {
        method: "DELETE",
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.text();
    })
    .then(data => {
        console.log("Customer deleted successfully:", data);

        // Remove the corresponding row from the table
        const rowToDelete = document.getElementById(`row_${customerId}`);
        if (rowToDelete) {
            rowToDelete.remove();
        } else {
            console.warn(`Row with ID ${customerId} not found in the table.`);
        }
    })
    .catch(error => {
        console.error('Error deleting customer:', error);
        // Handle errors, display an error message, or perform other actions
    });
}

function editCustomer(customerId) {
    // Redirect to the edit page with the customer ID as a parameter
    window.location.href = `editcustomer.html?id=${customerId}`;
}



function navigateToAddCustomer() {
    window.location.href = "addcustomer.html";
}

