# Component Documentation - Forever Fashion

## Overview
This document provides detailed information about all React components used in the Forever Fashion e-commerce platform, including their props, usage, and styling patterns.

## Design System Components

### Core Components

#### Title.jsx
A reusable title component with gradient animations and consistent styling.

**Props:**
```typescript
interface TitleProps {
  text1: string;  // First part of the title
  text2: string;  // Second part of the title (highlighted)
}
```

**Usage:**
```jsx
import Title from '../components/Title';

<Title text1="LATEST" text2="COLLECTION" />
```

**Features:**
- Gradient text effects on hover
- Animated underline
- Responsive typography
- Consistent spacing

---

#### ProductItem.jsx
Enhanced product card with glassmorphism effects and premium interactions.

**Props:**
```typescript
interface ProductItemProps {
  id: string;           // Product ID
  name: string;         // Product name
  price: number;        // Product price
  image: string[];      // Array of product images
}
```

**Usage:**
```jsx
import ProductItem from '../components/ProductItem';

<ProductItem
  id={product._id}
  name={product.name}
  price={product.price}
  image={product.image}
/>
```

**Features:**
- Glassmorphism card design
- Hover animations with lift effects
- Image optimization
- Price formatting
- Click-through to product page

---

#### NewsletterBox.jsx
Premium newsletter subscription component with form validation.

**Props:**
```typescript
// No props required - self-contained component
```

**Usage:**
```jsx
import NewsletterBox from '../components/NewsletterBox';

<NewsletterBox />
```

**Features:**
- Glassmorphism form design
- Email validation
- Animated submit button
- Focus effects on input
- Premium styling with gradients

---

## Layout Components

#### Navbar.jsx
Main navigation component with search functionality and user menu.

**Features:**
- Responsive design with mobile menu
- Search bar integration
- User authentication state
- Cart item count display
- Smooth transitions

**Usage:**
```jsx
import Navbar from '../components/Navbar';

<Navbar />
```

---

#### Footer.jsx
Enhanced footer with company information and social links.

**Features:**
- Multi-column layout
- Social media integration
- Company information
- Newsletter signup
- Professional styling

**Usage:**
```jsx
import Footer from '../components/Footer';

<Footer />
```

---

## Home Page Components

#### Hero.jsx
Landing page hero section with animated call-to-action.

**Features:**
- Gradient background with decorative elements
- Animated "Shop Now" button
- Responsive typography
- Floating badges with statistics
- Premium visual effects

**Usage:**
```jsx
import Hero from '../components/Hero';

<Hero />
```

**Styling:**
```css
/* Key styles */
.hero-container {
  background: linear-gradient(to bottom right, theme('colors.gray.50/50'), theme('colors.white'), theme('colors.slate.50/50'));
}

.cta-button {
  background: linear-gradient(to right, theme('colors.slate.900'), theme('colors.gray.900'), theme('colors.slate.800'));
}
```

---

#### LatestCollection.jsx
Showcase component for latest products with filtering.

**Features:**
- Product grid with hover effects
- "View All Products" button with navigation
- Responsive grid layout
- Staggered animations
- Background patterns

**Usage:**
```jsx
import LatestCollection from '../components/LatestCollection';

<LatestCollection />
```

---

#### BestSeller.jsx
Curated display of best-selling products.

**Features:**
- Filtered product display (bestseller: true)
- Consistent styling with LatestCollection
- Premium button design
- Hover animations

**Usage:**
```jsx
import BestSeller from '../components/BestSeller';

<BestSeller />
```

---

#### OurPolicy.jsx
Policy highlights with interactive cards.

**Features:**
- Three-column grid layout
- Icon integration
- Hover effects with color coding
- Statistics section
- Professional messaging

**Usage:**
```jsx
import OurPolicy from '../components/OurPolicy';

<OurPolicy />
```

---

## Product Components

#### RelatedProducts.jsx
Show related products based on category and subcategory.

**Props:**
```typescript
interface RelatedProductsProps {
  category: string;     // Product category
  subCategory: string;  // Product subcategory
}
```

**Usage:**
```jsx
import RelatedProducts from '../components/RelatedProducts';

<RelatedProducts
  category={product.category}
  subCategory={product.subCategory}
/>
```

---

#### SearchBar.jsx
Advanced search component with filtering capabilities.

**Features:**
- Real-time search
- Category filtering
- Search suggestions
- Responsive design

**Usage:**
```jsx
import SearchBar from '../components/SearchBar';

<SearchBar />
```

---

## Cart Components

#### CartTotal.jsx
Display cart totals with pricing breakdown.

