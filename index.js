

// Login functionality
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simple validation
    if (email && password) {
        // In a real app, you would make an API call here
        // For demo purposes, we'll just show the main app
        document.getElementById('loginPage').style.display = 'none';
        document.getElementById('mainApp').style.display = 'block';

        // Update user profile
        document.getElementById('userName').textContent = email.split('@')[0];
        document.getElementById('userAvatar').textContent = email[0].toUpperCase();
        document.getElementById('userProfile').style.display = 'flex';

        // Show welcome message
        alert('Welcome back to FreshFruits!');
    } else {
        alert('Please fill in all fields');
    }
});

// Signup functionality
document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validation 
    if (!name || !email || !password || !confirmPassword) {
        alert('Please fill in all fields');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    if (!document.getElementById('agreeTerms').checked) {
        alert('Please agree to the Terms & Conditions');
        return;
    }

    // In a real app, you would make an API call here
    // For demo purposes, we'll just show the main app 
    document.getElementById('loginPage').style.display = 'none';
    document.getElementById('mainApp').style.display = 'block';

    // Update user profile
    document.getElementById('userName').textContent = name;
    document.getElementById('userAvatar').textContent = name[0].toUpperCase();
    document.getElementById('userProfile').style.display = 'flex';

    // Show welcome message 
    alert(`Welcome to FreshFruits, ${name}! Your account has been created successfully.`);
});

// Toggle between login and signup forms 
document.getElementById('showSignup').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('loginContainer').style.display = 'none';
    document.getElementById('signupContainer').style.display = 'block';
});

document.getElementById('showLogin').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('signupContainer').style.display = 'none';
    document.getElementById('loginContainer').style.display = 'block';
});

// Logout functionality
function logout() {
    if (confirm('Are you sure you want to logout?')) {
        document.getElementById('mainApp').style.display = 'none';
        document.getElementById('loginPage').style.display = 'flex';
        // Reset to login form
        document.getElementById('signupContainer').style.display = 'none';
        document.getElementById('loginContainer').style.display = 'block';
        // Clear cart on logout
        cartItems = [];
        updateCartDisplay();
        // Reset login form
        document.getElementById('loginForm').reset();
        document.getElementById('signupForm').reset();
    }
}


// Page Navigation
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    // Show the selected page
    document.getElementById(pageId).classList.add('active');

    // Update active nav link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
    });

    // Update cart displays if needed
    if (pageId === 'cart') {
        updateCartPage();
    } else if (pageId === 'checkout') {
        updateCheckoutPage();
    }

    // Scroll to top
    window.scrollTo(0, 0);

    // Close mobile menu if open
    document.querySelector('.nav-links').classList.remove('active');

    return false;

}



// Mobile menu toggle
document.querySelector('.menu-toggle').addEventListener('click', function () {
    document.querySelector('.nav-links').classList.toggle('active');
});


