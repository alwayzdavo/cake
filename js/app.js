const searchInput = document.querySelector('.search');
const searchButton = document.querySelector('.search-btn');
const productss = document.querySelectorAll('.product');

function searchProducts() {
  const searchTerm = searchInput.value.toLowerCase();

  productss.forEach(productz => {
    const productName = productz.querySelector('h3').textContent.toLowerCase();

    if (productName.includes(searchTerm)) {
      productz.style.display = 'block';
    } else {
      productz.style.display = 'none';
    }
  });
}

searchButton.addEventListener('click', searchProducts);
searchInput.addEventListener('input', searchProducts);


// const productsPerPage = 8;
// let currentPage = 1;
// const totalPages = 2;
// const pageContainers = document.querySelectorAll('.product-container');
// const prevPageButton = document.getElementById('prev-page');
// const nextPageButton = document.getElementById('next-page');

// function showProducts(currentPage) {
//     pageContainers.forEach((container, index) => {
//       if (index + 1 === currentPage) {
//         container.style.opacity = '1';
//         container.style.display = 'flex';
//       } else {
//         container.style.opacity = '0';
//         container.style.display = 'none';
//       }
//     });
//   }
  

// function goToNextPage() {
//   currentPage = Math.min(currentPage + 1, totalPages);
//   showProducts(currentPage);
// }

// function goToPrevPage() {
//   currentPage = Math.max(currentPage - 1, 1);
//   showProducts(currentPage);
// }

// prevPageButton.addEventListener('click', goToPrevPage);
// nextPageButton.addEventListener('click', goToNextPage);

// showProducts(currentPage);


// this is for rendering html through javascripgett
const productEl = document.querySelector('.product-container1');

// render
function renderProducts() {
  products.forEach((product) => {
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
renderProducts();

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





