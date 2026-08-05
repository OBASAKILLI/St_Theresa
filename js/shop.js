/**
 * Parish Shop Controller
 * Handles Google Sheets integration, Cart, Wishlist, and UI updates.
 */

class ShopController {
  constructor() {
    // This is the live Google Sheets CSV publish link
    this.sheetCsvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRapZPMtN8Ldbex9iA9HbIw1kpgvJub0rch2QAUu2aIyhpBHx3emoF0Hqb6j1mbv1ApNRKxil3L5oGT/pub?gid=0&single=true&output=csv"; 
    
    this.products = [];
    this.cart = JSON.parse(localStorage.getItem('naiberi_cart')) || [];
    this.wishlist = JSON.parse(localStorage.getItem('naiberi_wishlist')) || [];
    
    this.currentCategory = 'All';
    this.currentSubcategory = 'All';

    // Categories are built dynamically from the spreadsheet data
    this.categories = ['All'];
  }

  init() {
    this.updateCartBadge();
    this.renderCategorySidebar();
    this.loadProducts();
  }

  loadProducts() {
    if (this.sheetCsvUrl) {
      // Append a timestamp to bypass browser caching
      const cacheBusterUrl = this.sheetCsvUrl + "&t=" + new Date().getTime();
      
      // Use PapaParse to fetch from Google Sheets CSV
      Papa.parse(cacheBusterUrl, {
        download: true,
        header: true,
        transformHeader: (h) => h.toLowerCase().trim(),
        complete: (results) => {
          // Parse results, ensuring numbers are parsed properly
          this.products = results.data.filter(row => row.name).map((row, index) => ({
            id: row.id || index + 1,
            name: row.name || 'Unnamed Product',
            category: row.category || 'Gifts',
            subcategory: row.subcategory || '',
            price: parseFloat(row.price) || 0,
            image: row.image || 'assets/images/placeholder.jpg'
          }));
          // Build categories dynamically from the loaded products
          const uniqueCategories = ['All', ...new Set(
            this.products
              .map(p => p.category)
              .filter(c => c && c.trim() !== '')
          )];
          this.categories = uniqueCategories;
          this.renderCategorySidebar();
          this.renderProducts();
        },
        error: (err) => {
          console.error("Error loading products from CSV:", err);
          this.products = []; 
          this.renderProducts();
        }
      });
    }
  }

  renderCategorySidebar() {
    const sidebar = document.getElementById('shop-categories');
    if (!sidebar) return;

    let html = `<ul class="shop-nav">`;
    this.categories.forEach((cat, idx) => {
      const activeClass = this.currentCategory === cat ? 'active' : '';
      // Use data-idx to avoid apostrophes in onclick breaking the HTML
      html += `<li class="shop-nav-item ${activeClass}" data-idx="${idx}">${cat}</li>`;
    });
    html += `</ul>`;
    
    sidebar.innerHTML = html;

    // Attach click listeners safely (avoids apostrophe issue in category names)
    sidebar.querySelectorAll('.shop-nav-item').forEach(li => {
      li.addEventListener('click', () => {
        const idx = parseInt(li.getAttribute('data-idx'));
        this.setCategory(this.categories[idx]);
      });
    });
  }

  setCategory(category) {
    this.currentCategory = category;
    this.currentSubcategory = 'All'; // Reset sub
    this.renderCategorySidebar();
    this.renderProducts();
  }