// Product data for search functionality and rendering
const products = [
    {
        id: 1,
        name: 'Fresh Apples',
        category: 'fruits',
        price: 120,
        originalPrice: 150,
        image: './Fruits image/download.jpeg',
        description: 'Crisp and juicy organic apples'
    },
    {
        id: 2,
        name: 'Oranges',
        category: 'fruits',
        price: 80,
        originalPrice: 100,
        image: './Fruits image/download (3).jpeg',
        description: 'Vitamin C rich sweet oranges'
    },
    {
        id: 3,
        name: 'Banana',
        category: 'fruits',
        price: 60,
        originalPrice: 75,
        image: './Fruits image/download (5).jpeg',
        description: 'Perfectly ripe organic bananas'
    },
    {
        id: 4,
        name: 'Mango',
        category: 'fruits',
        price: 72,
        originalPrice: 90,
        image: './Fruits image/download (1).jpeg',
        description: 'Rich in Vitamin C and A, essential for immune system'
    },
    {
        id: 5,
        name: 'Watermelon',
        category: 'fruits',
        price: 48,
        originalPrice: 60,
        image: './Fruits image/download (2).jpeg',
        description: 'Watermelon helps with hydration'
    },
    {
        id: 6,
        name: 'Grapes',
        category: 'fruits',
        price: 96,
        originalPrice: 120,
        image: './Fruits image/download (4).jpeg',
        description: 'Grapes are beneficial for heart health'
    },
    {
        id: 7,
        name: 'Papaya',
        category: 'fruits',
        price: 120,
        originalPrice: 150,
        image: './Fruits image/download (6).jpeg',
        description: 'Papaya fruit benefits include improved digestion'
    },
    {
        id: 8,
        name: 'Guava',
        category: 'fruits',
        price: 68,
        originalPrice: 85,
        image: './Fruits image/download (7).jpeg',
        description: 'Guava fruit is beneficial for immunity, heart health'
    },
    {
        id: 9,
        name: 'Pineapple',
        category: 'fruits',
        price: 80,
        originalPrice: 100,
        image: './Fruits image/Pineapple Photos - Download Free High-Quality Pictures _ Freepik.jpeg',
        description: 'Pineapple is rich in vitamins, enzymes and antioxidants'
    },
    {
        id: 10,
        name: 'Cherry',
        category: 'fruits',
        price: 200,
        originalPrice: 240,
        image: './Fruits image/download 11.jpeg',
        description: 'Sweet and tangy cherries'
    },
    {
        id: 11,
        name: 'Strawberries',
        category: 'fruits',
        price: 180,
        originalPrice: 270,
        image: './Fruits image/Strawberry .jpeg',
        description: 'Fresh and juicy strawberries'
    },
    {
        id: 12,
        name: 'Jackfruit',
        category: 'fruits',
        price: 90,
        originalPrice: 120,
        image: './Fruits image/Jackfruit Juicy PNG Images (Transparent HD Photo Clipart).jpeg',
        description: 'Tasty and nutritious jackfruit'
    },
    {
        id: 13,
        name: 'Dragon Fruit',
        category: 'fruits',
        price: 190,
        originalPrice: 270,
        image: './Fruits image/Dragon Fruit.jpeg',
        description: 'Tasty and nutritious dragon fruit'
    },
    {
        id: 14,
        name: 'kiwi Fruit',
        category: 'fruits',
        price: 150,
        originalPrice: 200,
        image: './Fruits image/download 13.jpeg',
        description: 'Tasty and nutritious kiwi fruit'
    },
    {
        id: 15,
        name: 'Musk Melon',
        category: 'fruits',
        price: 180,
        originalPrice: 200,
        image: './Fruits image/download 12.jpeg',
        description: 'Musk melons grow best in well-drained'
    },
    {
        id: 16,
        name: 'Premium Almonds',
        category: 'dry-fruits',
        price: 900,
        originalPrice: 1200,
        image: './Dry Fruits image/Almond Photos - Download Free High-Quality Pictures _ Freepik.jpeg',
        description: 'Rich in vitamin E and healthy fats'
    },
    {
        id: 17,
        name: 'Premium Walnuts',
        category: 'dry-fruits',
        price: 850,
        originalPrice: 1100,
        image: './Dry Fruits image/Nozes.jpeg',
        description: 'Omega-3 rich brain food'
    },
    {
        id: 18,
        name: 'Premium Cashews',
        category: 'dry-fruits',
        price: 950,
        originalPrice: 1300,
        image: './Dry Fruits image/undefined.jpeg',
        description: 'Creamy and delicious cashews'
    },
    {
        id: 19,
        name: 'Premium Anjeer',
        category: 'dry-fruits',
        price: 560,
        originalPrice: 700,
        image: './Dry Fruits image/5 Easy Ways To Enjoy Anjeer Everyday.jpeg',
        description: 'Nutritious and flavorful figs'
    },
    {
        id: 20,
        name: 'Premium Dates',
        category: 'dry-fruits',
        price: 225,
        originalPrice: 300,
        image: './Dry Fruits image/12 health benefits of dates, the oldest cultivated superfoods.jpeg',
        description: 'Nutritious and flavorful dates'
    },
    {
        id: 21,
        name: 'Dried Mango Slices',
        category: 'dry-fruits',
        price: 225,
        originalPrice: 300,
        image: './Dry Fruits image/Mangostreifen, getrocknet, Sparpack.jpeg',
        description: 'Nutritious and flavorful mango slices'
    },
    
    {
        id: 22,
        name: 'Roasted Chestnuts',
        category: 'dry-fruits',
        price: 175,
        originalPrice: 220,
        image: './Dry Fruits image/Roasted Chestnuts.jpeg',
        description: 'Nutritious and flavorful roasted chestnuts'
    },
    {
        id: 23,
        name: 'Black Raisins',
        category: 'dry-fruits',
        price: 200,
        originalPrice: 225,
        image: './Dry Fruits image/Coconut Oil.jpeg',
        description: 'Sweet and chewy black raisins'
    },
    {
        id: 24,
        name: 'Pecans Nuts',
        category: 'dry-fruits',
        price: 280,
        originalPrice: 320,
        image: './Dry Fruits image/A Guide to Pecans.jpeg',
        description: 'Buttery and rich pecan nuts'
    },
    
];

