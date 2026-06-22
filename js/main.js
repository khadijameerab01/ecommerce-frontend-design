// LUXE eCommerce — main.js

// Sticky header shadow on scroll
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Search bar — clear on Escape
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    searchInput.value = '';
    searchInput.blur();
  }
});

// Newsletter button
const newsletterBtn   = document.querySelector('.newsletter__btn');
const newsletterInput = document.querySelector('.newsletter__input');
if (newsletterBtn && newsletterInput) {
  newsletterBtn.addEventListener('click', () => {
    const email = newsletterInput.value.trim();
    if (!email || !email.includes('@')) {
      newsletterInput.style.outline = '2px solid #e74c3c';
      return;
    }
    newsletterInput.style.outline = '';
    newsletterBtn.textContent = 'Thanks! ✓';
    newsletterBtn.style.background = '#27ae60';
    newsletterInput.value = '';
    setTimeout(() => {
      newsletterBtn.textContent = 'Subscribe';
      newsletterBtn.style.background = '';
    }, 3000);
  });
}
// Filter chips — toggle active state (styled only, no real filtering yet)
const filterChips = document.querySelectorAll('.filter__chip');
filterChips.forEach(chip => {
  chip.addEventListener('click', () => {
    filterChips.forEach(c => c.classList.remove('filter__chip--active'));
    chip.classList.add('filter__chip--active');
  });
});

// Wishlist heart toggle
const wishlistBtns = document.querySelectorAll('.product__wishlist');
wishlistBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const liked = btn.textContent.includes('♥');
    btn.textContent = liked ? '♡' : '♥';
    btn.style.color = liked ? '' : '#C9974A';
  });
});

// Load More button (placeholder behavior — wire up to real data/pagination later)
const loadMoreBtn = document.getElementById('loadMoreBtn');
if (loadMoreBtn) {
  loadMoreBtn.addEventListener('click', () => {
    loadMoreBtn.textContent = 'No more products to load';
    loadMoreBtn.disabled = true;
    loadMoreBtn.style.opacity = '0.5';
    loadMoreBtn.style.cursor = 'not-allowed';
  });
}

// ============================================
// PRODUCT DETAILS PAGE INTERACTIVITY
// ============================================

// Thumbnail gallery — click to swap main image (uses real photo if available)
const mainImage = document.getElementById('mainImage');
const thumbs = document.querySelectorAll('.pdp__thumb');
thumbs.forEach(thumb => {
  thumb.addEventListener('click', () => {
    thumbs.forEach(t => t.classList.remove('pdp__thumb--active'));
    thumb.classList.add('pdp__thumb--active');
    if (mainImage) {
      const realSrc = thumb.dataset.real;
      const label = thumb.dataset.label || 'Product image';
      if (realSrc) {
        mainImage.src = realSrc;
        mainImage.alt = `Tailored Wool Coat — ${label}`;
      }
      // If no real photo uploaded yet for this angle, keep the current main image
      // (placeholder thumbs without data-real won't have a photo to swap in)
    }
  });
});

// Size selector
const sizeChips = document.querySelectorAll('.size__chip');
const selectedSizeLabel = document.getElementById('selectedSize');
sizeChips.forEach(chip => {
  chip.addEventListener('click', () => {
    sizeChips.forEach(c => c.classList.remove('size__chip--active'));
    chip.classList.add('size__chip--active');
    if (selectedSizeLabel) selectedSizeLabel.textContent = `— ${chip.dataset.size}`;
  });
});

// Quantity stepper
const qtyValue = document.getElementById('qtyValue');
const qtyMinus = document.getElementById('qtyMinus');
const qtyPlus = document.getElementById('qtyPlus');
if (qtyValue && qtyMinus && qtyPlus) {
  qtyMinus.addEventListener('click', () => {
    let val = parseInt(qtyValue.textContent, 10);
    if (val > 1) qtyValue.textContent = val - 1;
  });
  qtyPlus.addEventListener('click', () => {
    let val = parseInt(qtyValue.textContent, 10);
    if (val < 10) qtyValue.textContent = val + 1;
  });
}

// Add to Cart
const addToCartBtn = document.getElementById('addToCartBtn');
const pdpNotice = document.getElementById('pdpNotice');
const cartCountEl = document.getElementById('cartCount');
if (addToCartBtn) {
  addToCartBtn.addEventListener('click', () => {
    const sizeChosen = document.querySelector('.size__chip--active');
    if (!sizeChosen) {
      pdpNotice.textContent = 'Please select a size before adding to cart.';
      pdpNotice.style.color = '#C0392B';
      return;
    }
    const qty = parseInt(qtyValue.textContent, 10);
    if (cartCountEl) {
      cartCountEl.textContent = parseInt(cartCountEl.textContent, 10) + qty;
    }
    pdpNotice.style.color = '';
    pdpNotice.textContent = `Added ${qty} × Tailored Wool Coat (Size ${sizeChosen.dataset.size}) to your cart.`;
  });
}
