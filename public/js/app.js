// this is for rendering html through JavaScript
const productEl = document.querySelector('.product-container1');

// render
function renderProducts(productsToRender) {
  productEl.innerHTML = ''; // Clear the previous products

  productsToRender.forEach((product) => {
    productEl.innerHTML += `
      <div class="product-item">
        <div class="product-container">
          <img src="${product.imgSrc}" alt="">
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <p>&#8358;${product.price}</p>
          <button onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
      </div>
    `;
  });
}

renderProducts(products);


let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(id) {
  if (cart.some((item) => item.id === id)) {
    alert('Product already in cart');
  } else {
    const item = products.find((product) => product.id === id);

    cart.push({
      id: item.id,
      imgSrc: item.imgSrc,
      name: item.name,
      instock: item.instock,
      description: item.description,
      price: item.price,
      numberOfUnits: 1
     
    });


    localStorage.setItem('cart', JSON.stringify(cart));

    
    updateCartCount();
  }

}

function updateCartCount() {
  const cartItemCountElement = document.querySelector('.cart-item-count');
  if (cartItemCountElement) {
    cartItemCountElement.textContent = cart.length;
  }
}