// Cart functionality
let cartItems = [];

// Initialize shop page
function initializeShopPage() {
    renderShopProducts('all');
}

// Render products using map function
function renderShopProducts(category) {
    const shopGrid = document.querySelector('.shop-grid');

    const filteredProducts = category === 'all'
        ? products
        : products.filter(product => product.category === category);

    const productsHTML = filteredProducts.map(product => `
        <div class="shop-item" data-category="${product.category}">
            <div class="shop-item-image">
                <img src="${product.image}" alt="${product.name}" onerror="this.src='./placeholder-image.jpg'">
            </div>
            <div class="shop-item-details">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class="price">
                    ${product.price}
                    <span class="original-price">${product.originalPrice}</span>
                    <span class="discount-badge">
                        ${Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </span>
                </div>
                <div class="shop-item-actions">
                    <a href="#" class="btn" onclick="addToCart('${product.name}', ${product.price}, '${product.image}')">Add to Cart</a>
                    <div class="favorite-btn" onclick="toggleFavorite(this)">
                        <i class="fa-solid fa-heart"></i>
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    shopGrid.innerHTML = productsHTML;
}

// Toggle favorite functionality
function toggleFavorite(button) {
    button.classList.toggle('active');
    const productName = button.closest('.shop-item-details').querySelector('h3').textContent;
    if (button.classList.contains('active')) {
        showNotification(`${productName} added to favorites!`);
    } else {
        showNotification(`${productName} removed from favorites!`);
    }
}

// Product filtering with map
function filterProducts(category) {
    const filterBtns = document.querySelectorAll('.filter-btn');

    // Update active filter button
    filterBtns.forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    // Render filtered products
    renderShopProducts(category);
}

// Enhanced search functionality with map
function searchProducts() {
    const searchInput = document.querySelector('.search-input');
    const searchResults = document.getElementById('searchResults');
    const query = searchInput.value.toLowerCase();

    if (query.length < 2) {
        searchResults.style.display = 'none';
        return;
    }

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
    );

    if (filteredProducts.length > 0) {
        const searchResultsHTML = filteredProducts.map(product => `
            <div class="search-result-item" onclick="selectProduct(${product.id})">
                <div style="display: flex; align-items: center; gap: 10px;">
                    <img src="${product.image}" alt="${product.name}" style="width: 30px; height: 30px; object-fit: cover; border-radius: 5px;">
                    <div>
                        <strong>${product.name}</strong>
                        <div style="font-size: 0.8rem; color: #666;">${product.description}</div>
                        <div style="font-size: 0.9rem; color: var(--primary-color); font-weight: 600;">₹${product.price}</div>
                    </div>
                </div>
            </div>
        `).join('');

        searchResults.innerHTML = searchResultsHTML;
        searchResults.style.display = 'block';
    } else {
        searchResults.innerHTML = '<div class="search-result-item">No products found</div>';
        searchResults.style.display = 'block';
    }
}

// Select product from search results
function selectProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        document.querySelector('.search-input').value = product.name;
        document.getElementById('searchResults').style.display = 'none';

        // Navigate to shop page and filter to show the product
        showPage('shop');

        // Set active filter based on product category
        const filterBtns = document.querySelectorAll('.filter-btn');
        filterBtns.forEach(btn => {
            btn.classList.remove('active');
            if (btn.textContent.toLowerCase().includes(product.category)) {
                btn.classList.add('active');
            }
        });

        // Render products and highlight the selected one
        setTimeout(() => {
            renderShopProducts(product.category);

            // Scroll to and highlight the product
            const productElements = document.querySelectorAll('.shop-item');
            productElements.forEach(element => {
                const productName = element.querySelector('h3').textContent;
                if (productName === product.name) {
                    element.style.boxShadow = '0 0 0 3px var(--primary-color)';
                    element.style.transform = 'scale(1.02)';
                    element.scrollIntoView({ behavior: 'smooth', block: 'center' });

                    // Remove highlight after 3 seconds
                    setTimeout(() => {
                        element.style.boxShadow = '';
                        element.style.transform = '';
                    }, 3000);
                }
            });
        }, 500);
    }
}

// Enhanced add to cart function
function addToCart(productName, price, image) {
    // Check if item already in cart
    const existingItem = cartItems.find(item => item.name === productName);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cartItems.push({
            name: productName,
            price: price,
            quantity: 1,
            image: image
        });
    }

    updateCartDisplay();
    showNotification(`${productName} added to cart!`);

    // Update cart dropdown to show the new item
    document.getElementById('cartDropdown').classList.add('active');

    return false;
}

// Enhanced update cart display with map
function updateCartDisplay() {
    const cartCount = document.getElementById('cartCount');
    const cartItemsContainer = document.getElementById('cartItems');
    const cartItemsCount = document.getElementById('cartItemsCount');
    const cartTotal = document.getElementById('cartTotal');

    // Update cart count
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    // Update cart items count
    cartItemsCount.textContent = `${cartItems.length} ${cartItems.length === 1 ? 'item' : 'items'}`;

    // Update cart items with map
    if (cartItems.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart">
                <i class="fa-solid fa-cart-shopping"></i>
                <p>Your cart is empty</p>
            </div>
        `;
    } else {
        const cartItemsHTML = cartItems.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" onerror="this.src='./placeholder-image.jpg'">
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    <p>${item.quantity} ${item.quantity === 1 ? 'kg' : 'kgs'}</p>
                    <div class="cart-item-price">₹${(item.price * item.quantity).toFixed(2)}</div>
                </div>
                <button class="cart-item-remove" onclick="removeCartItem(this)">
                    <i class="fa-solid fa-times"></i>
                </button>
            </div>
        `).join('');

        cartItemsContainer.innerHTML = cartItemsHTML;
    }

    // Update cart total
    const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `₹${total.toFixed(2)}`;
}

// Enhanced update cart page with map
function updateCartPage() {
    const cartTableBody = document.getElementById('cartTableBody');
    const cartSubtotal = document.getElementById('cartSubtotal');
    const cartTax = document.getElementById('cartTax');
    const cartTotalAmount = document.getElementById('cartTotalAmount');

    if (cartItems.length === 0) {
        cartTableBody.innerHTML = `
            <tr>
                <td colspan="5" style="text-align: center; padding: 40px;">
                    <div class="empty-cart">
                        <i class="fa-solid fa-cart-shopping"></i>
                        <p>Your cart is empty</p>
                        <a href="#" class="btn" onclick="showPage('shop')" style="margin-top: 15px;">Start Shopping</a>
                    </div>
                </td>
            </tr>
        `;
    } else {
        const cartTableHTML = cartItems.map(item => `
            <tr>
                <td>
                    <div style="display: flex; align-items: center; gap: 10px;">
                        <img src="${item.image}" alt="${item.name}" class="cart-item-image" onerror="this.src='./placeholder-image.jpg'">
                        <span>${item.name}</span>
                    </div>
                </td>
                <td>₹${item.price.toFixed(2)}/kg</td>
                <td>
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="updateQuantity('${item.name}', -1)">-</button>
                        <span>${item.quantity} kg</span>
                        <button class="quantity-btn" onclick="updateQuantity('${item.name}', 1)">+</button>
                    </div>
                </td>
                <td>₹${(item.price * item.quantity).toFixed(2)}</td>
                <td>
                    <button class="cart-item-remove" onclick="removeCartItemFromTable('${item.name}')">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </td>
            </tr>
        `).join('');

        cartTableBody.innerHTML = cartTableHTML;
    }

    // Update totals
    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.05; // 5% tax
    const total = subtotal + tax + 50; // ₹50 shipping

    cartSubtotal.textContent = `₹${subtotal.toFixed(2)}`;
    cartTax.textContent = `₹${tax.toFixed(2)}`;
    cartTotalAmount.textContent = `₹${total.toFixed(2)}`;
}

// Enhanced update checkout page with map
function updateCheckoutPage() {
    const checkoutItems = document.getElementById('checkoutItems');
    const checkoutSubtotal = document.getElementById('checkoutSubtotal');
    const checkoutTax = document.getElementById('checkoutTax');
    const checkoutTotal = document.getElementById('checkoutTotal');

    if (cartItems.length === 0) {
        checkoutItems.innerHTML = `
            <div class="empty-cart">
                <i class="fa-solid fa-cart-shopping"></i>
                <p>Your cart is empty</p>
                <a href="#" class="btn" onclick="showPage('shop')" style="margin-top: 15px;">Start Shopping</a>
            </div>
        `;
    } else {
        const checkoutItemsHTML = cartItems.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" onerror="this.src='./placeholder-image.jpg'">
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    <p>${item.quantity} ${item.quantity === 1 ? 'kg' : 'kgs'}</p>
                    <div class="cart-item-price">₹${(item.price * item.quantity).toFixed(2)}</div>
                </div>
            </div>
        `).join('');

        checkoutItems.innerHTML = checkoutItemsHTML;
    }

    // Update totals
    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.05; // 5% tax
    const total = subtotal + tax + 50; // ₹50 shipping

    checkoutSubtotal.textContent = `₹${subtotal.toFixed(2)}`;
    checkoutTax.textContent = `₹${tax.toFixed(2)}`;
    checkoutTotal.textContent = `₹${total.toFixed(2)}`;
}

