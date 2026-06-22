# LUXE Store — eCommerce Frontend Design

A desktop-only eCommerce frontend built for the **DevelopersHub Frontend Development Internship** task. LUXE is a fictional luxury fashion retailer — the project focuses on clean information architecture, a consistent design system, and core frontend interactivity using vanilla HTML, CSS, and JavaScript.

🔗 **Live Demo:** _add your GitHub Pages link here once deployed_

---

## 📁 Project Structure

```
luxe/
├── index.html              # Home page
├── pages/
│   ├── products.html       # Product Listing page
│   └── product-details.html# Product Details page
├── css/
│   └── style.css           # All styles, design tokens, responsive rules
├── js/
│   └── main.js              # Interactivity (nav, filters, cart, gallery, etc.)
└── assets/
    └── images/              # Product & site imagery
```

## ✨ Features

### Week 1 — Header & Footer
- Sticky navigation with logo, dropdown menu, search bar, and icon links (wishlist, cart, account)
- Footer with brand info, sitemap links, newsletter signup, and payment badges

### Week 2 — Home Page & Product Listing
- Hero section with call-to-action buttons
- Featured category cards
- "Trending This Week" product preview grid
- Full Product Listing page with filter chips, sort dropdown, 12-product grid, and pagination
- Star ratings + review counts on every product card

### Week 3 — Product Details & Interactivity
- Image gallery with clickable thumbnails
- Size selector (S–XXL) with validation
- Quantity stepper
- Add to Cart with live cart count update in the header
- Customer reviews section
- Related products grid

## 🎨 Design System

| Token | Value |
|---|---|
| Display Font | Playfair Display |
| Body Font | DM Sans |
| Accent Color | Gold `#C9974A` (approx.) |
| Background | Off-white `#FAF9F7` |
| Dark / Text | `#111111` |

All colors, spacing, font sizes, and radii are defined as CSS custom properties in `css/style.css` for easy reuse and consistency across pages.

## 🛠️ Tech Stack
- HTML5 (semantic structure)
- CSS3 (Flexbox, Grid, custom properties, responsive media queries)
- Vanilla JavaScript (DOM interactivity, no frameworks)

## 🚀 Running Locally
No build step required — it's a static site.

1. Clone the repo
2. Open `index.html` directly in your browser, **or** run a local server for correct relative paths:
   ```bash
   python3 -m http.server 8000
   ```
3. Visit `http://localhost:8000`

## 📌 Notes
- Built as the **desktop version only**, per task requirements.
- Product images are currently placeholders labeled with their expected filename (e.g. `product-1.jpg`) — see `assets/images/` to swap in real photography.
- Search bar is styled but non-functional, per task scope ("non-functional, styled only").

## 👤 Author
**Khadija Meerab**
BSCS, University of Chenab — Frontend Development Intern @ DevelopersHub
[GitHub](https://github.com/khadijameerab01) · [Portfolio](https://khadijameerab01.github.io/portfolio)
