// ---- Product data ----
const products = [
  {
    id: "nothing-phone-2a",
    title: "Nothing Phone (2a)",
    description:
      "Sleek Android phone with 120Hz AMOLED and transparent Glyph interface for subtle light cues.",
    price: 449,
    tag: "Hot This Week",
    category: "Hot This Week",
    buyUrl: "https://intl.nothing.tech/pages/store-locator",
    image:
      "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "airpods-pro-2",
    title: "Apple AirPods Pro (2nd Gen)",
    description:
      "Compact ANC earbuds with adaptive audio and a clean white charging case.",
    price: 249,
    tag: "Picked by Celebrities",
    category: "Picked by Celebrities",
    buyUrl: "https://www.apple.com/airpods-pro/",
    image:
      "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "samsung-m8-monitor",
    title: 'Samsung Smart Monitor M8 32"',
    description:
      "4K UHD smart monitor with USB‑C, remote, and built‑in apps for work and streaming.",
    price: 699,
    tag: "Upcoming Tech",
    category: "Upcoming Tech",
    buyUrl: "https://www.samsung.com/monitors/smart-monitor-m8/",
    image:
      "https://images.pexels.com/photos/238118/pexels-photo-238118.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "ikea-kallsup",
    title: "IKEA Kallsup Bluetooth Speaker",
    description:
      "Cube‑shaped Bluetooth speaker that pairs with multiple units in a warm Scandinavian palette.",
    price: 59,
    tag: "Minimalist Finds",
    category: "Minimalist Finds",
    buyUrl: "https://www.ikea.com/",
    image:
      "https://images.pexels.com/photos/7045552/pexels-photo-7045552.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "durobo-krono",
    title: "DuRoBo Krono E Ink Reader",
    description:
      "Ultra‑slim E Ink tablet with 6.13\" glare‑free display and 128GB storage for reading & notes.",
    price: 329,
    tag: "Releasing Next Week",
    category: "Releasing Next Week",
    buyUrl:
      "https://www.perplexity.ai/search/some-products-that-i-don-t-rea-bH5uoBM.RoWTLAXmEUtxew#",
    image:
      "https://images.pexels.com/photos/3965211/pexels-photo-3965211.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "tile-mate-2025",
    title: "Tile Mate (2025 Edition)",
    description:
      "Compact Bluetooth tracker that keeps keys, wallets, and bags on your radar.",
    price: 29,
    tag: "Everyday Essentials",
    category: "Everyday Essentials",
    buyUrl: "https://www.amazon.com/s?k=tile+mate",
    image:
      "https://images.pexels.com/photos/6985261/pexels-photo-6985261.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "dreamie-sunrise",
    title: "Dreamie Sunrise Alarm Clock",
    description:
      "Smart bedside light that simulates sunrise with ambient sound and sleep coaching.",
    price: 119,
    tag: "Sleep & Wellness",
    category: "Sleep & Wellness",
    buyUrl: "https://dreamie.com/",
    image:
      "https://images.pexels.com/photos/4268537/pexels-photo-4268537.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "ikea-solskydd",
    title: "IKEA Solskydd Speaker",
    description:
      "Fabric‑covered Bluetooth speaker that blends into modern interiors with soft tones.",
    price: 79,
    tag: "Home Picks",
    category: "Home Picks",
    buyUrl: "https://www.ikea.com/",
    image:
      "https://images.pexels.com/photos/6782482/pexels-photo-6782482.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "instax-mini-11",
    title: "Fujifilm Instax Mini 11",
    description:
      "Retro‑inspired instant camera for casual snapshots and analogue‑style moments.",
    price: 69,
    tag: "Trending Retro",
    category: "Trending Retro",
    buyUrl: "https://www.amazon.com/s?k=fujifilm+instax+mini+11",
    image:
      "https://images.pexels.com/photos/213080/pexels-photo-213080.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "garmin-fenix-9",
    title: "Garmin Fenix 9 (Upcoming)",
    description:
      "Rugged smartwatch with long battery, offline maps, and advanced health metrics.",
    price: 899,
    tag: "Upcoming Soon",
    category: "Upcoming Soon",
    buyUrl: "https://www.garmin.com/",
    image:
      "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

// ---- State ----
let cart = [];

// ---- Helpers ----
const formatPrice = (value) => `$${value.toFixed(2)}`;

const findProduct = (id) => products.find((p) => p.id === id);

// ---- Rendering: product list ----
const productGridEl = document.getElementById("productGrid");
const heroTitleEl = document.getElementById("heroTitle");
const heroSubtitleEl = document.getElementById("heroSubtitle");
const heroPriceEl = document.getElementById("heroPrice");
const heroTagEl = document.getElementById("heroTag");
const heroImageEl = document.querySelector(".cl-hero-image");
const heroAddBtn = document.getElementById("heroAddToCart");

// build cards
function renderProducts(list) {
  productGridEl.innerHTML = "";
  list.forEach((product, index) => {
    const card = document.createElement("article");
    card.className = "cl-product-card";
    card.dataset.id = product.id;

    card.innerHTML = `
      <div class="cl-product-thumb" style="background-image:url('${product.image}')"></div>
      <div class="cl-product-meta">
        <div class="cl-product-topline">
          <h4 class="cl-product-title">${product.title}</h4>
          <span class="cl-product-price">${formatPrice(product.price)}</span>
        </div>
        <p class="cl-product-text">${product.description}</p>
        <div class="cl-product-footer">
          <span class="cl-pill">${product.category}</span>
          <a href="${product.buyUrl}" target="_blank" class="cl-product-link">Open partner link →</a>
        </div>
      </div>
    `;

    // subtle stagger animation
    card.style.opacity = "0";
    card.style.transform = "translateY(6px)";
    setTimeout(() => {
      card.style.transition = "opacity 0.28s ease-out, transform 0.28s ease-out";
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, 80 * index);

    // clicking card sets hero product
    card.addEventListener("click", (e) => {
      // don't hijack clicks on direct external link
      if (e.target.closest(".cl-product-link")) return;
      setHeroProduct(product);
    });

    productGridEl.appendChild(card);
  });
}

// set hero view
let currentHeroProduct = null;
function setHeroProduct(product) {
  currentHeroProduct = product;
  heroTitleEl.textContent = product.title;
  heroSubtitleEl.textContent = product.description;
  heroPriceEl.textContent = formatPrice(product.price);
  heroTagEl.textContent = product.tag;
  heroImageEl.classList.add("skeleton");
  heroImageEl.style.backgroundImage = `url('${product.image}')`;
  heroImageEl.style.backgroundSize = "cover";
  heroImageEl.style.backgroundPosition = "center";

  setTimeout(() => heroImageEl.classList.remove("skeleton"), 500);
}

// ---- Cart logic ----
const cartOverlayEl = document.getElementById("cartOverlay");
const cartButtonEl = document.getElementById("cartButton");
const cartCloseEl = document.getElementById("cartClose");
const cartItemsEl = document.getElementById("cartItems");
const cartTotalEl = document.getElementById("cartTotal");
const cartCountEl = document.getElementById("cartCount");
const cartCheckoutEl = document.getElementById("cartCheckout");

function openCart() {
  cartOverlayEl.classList.add("is-visible");
}

function closeCart() {
  cartOverlayEl.classList.remove("is-visible");
}

cartButtonEl.addEventListener("click", openCart);
cartCloseEl.addEventListener("click", closeCart);
cartOverlayEl.addEventListener("click", (e) => {
  if (e.target === cartOverlayEl) closeCart();
});

function addToCart(product, qty = 1) {
  const existing = cart.find((item) => item.id === product.id);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id: product.id, qty });
  }
  renderCart();
  pulseCartIcon();
}