// Notification system
function showNotification(message) {
    // Remove existing notification if any
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fa-solid fa-check-circle"></i>
            <span>${message}</span>
        </div>
    `;

    document.body.appendChild(notification);

    // Add styles if not already added
    if (!document.querySelector('#notification-styles')) {
        const styles = document.createElement('style');
        styles.id = 'notification-styles';
        styles.textContent = `
            .notification {
                position: fixed;
                top: 100px;
                right: 20px;
                background: var(--primary-color);
                color: white;
                padding: 15px 20px;
                border-radius: 5px;
                box-shadow: 0 5px 15px rgba(0,0,0,0.2);
                z-index: 10000;
                animation: slideIn 0.3s ease, slideOut 0.3s ease 2.7s;
                max-width: 300px;
            }
            .notification-content {
                display: flex;
                align-items: center;
                gap: 10px;
            }
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOut {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
        document.head.appendChild(styles);
    }

    // Auto remove after 3 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 3000);
}

// Initialize the shop when the page loads
document.addEventListener('DOMContentLoaded', function () {
    initializeShopPage();
});

// Update the showPage function to initialize shop when needed
const originalShowPage = showPage;
showPage = function (pageId) {
    originalShowPage(pageId);

    if (pageId === 'shop') {
        initializeShopPage();
    }
};
// Remove item from cart
function removeCartItem(button) {
    const itemElement = button.closest('.cart-item');
    const itemName = itemElement.querySelector('h4').textContent;

    cartItems = cartItems.filter(item => item.name !== itemName);
    updateCartDisplay();
}


