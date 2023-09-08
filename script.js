document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username === "vinit" && password === "vinit@123") {
            window.location.href = "product.html";
        } else {
            alert("Invalid credentials. Please try again.");
        }
    });
});