  renderProducts() {
    const grid = document.getElementById('shop-product-grid');
    if (!grid) return;

    let filtered = this.products;
    if (this.currentCategory !== 'All') {
      filtered = filtered.filter(p => p.category === this.currentCategory);
    }

    if (filtered.length === 0) {
      grid.innerHTML = `<div style="grid-column: 1/-1; text-align:center; padding: 4rem 1rem;">
        <i class="fa-solid fa-box-open" style="font-size: 3rem; color: #ccc; margin-bottom: 1rem;"></i>
        <h3 style="color: var(--text-main);">No products found in this category.</h3>
        <p style="color: var(--text-muted);">Check back soon as we update our inventory!</p>
      </div>`;
      return;
    }

    let html = '';
    filtered.forEach(p => {
      const inWishlist = this.wishlist.some(item => item.id === p.id);
      const heartClass = inWishlist ? 'fa-solid fa-heart in-wishlist' : 'fa-regular fa-heart';
      
      html += `
        <div class="product-card">
          <div class="product-image-wrap">
            <img src="${p.image}" alt="${p.name}" class="product-image" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80'">
            <button class="wishlist-btn" onclick="shopController.toggleWishlist(${p.id})">
              <i class="${heartClass}"></i>
            </button>
          </div>
          <div class="product-info">
            <span class="product-cat">${p.category} ${p.subcategory ? '› ' + p.subcategory : ''}</span>
            <h4 class="product-title">${p.name}</h4>
            <div class="product-price">KES ${p.price.toLocaleString()}</div>
            <div class="product-actions">
              <button class="btn btn-outline btn-sm" onclick="shopController.addToCart(${p.id})"><i class="fa-solid fa-cart-plus"></i> Add to Cart</button>
              <button class="btn btn-primary btn-sm" onclick="shopController.buyNow(${p.id})">Buy Now</button>
            </div>
          </div>
        </div>
      `;
    });

    grid.innerHTML = html;
  }

  // --- CART LOGIC ---
  
  addToCart(productId, qty = 1) {
    const product = this.products.find(p => p.id === productId);
    if (!product) return;

    const existing = this.cart.find(item => item.id === productId);
    if (existing) {
      existing.qty += qty;
    } else {
      this.cart.push({ ...product, qty });
    }
    this.saveCart();
    this.updateCartBadge();
    
    // Quick visual feedback
    if (window.appController) window.appController.closeMobileDrawer();
    this.openCartModal();
  }

  updateCartQty(productId, change) {
    const item = this.cart.find(i => i.id === productId);
    if (item) {
      item.qty += change;
      if (item.qty <= 0) {
        this.cart = this.cart.filter(i => i.id !== productId);
      }
      this.saveCart();
      this.updateCartBadge();
      this.renderCartItems();
    }
  }

  removeFromCart(productId) {
    this.cart = this.cart.filter(i => i.id !== productId);
    this.saveCart();
    this.updateCartBadge();
    this.renderCartItems();
  }

  saveCart() {
    localStorage.setItem('naiberi_cart', JSON.stringify(this.cart));
  }

  updateCartBadge() {
    const totalItems = this.cart.reduce((sum, item) => sum + item.qty, 0);
    document.querySelectorAll('.cart-badge').forEach(b => {
      b.textContent = totalItems;
      b.style.display = totalItems > 0 ? 'inline-flex' : 'none';
    });
  }

  openCartModal() {
    const modal = document.getElementById('cart-modal');
    if (modal) {
      modal.classList.add('active');
      this.renderCartItems();
    }
  }

  closeCartModal() {
    const modal = document.getElementById('cart-modal');
    if (modal) modal.classList.remove('active');
  }

  renderCartItems() {
    const container = document.getElementById('cart-items-container');
    const totalEl = document.getElementById('cart-total-price');
    if (!container) return;

    if (this.cart.length === 0) {
      container.innerHTML = `<div style="text-align:center; padding: 2rem 0; color:var(--text-muted);">Your cart is empty.</div>`;
      totalEl.textContent = 'KES 0';
      return;
    }

    let html = '';
    let total = 0;

    this.cart.forEach(item => {
      const itemTotal = item.price * item.qty;
      total += itemTotal;
      html += `
        <div class="cart-item">
          <img src="${item.image}" alt="${item.name}" class="cart-item-img" onerror="this.src='https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80'">
          <div class="cart-item-details">
            <div class="cart-item-title">${item.name}</div>
            <div class="cart-item-price">KES ${item.price.toLocaleString()}</div>
            <div class="cart-qty-controls">
              <button onclick="shopController.updateCartQty(${item.id}, -1)">-</button>
              <span>${item.qty}</span>
              <button onclick="shopController.updateCartQty(${item.id}, 1)">+</button>
            </div>
          </div>
          <button class="cart-remove-btn" onclick="shopController.removeFromCart(${item.id})"><i class="fa-solid fa-trash"></i></button>
        </div>
      `;
    });

    container.innerHTML = html;
    totalEl.textContent = `KES ${total.toLocaleString()}`;
  }

