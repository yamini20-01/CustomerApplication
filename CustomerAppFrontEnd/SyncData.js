async function authenticateAndStoreCustomerList() {
    const authenticationUrl = 'https://qa.sunbasedata.com/sunbase/portal/api/assignment_auth.jsp';
    const customerListUrl = 'https://qa.sunbasedata.com/sunbase/portal/api/assignment.jsp?cmd=get_customer_list';
    const storeCustomerListUrl = ' http://localhost:8080/api/customers/addListOfCustomers';  // Replace with your actual endpoint
    const credentials = {
        login_id: 'test@sunbasedata.com',
        password: 'Test@123'
    };

    try {
        // Step 1: Authenticate and get the token
        const authenticationResponse = await fetch(authenticationUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        });

        if (!authenticationResponse.ok) {
            console.error('Authentication failed. Status:', authenticationResponse.status);
            return;
        }

        const authenticationData = await authenticationResponse.json();
        const bearerToken = authenticationData.token;

        // Step 2: Use the obtained token to fetch the customer list
        const customerListResponse = await fetch(customerListUrl, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${bearerToken}`,
            },
        });

        if (!customerListResponse.ok) {
            console.error('Failed to fetch customer list. Status:', customerListResponse.status);
            return;
        }

        const customerListData = await customerListResponse.json();

        // Step 3: Store the customer list data
        const storeCustomerListResponse = await fetch(storeCustomerListUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(customerListData),
        });

        if (!storeCustomerListResponse.ok) {
            console.error('Failed to store customer list data. Status:', storeCustomerListResponse.status);
            return;
        }

        console.log('Customer list data stored successfully.');
    } catch (error) {
        console.error('Error during authentication, fetching customer list, or storing data:', error);
    }
}