

addEventListener("DOMContentLoaded", function () {
        const addToCartButtons = document.querySelectorAll(".add-to-cart-button");
        const cartValueElement = document.querySelector(".cart-value");
        const cartIcon = document.querySelector(".cart-icon");
        let cartValue = 0;

        addToCartButtons.forEach(button => {
            button.addEventListener("click", function () {
                const productName = this.getAttribute("data-product");
                const productPrice = parseFloat(this.getAttribute("data-price"));

                // Add your logic here to handle adding the product to the cart
                // For demonstration, let's just increase the cart value and update the icon
                cartValue += productPrice;
                cartValueElement.textContent = cartValue.toFixed(2);
                cartIcon.textContent = "🛒"; // Change to your preferred cart icon

                // Show a confirmation message
                alert(`${productName} added to cart. Price: $${productPrice}`);

                // Update the LP tag with the new cart value
                updateLPTag(cartValue);
            });
        });

        const logoutButton = document.getElementById("logout");
        logoutButton.addEventListener("click", function () {
            window.location.href = "login.html";
        });

        // Function to update LP tag with the new cart value
        function updateLPTag(cartValue) {
            const title = document.title;
            const x = cartValue.toFixed(2); // Format cartValue as a number with 2 decimal places

            lpTag.sdes = lpTag.sdes || [];
            lpTag.sdes.push({
                "type": "cart",
                "total": x, // Set the total to the formatted cartValue
                "currency": "USD",
                "numItems": x, // Assuming numItems should also be the formatted cartValue
                "products": [{
                    "product": {
                        "name": "Page Title: " + title,
                        "category": ""
                    },
                }]
            });
        }

      
    })

lpTag.identities.push(identityFn); 
function identityFn(callback) {
    callback({
        "sub": "Vinit Singh - 851312",
        "iss": "https://jwt.io/",
        "aud": "acc:qa57221676",
        "exp": 1992025992,
        "iat": 1682030954,
        "acr": "loa1"
    });
  }
    function lpGetAuthenticationToken(callback) {
    console.log("LP asked for id_token or auth code in Code Flow");
    var id_token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJWaW5pdCBTaW5naCAtIDg1MTMxMiIsImlzcyI6Imh0dHBzOi8vand0LmlvLyIsImF1ZCI6ImFjYzpxYTU3MjIxNjc2IiwiZXhwIjoxOTkyMDI1OTkyLCJpYXQiOjE2ODIwMzA5NTQsImFjciI6ImxvYTEifQ.A_qDctIa0QpPWgtoOMlCs6uWOlwCsj0AqOi_M810DnvNAqLGPzeCq_E67_Hl77XU7Pp6cDuaXDl0jI1mVPR78IoB0-0V2Bl9QOHhAFfES--nz79yTE1h9Fk6ZhIA7yB3lE55PvfOMCVjl2o9bR17l34sk8P2p_KiPoIjdqU-OU-sZWB8DmcREbDVNGISkXwvbmtSf9iVCLO5d-tc7ALFEdtKfr9vihW-Nsk8erJsDIO5iTF59SBv2t5kc3v5ikycbcTvCwoSnc8J7ImDDR9nK1yDAvPQIDZlbJwo3hZtNgWRbsCnbsQBGXjQk4z_q_vuUQpplHs4MYMCOTnsQAvmTw"; 
    callback(id_token);
}