// Update cart display
function updateCartDisplay() {
    const cartCount = document.getElementById('cartCount');
    const cartItemsContainer = document.getElementById('cartItems');
    const cartItemsCount = document.getElementById('cartItemsCount');
    const cartTotal = document.getElementById('cartTotal');

    // Update cart count
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    // Update cart items count
    cartItemsCount.textContent = `${cartItems.length} ${cartItems.length === 1 ? 'item' : 'items'}`;

    // Update cart items
    if (cartItems.length === 0) {
        cartItemsContainer.innerHTML = `
                    <div class="empty-cart">
                        <i class="fa-solid fa-cart-shopping"></i>
                        <p>Your cart is empty</p>
                    </div>
                `;
    } else {
        cartItemsContainer.innerHTML = cartItems.map(item => `
                    <div class="cart-item">
                        <img src="${item.image}" alt="${item.name}">
                        <div class="cart-item-details">
                            <h4>${item.name}</h4>
                            <p>${item.quantity} kg</p>
                            <div class="cart-item-price">₹${(item.price * item.quantity).toFixed(2)}</div>
                        </div>
                        <button class="cart-item-remove" onclick="removeCartItem(this)"><i class="fa-solid fa-times"></i></button>
                    </div>
                `).join('');
    }

    // Update cart total
    const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `₹${total.toFixed(2)}`;
}


