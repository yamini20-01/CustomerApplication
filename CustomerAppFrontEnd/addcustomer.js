document.addEventListener("DOMContentLoaded", function () {
    const addCustomerForm = document.getElementById("addCustomerForm");

    addCustomerForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const formData = {
            first_name: document.getElementById("firstName").value,
            last_name: document.getElementById("lastName").value,
            street: document.getElementById("street").value,
            address: document.getElementById("address").value,
            city: document.getElementById("city").value,
            state: document.getElementById("state").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value
        };

        // Add logic to send formData to the backend
        fetch("http://localhost:8080/api/customers/addCustomer", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Customer added successfully:", data);
            // Redirect to the customer list page
            window.location.href = "customer-List.html";
        })
        .catch(error => {
            console.error('Error adding customer:', error);
            // Handle errors, display an error message, or perform other actions
        });
    });
});
