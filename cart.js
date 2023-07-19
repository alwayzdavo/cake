// cart.js
const cartContainer = document.querySelector('.cart-container');
const subtotalElement = document.querySelector('.subtotal-amount');
const taxElement = document.querySelector('.tax-amount');
const totalElement = document.querySelector('.total-amount');
const totalInCart = document.querySelector('.cart-item-count');

function renderCart() {
  cartContainer.innerHTML = '';

  let savedCart = localStorage.getItem('cart');
  if (savedCart) {
    cart = JSON.parse(savedCart);
  } else {
    cart = [];
  }

  cart.forEach((item) => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    
    cartItem.innerHTML = `
      <div class="cart-item-content">
        <div class="item-details">
          <img src="${item.imgSrc}" alt="" class="item-img">
          <div class="item-des">
            <div class="product-name">${item.name}</div>
            <p>${item.description}</p>
            <h2>&#8358;${item.price}</h2>
          </div>
        </div>
        <div class="item-actions">
          <div class="quantity-selector">
            <button class="quantity-button minus-button" onclick="changeNumberOfUnits('minus', ${item.id})">-</button>
            <span class="quantity-value">${item.numberOfUnits}</span>
            <button class="quantity-button plus-button" onclick="changeNumberOfUnits('plus', ${item.id})">+</button>
          </div>
        </div class="button-container">
        <button class="delete-button" onclick="removeItemFromCart(${item.id})">Delete</button>
      </div>
    `;
    
    cartContainer.appendChild(cartItem);
  });
   
  updateCart(); // Call the updateCart function after rendering the cart
}

// Update the cart
function updateCart() {
  rendersubTotal()
}


 // Change the number of units
 function changeNumberOfUnits(action, id) {
  for (let i = 0; i < cart.length; i++) {
    const item = cart[i];
    if (item.id === id) {
      if (action === 'minus' && item.numberOfUnits > 1) {
        item.numberOfUnits--;
      } else if (action === 'plus' && item.numberOfUnits < item.instock) {
        item.numberOfUnits++;
      }
      break; // Exit the loop once the item is found and updated
    }
  }

  updateCart(); // Call the updateCart function after changing the number of units
  renderCart();
}

function removeItemFromCart(id) {
  cart = cart.filter((item) => item.id !== id);

  updateCart();
  renderCart();

  const cartItem = document.querySelector(`.cart-item[data-id="${id}"]`);
  if (cartItem) {
    cartItem.remove(); // Remove the cart item from the DOM
  }
}





// Calculate subtotal, tax, and total
function rendersubTotal() {
  let subtotal = 0,
  totalItem = 0;
  cart.forEach((item) => {
    subtotal += item.price * item.numberOfUnits;
    totalItem += item.numberOfUnits;
  });

  const taxRate = 0.1; // Assume 10% tax rate
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  // Round down the total to remove decimals
  const roundedTotal = Math.floor(total);

  // Format total with commas and add .00 if no decimal places
  const formattedTotal = roundedTotal.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  // Update subtotal, tax, and total elements in the UI
  subtotalElement.innerHTML = `&#8358;${subtotal.toFixed(2)}`;
  taxElement.innerHTML = ` &#8358;${tax.toFixed(2)}`;
  totalElement.innerHTML = `&#8358;${formattedTotal}`;
  totalInCart.innerHTML = totalItem
 
  // Save the updated cart to localStorage
  localStorage.setItem('cart', JSON.stringify(cart));
}



renderCart();