**Features:**
- Subtotal calculation
- Shipping cost display
- Tax calculations
- Total amount
- Currency formatting

**Usage:**
```jsx
import CartTotal from '../components/CartTotal';

<CartTotal />
```

---

## Styling Patterns

### Glassmorphism Implementation
```css
/* Standard glassmorphism card */
.glass-card {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 24px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

/* Enhanced glassmorphism with stronger blur */
.glass-card-enhanced {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
}
```

### Animation Patterns
```css
/* Lift on hover */
.hover-lift {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateY(0);
}

.hover-lift:hover {
  transform: translateY(-8px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
}

/* Scale on hover */
.hover-scale {
  transition: transform 0.3s ease;
}

.hover-scale:hover {
  transform: scale(1.05);
}

/* Gradient button animation */
.gradient-button {
  position: relative;
  overflow: hidden;
  background: linear-gradient(to right, #1e293b, #374151, #1e293b);
}

.gradient-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(255,255,255,0.2), transparent);
  transition: left 0.5s ease;
}

.gradient-button:hover::before {
  left: 100%;
}
```

### Button Styles
```css
/* Primary button */
.btn-primary {
  background: linear-gradient(to right, #1e293b, #374151, #1e293b);
  color: white;
  padding: 1rem 2rem;
  border-radius: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: all 0.7s ease;
  position: relative;
  overflow: hidden;
}

.btn-primary:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

/* Secondary button */
.btn-secondary {
  background: rgba(255, 255, 255, 0.9);
  color: #1e293b;
  border: 2px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(16px);
}
```

## Component State Management

### Context Integration
Most components integrate with the ShopContext for state management:

```jsx
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';

const Component = () => {
  const {
    products,
    currency,
    addToCart,
    navigate,
    cartItems,
    getCartCount
  } = useContext(ShopContext);

  // Component logic
};
```

### Common Hooks
```jsx
// State management
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);

// Effect for data fetching
useEffect(() => {
  const fetchData = async () => {
    setLoading(true);
    try {
      // API call
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  fetchData();
}, [dependency]);
```

## Responsive Design Patterns

### Breakpoint Usage
```jsx
// Responsive classes
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
  {/* Content */}
</div>

// Responsive typography
<h1 className="text-2xl md:text-4xl lg:text-6xl font-bold">
  Responsive Heading
</h1>

// Responsive spacing
<div className="p-4 md:p-8 lg:p-12">
  {/* Content */}
</div>
```

### Mobile Optimization
```jsx
// Mobile-first navigation
<div className="md:hidden">
  {/* Mobile menu */}
</div>

<div className="hidden md:block">
  {/* Desktop menu */}
</div>

// Touch-friendly buttons
<button className="min-h-[44px] min-w-[44px] md:min-h-[40px] md:min-w-[40px]">
  Touch Target
</button>
```

## Performance Optimization

### Lazy Loading
```jsx
import { lazy, Suspense } from 'react';

const LazyComponent = lazy(() => import('./LazyComponent'));

<Suspense fallback={<div>Loading...</div>}>
  <LazyComponent />
</Suspense>
```

### Memoization
```jsx
import { memo, useMemo, useCallback } from 'react';

const ExpensiveComponent = memo(({ data }) => {
  const expensiveValue = useMemo(() => {
    return computeExpensiveValue(data);
  }, [data]);

  const handleClick = useCallback(() => {
    // Handle click
  }, []);

  return <div onClick={handleClick}>{expensiveValue}</div>;
});
```

## Accessibility Guidelines

### ARIA Labels
```jsx
<button aria-label="Add to cart" onClick={addToCart}>
  <ShoppingCartIcon />
</button>

<input
  type="email"
  aria-describedby="email-help"
  aria-required="true"
/>
<div id="email-help">Enter your email address</div>
```

### Keyboard Navigation
```jsx
<div
  tabIndex={0}
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleAction();
    }
  }}
>
  Interactive Element
</div>
```

## Testing Patterns

### Component Testing
```jsx
import { render, screen, fireEvent } from '@testing-library/react';
import ProductItem from './ProductItem';

test('renders product information', () => {
  const mockProduct = {
    id: '1',
    name: 'Test Product',
    price: 99.99,
    image: ['test.jpg']
  };

  render(<ProductItem {...mockProduct} />);

  expect(screen.getByText('Test Product')).toBeInTheDocument();
  expect(screen.getByText('$99.99')).toBeInTheDocument();
});
```

This component documentation provides comprehensive information for understanding and maintaining the Forever Fashion component library. For additional details, refer to the main README.md file.