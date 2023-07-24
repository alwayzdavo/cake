const searchInput = document.querySelector('.search');
const searchB = document.querySelector('.search-btn');

searchB.addEventListener('click', handleSearch);

function handleSearch() {
  const searchTerm = searchInput.value.trim().toLowerCase();

  // Filter products based on the search term
  const filteredProducts = products.filter((product) => {
    return (
      product.name.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm)
    );
  });

  // Call the renderProducts function with the filtered products
  renderProducts(filteredProducts);

  console.log(filteredProducts)
}

function renderProducts(filteredProducts = products) {
    const productEl = document.querySelector('.product-container1');
    const fragment = document.createDocumentFragment(); // Create a document fragment
  
    // Loop through the filteredProducts and create the product elements
    filteredProducts.forEach((product) => {
      const productItem = document.createElement('div');
      productItem.classList.add('product-item');
      productItem.innerHTML = `
        <div class="product-container">
          <img src="${product.imgSrc}" alt="">
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <p>&#8358;${product.price}</p>
          <button onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
      `;
  
      fragment.appendChild(productItem); // Append the product element to the fragment
    });
  
    // Clear the previous products and append the new product elements
    productEl.innerHTML = '';
    productEl.appendChild(fragment); // Add all product elements to the DOM at once
  }
  
  
  