  checkoutCart() {
    if (this.cart.length === 0) return;
    
    let text = "Hello Naiberi Parish, I would like to place an order for:\n\n";
    let total = 0;
    
    this.cart.forEach(item => {
      const itemTotal = item.price * item.qty;
      total += itemTotal;
      text += `- ${item.qty}x ${item.name} (KES ${itemTotal.toLocaleString()})\n`;
    });
    
    text += `\n*Total:* KES ${total.toLocaleString()}\n\nPlease advise on payment (Paybill) and collection.`;
    
    const encoded = encodeURIComponent(text);
    // User provided number: 0799092727 => +254799092727
    window.open(`https://wa.me/254799092727?text=${encoded}`, '_blank');
  }

  buyNow(productId) {
    const product = this.products.find(p => p.id === productId);
    if (!product) return;
    
    let text = `Hello Naiberi Parish, I would like to purchase the following item:\n\n- 1x ${product.name} (KES ${product.price.toLocaleString()})\n\nPlease advise on payment (Paybill) and collection.`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/254799092727?text=${encoded}`, '_blank');
  }

  // --- WISHLIST LOGIC ---

  toggleWishlist(productId) {
    const product = this.products.find(p => p.id === productId);
    if (!product) return;

    const index = this.wishlist.findIndex(item => item.id === productId);
    if (index >= 0) {
      this.wishlist.splice(index, 1);
    } else {
      this.wishlist.push(product);
    }
    
    this.saveWishlist();
    this.renderProducts(); // re-render to update heart icons
    this.renderWishlistItems(); // update modal if open
  }

  saveWishlist() {
    localStorage.setItem('naiberi_wishlist', JSON.stringify(this.wishlist));
  }

  openWishlistModal() {
    const modal = document.getElementById('wishlist-modal');
    if (modal) {
      modal.classList.add('active');
      this.renderWishlistItems();
    }
  }

  closeWishlistModal() {
    const modal = document.getElementById('wishlist-modal');
    if (modal) modal.classList.remove('active');
  }

  renderWishlistItems() {
    const container = document.getElementById('wishlist-items-container');
    if (!container) return;

    if (this.wishlist.length === 0) {
      container.innerHTML = `<div style="text-align:center; padding: 2rem 0; color:var(--text-muted);">Your wishlist is empty.</div>`;
      return;
    }

    let html = '';
    this.wishlist.forEach(item => {
      html += `
        <div class="cart-item">
          <img src="${item.image}" alt="${item.name}" class="cart-item-img" onerror="this.src='https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80'">
          <div class="cart-item-details">
            <div class="cart-item-title">${item.name}</div>
            <div class="cart-item-price">KES ${item.price.toLocaleString()}</div>
            <button class="btn btn-outline btn-sm" style="padding: 0.3rem 0.6rem; font-size: 0.8rem; margin-top:0.4rem;" onclick="shopController.addToCart(${item.id}); shopController.toggleWishlist(${item.id});">Move to Cart</button>
          </div>
          <button class="cart-remove-btn" onclick="shopController.toggleWishlist(${item.id})"><i class="fa-solid fa-trash"></i></button>
        </div>
      `;
    });

    container.innerHTML = html;
  }
}

// Global instance
const shopController = new ShopController();

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
  shopController.init();
});