// Update cart page
function updateCartPage() {
    const cartTableBody = document.getElementById('cartTableBody');
    const cartSubtotal = document.getElementById('cartSubtotal');
    const cartTax = document.getElementById('cartTax');
    const cartTotalAmount = document.getElementById('cartTotalAmount');

    if (cartItems.length === 0) {
        cartTableBody.innerHTML = `
                    <tr>
                        <td colspan="5" style="text-align: center; padding: 40px;">
                            <div class="empty-cart">
                                <i class="fa-solid fa-cart-shopping"></i>
                                <p>Your cart is empty</p>
                                <a href="#" class="btn" onclick="showPage('shop')" style="margin-top: 15px;">Start Shopping</a>
                            </div>
                        </td>
                    </tr>
                `;
    } else {
        cartTableBody.innerHTML = cartItems.map(item => `
                    <tr>
                        <td>
                            <div style="display: flex; align-items: center; gap: 10px;">
                                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                                <span>${item.name}</span>
                            </div>
                        </td>
                        <td>₹${item.price.toFixed(2)}/kg</td>
                        <td>
                            <div class="quantity-controls">
                                <button class="quantity-btn" onclick="updateQuantity('${item.name}', -1)">-</button>
                                <span>${item.quantity} kg</span>
                                <button class="quantity-btn" onclick="updateQuantity('${item.name}', 1)">+</button>
                            </div>
                        </td>
                        <td>₹${(item.price * item.quantity).toFixed(2)}</td>
                        <td>
                            <button class="cart-item-remove" onclick="removeCartItemFromTable('${item.name}')">
                                <i class="fa-solid fa-trash"></i>
                            </button>
                        </td>
                    </tr>
                `).join('');
    }

    // Update totals
    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.05; // 5% tax
    const total = subtotal + tax + 50; // ₹50 shipping

    cartSubtotal.textContent = `₹${subtotal.toFixed(2)}`;
    cartTax.textContent = `₹${tax.toFixed(2)}`;
    cartTotalAmount.textContent = `₹${total.toFixed(2)}`;
}

// Update quantity in cart
function updateQuantity(productName, change) {
    const item = cartItems.find(item => item.name === productName);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            cartItems = cartItems.filter(item => item.name !== productName);
        }
        updateCartDisplay();
        updateCartPage();
    }
}

// Remove item from cart table
function removeCartItemFromTable(productName) {
    cartItems = cartItems.filter(item => item.name !== productName);
    updateCartDisplay();
    updateCartPage();
}