function updateQty(id, delta) {
  const item = cart.find((i) => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter((i) => i.id !== id);
  }
  renderCart();
}

function removeFromCart(id) {
  cart = cart.filter((i) => i.id !== id);
  renderCart();
}

function renderCart() {
  if (!cart.length) {
    cartItemsEl.innerHTML =
      '<p class="cl-body-muted">Your basket is empty. Add something minimal.</p>';
    cartTotalEl.textContent = "$0.00";
    cartCountEl.textContent = "0";
    return;
  }

  let total = 0;
  cartItemsEl.innerHTML = "";
  cart.forEach((item) => {
    const product = findProduct(item.id);
    const linePrice = product.price * item.qty;
    total += linePrice;

    const row = document.createElement("div");
    row.className = "cl-cart-item";
    row.innerHTML = `
      <div class="cl-cart-thumb" style="background-image:url('${product.image}')"></div>
      <div>
        <div class="cl-cart-title">${product.title}</div>
        <div class="cl-cart-meta">
          ${formatPrice(product.price)} · <a href="${product.buyUrl}" target="_blank">Partner link</a>
        </div>
        <div class="cl-cart-qty">
          <button class="cl-qty-btn" data-action="dec">−</button>
          <span>${item.qty}</span>
          <button class="cl-qty-btn" data-action="inc">+</button>
        </div>
      </div>
      <div>
        <button class="cl-cart-remove" aria-label="Remove">×</button>
        <div class="cl-cart-meta" style="margin-top:8px;">${formatPrice(linePrice)}</div>
      </div>
    `;

    const decBtn = row.querySelector('[data-action="dec"]');
    const incBtn = row.querySelector('[data-action="inc"]');
    const removeBtn = row.querySelector(".cl-cart-remove");

    decBtn.addEventListener("click", () => updateQty(product.id, -1));
    incBtn.addEventListener("click", () => updateQty(product.id, 1));
    removeBtn.addEventListener("click", () => removeFromCart(product.id));

    cartItemsEl.appendChild(row);
  });

  cartTotalEl.textContent = formatPrice(total);
  const totalQty = cart.reduce((sum, it) => sum + it.qty, 0);
  cartCountEl.textContent = String(totalQty);
}

