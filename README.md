# PayPal Open - React Landing Page

A pixel-perfect single-page React implementation of the PayPal landing page matching the provided specification.

## Features

- **Pixel-Perfect Navigation Bar**:
  - Official PayPal double-P monogram vector logo.
  - Interactive navigation links with dropdowns (`Personal`, `Business`, `Partners`, `Useful Info`).
  - Auth CTA buttons: `Log In` and `Sign Up`.
  - Mobile responsive drawer navigation.
- **Hero Section**:
  - Segmented toggle control (`Personal` vs `Business`) matching PayPal UI design.
  - High-impact headline: `PayPal Open`
  - Subheading: `One platform for your business needs`
  - Descriptive static copy and dual call-to-action buttons (`Sign Up` and `Contact Sales`).
  - Interactive state toggle between Personal and Business modes.
- **Static Data Architecture**:
  - All navigation, hero content, and footer links are cleanly decoupled in `src/data/staticData.js`.
- **Modern Tech Stack**:
  - React 18
  - Vite for lightning-fast bundling and HMR
  - Tailwind CSS for modern styling
  - Lucide React for crisp SVG iconography

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-link>
   cd Paypal
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## Project Structure

```
Paypal/
├── public/
│   └── paypal-icon.svg
├── src/
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   └── Navbar.jsx
│   ├── data/
│   │   └── staticData.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```
