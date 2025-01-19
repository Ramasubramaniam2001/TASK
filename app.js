// Initialize cart from local storage
let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

// Function to update the cart modal display
function updateCartDisplay() {
    const cartItemsList = document.getElementById('cartItemsList');
    cartItemsList.innerHTML = ''; // Clear the list before updating
    if (cartItems.length > 0) {
        cartItems.forEach((item, index) => {
            const li = document.createElement('li');
            li.textContent = item;
            
            // Add Buy Button
            const buyButton = document.createElement('button');
            buyButton.textContent = "Buy Now";
			buyButton.classList.add('cart-buy-button');
            buyButton.addEventListener('click', function () {
                buyNow(item);
            });
            li.appendChild(buyButton);

            // Add Delete Button
            const deleteButton = document.createElement('button');
            deleteButton.textContent = "Delete";
			deleteButton.classList.add('cart-delete-button');	
            deleteButton.addEventListener('click', function () {
                deleteFromCart(index);
            });
            li.appendChild(deleteButton);

            cartItemsList.appendChild(li);
        });
    } else {
        const li = document.createElement('li');
        li.textContent = "Your cart is empty";
        cartItemsList.appendChild(li);
    }
}

// Add item to cart
const addToCartButtons = document.querySelectorAll('.addToCartButton');
addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        const productTitle = this.closest('.productDetails').querySelector('.productTitle').textContent;
        cartItems.push(productTitle);
        localStorage.setItem('cart', JSON.stringify(cartItems));

        this.textContent = "Added to Cart";
        this.disabled = true;
    });
});

// Show cart modal
document.getElementById('viewCartButton').addEventListener('click', function() {
    document.getElementById('cartModal').style.display = 'flex';
    updateCartDisplay();
});

// Close cart modal
document.getElementById('closeCartButton').addEventListener('click', function() {
    document.getElementById('cartModal').style.display = 'none';
});

// Load the cart display when the page loads
window.onload = function() {
    updateCartDisplay();
};

// Function to delete item from cart
function deleteFromCart(index) {
    cartItems.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cartItems));
    updateCartDisplay();
}

// Simulate buying the item
function buyNow(item) {
    alert(`You are buying: ${item}`);
    // You can replace this with a redirect to a payment page or similar action
}

// Product slider code
const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "NIKE",
    price: 2499.50
    ,
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Jordan",
    price: 5499.50,
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "ADIDAS",
    price: 3499.50,
    colors: [
      {
        code: "lightgray",
        img: "./img/blazer.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "SKECHERS",
    price: 6499.50,
    colors: [
      {
        code: "black",
        img: "./img/crater.png",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "FILA",
    price: 2999.50,
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "₹" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assign new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
