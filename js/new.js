
// const newItem = document.createElement ('li');
// newItem.classList.add('new-list');

// // create img path
// const img = document.createElement ('img')
// img.src = 'C:\Users\PT WORLD\Desktop\cake site\image\product1.jpg'
// img.classList.add('cart-img');

// // create item details
// const itemDetails = document.createElement ('div');
// itemDetails.classList.add('item-details')

// // create item name
// const itemName = document.createElement ('h3');
// itemName.classList.add('item-name');
// itemName.textContent = "${item.name}";

// // create price
// const itemPrice = document.createElement ('p');
// itemPrice.classList.add('item-price');
// itemPrice.innerHTML = 'Price: &#8358;"${item.price}"';

// // create quantity
// const itemQuantity = document.createElement ('p');
// itemQuantity.classList.add('item-quantity');
// itemQuantity.textContent = 'Instock : 1'

// // create quantity selector
// const quantitySelector = document.createElement ('div');
// quantitySelector.classList.add('quantity-selector');

// // quantity input
// const quantityInput = document.createElement ('input');
// quantityInput.type = 'number'
// quantityInput.min = '1'
// quantityInput.value = '1'

// // delete btn
// const deleteBtn = document.createElement ('button');
// deleteBtn.classList.add('btn-danger');
// deleteBtn.textContent = 'delete'

// //append

// quantitySelector.appendChild(quantityInput);
// itemDetails.appendChild(itemName);
// itemDetails.appendChild(itemPrice);
// itemDetails.appendChild(itemQuantity);
// itemDetails.appendChild(quantitySelector);
// itemDetails.appendChild(deleteBtn);
// newItem.appendChild(img);
// newItem.appendChild(itemDetails);

// const cartList = document.getElementById('cart-list');

// cartList.appendChild(newItem)


// cart.js
const cartContainer = document.querySelector('.cart-container');
const subtotalElement = document.querySelector('.subtotal');
const taxElement = document.querySelector('.tax');
const totalElement = document.querySelector('.total');


