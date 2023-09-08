document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username === "vinit" && password === "vinit@123") {
            // Updated identity values
            const identity = {
                "sub": "Vinit Singh - 851312",
                "iss": "https://jwt.io/",
                "aud": "acc:qa57221676",
                "exp": 1992025992,
                "iat": 1682030954,
                "acr": "loa1"
            };

            // Convert identity to a JSON Web Token (JWT) string
            const jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9." + btoa(JSON.stringify(identity));

            // Redirect to the product page with the JWT in the URL
            window.location.href = "product.html?jwt=" + jwt;
        } else {
            alert("Invalid credentials. Please try again.");
        }
    });
});
