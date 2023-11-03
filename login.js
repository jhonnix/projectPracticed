function validateLogin() {
    let ValidUsername = "jhonn";
    let ValidPassword = "capz";

    let enteredUsername = document.getElementById("username").value;
    let enteredPassword = document.getElementById("password").value;

    if (enteredUsername === ValidUsername && enteredPassword === ValidPassword) {
        alert("Login successful!");
        window.location.href = 'otherside.html';
    } else {
        alert("Login failed. Please check your username and password.");
    }
}
