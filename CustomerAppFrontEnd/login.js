// Mock data for username and password
var usersData = [
    { username: 'test@sunbasedata.com', password: 'Test@123"' },
 
];

function attemptLogin() {
    // Fetching input values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    
    if (!username || !password) {
        document.getElementById('errorMessage').innerText = 'Please enter both username and password.';
        return;
    }

    // Check if the entered credentials match any user data
    var user = usersData.find(function(userData) {
        return userData.username === username && userData.password === password;
    });

    if (user) {
        document.getElementById('errorMessage').innerText = 'Login successful! Redirecting...';
            window.location.href = 'customer-List.html';
       
    } else {
        // If login is failed
        document.getElementById('errorMessage').innerText = 'Invalid username or password.';
    }
}