// Update checkout page
function updateCheckoutPage() {
    const checkoutItems = document.getElementById('checkoutItems');
    const checkoutSubtotal = document.getElementById('checkoutSubtotal');
    const checkoutTax = document.getElementById('checkoutTax');
    const checkoutTotal = document.getElementById('checkoutTotal');

    if (cartItems.length === 0) {
        checkoutItems.innerHTML = `
                    <div class="empty-cart">
                        <i class="fa-solid fa-cart-shopping"></i>
                        <p>Your cart is empty</p>
                        <a href="#" class="btn" onclick="showPage('shop')" style="margin-top: 15px;">Start Shopping</a>
                    </div>
                `;
    } else {
        checkoutItems.innerHTML = cartItems.map(item => `
                    <div class="cart-item">
                        <img src="${item.image}" alt="${item.name}">
                        <div class="cart-item-details">
                            <h4>${item.name}</h4>
                            <p>${item.quantity} kg</p>
                            <div class="cart-item-price">₹${(item.price * item.quantity).toFixed(2)}</div>
                        </div>
                    </div>
                `).join('');
    }

    // Update totals
    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.05; // 5% tax
    const total = subtotal + tax + 50; // ₹50 shipping

    checkoutSubtotal.textContent = `₹${subtotal.toFixed(2)}`;
    checkoutTax.textContent = `₹${tax.toFixed(2)}`;
    checkoutTotal.textContent = `₹${total.toFixed(2)}`;
}

// Product filtering
function filterProducts(category) {
    const products = document.querySelectorAll('.shop-item');
    const filterBtns = document.querySelectorAll('.filter-btn');

    // Update active filter button
    filterBtns.forEach(btn => {
        btn.classList.remove('active');
    });

    // Find the clicked button and activate it
    let activeButton;
    if (typeof category === 'string') {
        activeButton = document.querySelector(`.filter-btn[onclick*="${category}"]`);
    } else {
        activeButton = event.target;
    }

    if (activeButton) {
        activeButton.classList.add('active');
    }

    // Filter products
    products.forEach(product => {
        if (category === 'all' || product.dataset.category === category) {
            product.style.display = 'block';
            // Add fade-in animation
            product.style.opacity = '0';
            setTimeout(() => {
                product.style.opacity = '1';
                product.style.transition = 'opacity 0.3s ease';
            }, 50);
        } else {
            product.style.display = 'none';
        }
    });

    // Show message if no products found
    setTimeout(() => {
        const visibleProducts = document.querySelectorAll('.shop-item[style*="display: block"]');
        if (visibleProducts.length === 0 && category !== 'all') {
            showNoProductsMessage(category);
        } else {
            removeNoProductsMessage();
        }
    }, 100);
}

// Show no products message
function showNoProductsMessage(category) {
    removeNoProductsMessage();

    const message = document.createElement('div');
    message.className = 'no-products-message';
    message.innerHTML = `
        <i class="fas fa-search"></i>
        <h3>No ${getCategoryName(category)} found</h3>
        <p>We don't have any ${getCategoryName(category).toLowerCase()} in our inventory at the moment.</p>
        <button class="btn" onclick="filterProducts('all')">View All Products</button>
    `;

    const shopGrid = document.querySelector('.shop-grid');
    shopGrid.parentNode.insertBefore(message, shopGrid.nextSibling);
}

// Remove no products message
function removeNoProductsMessage() {
    const existingMessage = document.querySelector('.no-products-message');
    if (existingMessage) {
        existingMessage.remove();
    }
}

// Get category display name
function getCategoryName(category) {
    const categoryNames = {
        'fruits': 'Fresh Fruits',
        'dry-fruits': 'Dry Fruits',
        'organic': 'Organic Products'
    };
    return categoryNames[category] || category;
}

// Enhanced search with filtering
function searchProducts() {
    const searchInput = document.querySelector('.search-input');
    const searchResults = document.getElementById('searchResults');
    const query = searchInput.value.toLowerCase().trim();

    if (query.length < 2) {
        searchResults.style.display = 'none';
        return;
    }

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
    );

    if (filteredProducts.length > 0) {
        searchResults.innerHTML = filteredProducts.map(product =>
            `<div class="search-result-item" onclick="selectProduct('${product.name}', '${product.category}')">
                <strong>${product.name}</strong> - ${product.price}
                <span class="search-category">${product.category}</span>
            </div>`
        ).join('');
        searchResults.style.display = 'block';
    } else {
        searchResults.innerHTML = '<div class="search-result-item">No products found</div>';
        searchResults.style.display = 'block';
    }
}

