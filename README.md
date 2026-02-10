# Curated Lux - E-Commerce Affiliate Website

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

Production-ready e-commerce affiliate website featuring curated aesthetic products. Built with HTML5, CSS3, and vanilla JavaScript. Inspired by 1980s Apple minimalism with modern luxury touches.

## 🌟 Features

- **Minimalistic Design**: Clean, spacious white backgrounds with subtle off-black accents and vibrant orange highlights
- **Responsive Layout**: Mobile-first design that works flawlessly across all devices
- **Product Collections**: Curated "For You" section with personalized recommendations
- **Celebrity Picks**: Curated product selections inspired by celebrities
- **Product of the Week**: Time-limited spotlight with countdown timer
- **Dark Mode**: Toggle between light and dark themes
- **RTL Support**: Built-in right-to-left layout support for Arabic users
- **Affiliate Integration**: Ready-to-use affiliate link structure with UTM tracking
- **Performance**: Lightning-fast load times (under 2s target)
- **Accessibility**: ARIA labels and semantic HTML throughout

## 💻 Tech Stack

- **HTML5**: Semantic markup for better SEO
- **CSS3**: Custom CSS with CSS variables for theming
- **Vanilla JavaScript**: No heavy frameworks, pure performance
- **LocalStorage**: Client-side personalization
- **Service Worker**: Offline support (planned)

## 📁 Project Structure

```
curated-lux-affiliate/
├── index.html          # Main homepage
├── about.html          # About page
├── product.html        # Product detail page
├── style.css           # Core styles
├── script.js           # JavaScript functionality
├── sw.js               # Service worker
├── manifest.webmanifest
└── assets/
    ├── logo.svg
    ├── hero-1.webp
    ├── hero-2.webp
    └── placeholder.webp
```

## 🚀 Getting Started

### Installation

1. Clone the repository:
```bash
git clone https://github.com/hamdijawher-workspace/curated-lux-affiliate.git
cd curated-lux-affiliate
```

2. Open `index.html` in your browser or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js (http-server)
npx http-server -p 8000
```

3. Visit `http://localhost:8000`

### Configuration

1. **Add Affiliate Links**: Edit `script.js` and update the product data array with your affiliate links:
```javascript
const products = [
  {
    id: "product-id",
    title: "Product Name",
    affiliateLink: "https://amazon.com/dp/example?tag=youraffiliateid",
    // ...
  }
];
```

2. **Customize Branding**: Update colors in `style.css` CSS variables:
```css
:root {
  --color-accent: #f97316; /* Main orange accent */
  --color-text: #1a1a1a;   /* Text color */
  /* ... */
}
```

3. **Add Products**: Expand the products array in `script.js` with your curated items.

## 🎨 Design Principles

- **1980s Apple Aesthetic**: Generous whitespace, subtle shadows, rounded corners
- **Orange Accents**: Vibrant orange (#F97316) for CTAs, hovers, and highlights
- **Typography**: SF Pro or Inter fonts (400/500/600 weights)
- **Animations**: Smooth 0.3s cubic-bezier transitions
- **Mobile-First**: Responsive with fluid clamp() typography

## 📦 Deployment

### GitHub Pages

1. Go to Settings > Pages
2. Source: Deploy from branch `main`
3. Your site will be live at `https://hamdijawher-workspace.github.io/curated-lux-affiliate/`

### Netlify

1. Connect your GitHub repository
2. Build command: (none - static site)
3. Publish directory: `/`
4. Deploy!

### Vercel

```bash
npx vercel
```

## ⚖️ Affiliate Disclosure

This website participates in affiliate programs including:
- Amazon Associates
- ShareASale
- Others as configured

When visitors click affiliate links and make purchases, the site owner may earn a commission at no extra cost to the buyer.

## 📝 License

MIT License - feel free to use this project for your own affiliate website.

## 👤 Author

Created by **hamdijawher-workspace**

## 🔗 Links

- [Live Demo](https://hamdijawher-workspace.github.io/curated-lux-affiliate/)
- [Report Issues](https://github.com/hamdijawher-workspace/curated-lux-affiliate/issues)

---

**Note**: Remember to replace placeholder affiliate IDs with your actual affiliate tracking codes before going live.