function pulseCartIcon() {
  cartButtonEl.style.transform = "translateY(-2px) scale(1.05)";
  cartButtonEl.style.boxShadow = "0 16px 40px rgba(249,115,22,0.5)";
  setTimeout(() => {
    cartButtonEl.style.transform = "";
    cartButtonEl.style.boxShadow = "";
  }, 220);
}

// hero add to cart
heroAddBtn.addEventListener("click", () => {
  if (!currentHeroProduct) return;
  addToCart(currentHeroProduct, 1);
});

// ---- Tabs ----
document.querySelectorAll(".cl-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.tab;
    document
      .querySelectorAll(".cl-tab")
      .forEach((t) => t.classList.toggle("is-active", t === tab));
    document
      .querySelectorAll(".cl-tab-panel")
      .forEach((panel) =>
        panel.classList.toggle(
          "is-active",
          panel.id === `tab-${target}`
        )
      );
  });
});

// ---- Search (filters product list) ----
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", (e) => {
  const q = e.target.value.trim().toLowerCase();
  if (!q) {
    renderProducts(products);
    return;
  }
  const filtered = products.filter(
    (p) =>
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
  );
  renderProducts(filtered);
});

// ---- Initialize ----
document.addEventListener("DOMContentLoaded", () => {
  renderProducts(products);
  setHeroProduct(products[0]); // Nothing Phone (2a) as hero
  renderCart();
});

// checkout just opens first product partner link as demo
cartCheckoutEl.addEventListener("click", () => {
  if (!cart.length) return;
  const first = findProduct(cart[0].id);
  window.open(first.buyUrl, "_blank");
});
