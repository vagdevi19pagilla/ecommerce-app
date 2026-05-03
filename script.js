let cart = JSON.parse(localStorage.getItem("cart")) || [];

fetch('http://localhost:5000/api/products')
.then(res => res.json())
.then(data => {
    let html = '';

    data.forEach(p => {
        html += `
        <div>
            <h3>${p.name}</h3>
            <p>₹${p.price}</p>
            <button onclick='addToCart(${JSON.stringify(p)})'>Add to Cart</button>
        </div>`;
    });

    document.getElementById('products').innerHTML = html;
});

function addToCart(product) {
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to Cart");
}