// Enhanced select product function
function selectProduct(productName, category) {
    document.querySelector('.search-input').value = productName;
    document.getElementById('searchResults').style.display = 'none';

    // Navigate to shop and filter by category
    showPage('shop');

    // Apply category filter
    setTimeout(() => {
        filterProducts(category);

        // Highlight the specific product
        const productElements = document.querySelectorAll('.shop-item-details h3');
        productElements.forEach(el => {
            if (el.textContent === productName) {
                const productItem = el.closest('.shop-item');
                productItem.style.boxShadow = '0 0 0 3px var(--primary-color)';
                productItem.style.transform = 'scale(1.05)';
                productItem.style.transition = 'all 0.3s ease';

                el.scrollIntoView({ behavior: 'smooth', block: 'center' });

                // Remove highlight after 3 seconds
                setTimeout(() => {
                    productItem.style.boxShadow = '';
                    productItem.style.transform = '';
                }, 3000);
            }
        });
    }, 500);
}
// Contact form submission
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
});

// Checkout form submission
document.getElementById('checkoutForm').addEventListener('submit', function (e) {
    e.preventDefault();
    if (cartItems.length === 0) {
        alert('Your cart is empty. Please add some items before checkout.');
        return;
    }

    // In a real app, you would process payment here
    alert('Order placed successfully! Thank you for your purchase.');

    // Clear cart after successful order
    cartItems = [];
    updateCartDisplay();
    updateCartPage();
    updateCheckoutPage();

    // Redirect to home page
    showPage('home');
});

// Search functionality
function searchProducts() {
    const searchInput = document.querySelector('.search-input');
    const searchResults = document.getElementById('searchResults');
    const query = searchInput.value.toLowerCase();

    if (query.length < 2) {
        searchResults.style.display = 'none';
        return;
    }

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(query)
    );

    if (filteredProducts.length > 0) {
        searchResults.innerHTML = filteredProducts.map(product =>
            `<div class="search-result-item" onclick="selectProduct('${product.name}')">
                        <strong>${product.name}</strong> - ${product.price}
                    </div>`
        ).join('');
        searchResults.style.display = 'block';
    } else {
        searchResults.innerHTML = '<div class="search-result-item">No products found</div>';
        searchResults.style.display = 'block';
    }
}

function selectProduct(productName) {
    document.querySelector('.search-input').value = productName;
    document.getElementById('searchResults').style.display = 'none';
    // In a real app, you would navigate to the product page or filter the shop
    showPage('shop');
    // Highlight the product in the shop
    setTimeout(() => {
        const productElements = document.querySelectorAll('.shop-item-details h3');
        productElements.forEach(el => {
            if (el.textContent === productName) {
                el.closest('.shop-item').style.boxShadow = '0 0 0 3px var(--primary-color)';
                el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });
    }, 500);
}

// Close search results when clicking outside
document.addEventListener('click', function (e) {
    if (!e.target.closest('.search-container')) {
        document.getElementById('searchResults').style.display = 'none';
    }
});

// Cart dropdown toggle
document.getElementById('cartIcon').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('cartDropdown').classList.toggle('active');
});

// Close cart dropdown when clicking outside
document.addEventListener('click', function (e) {
    if (!e.target.closest('.cart-icon-container')) {
        document.getElementById('cartDropdown').classList.remove('active');
    }
});

// Newsletter Subscription
document.getElementById('newsletterForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = this.querySelector('.newsletter-input').value;
    alert(`Thank you for subscribing with ${email}! You'll receive 10% off your first order.`);
    this.reset();
});

// Back to Top Button
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', function () {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

backToTopButton.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Initialize cart display
updateCartDisplay();






