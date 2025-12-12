# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a luxury hair care marketplace e-commerce platform built with Next.js 15, TypeScript, and Tailwind CSS, designed for Netlify deployment. The project uses static site generation (SSG) for optimal performance and is currently using mock data with plans for future Square integration.

## Development Commands

```bash
# Development
npm run dev          # Start dev server on http://localhost:3000
npm run build        # Build static export to /out directory
npm run start        # Start production server (for testing)
npm run lint         # Run ESLint

# Production preview
npm run build && npx serve@latest out

# Deployment
netlify deploy --prod  # Deploy to Netlify (requires Netlify CLI)
```

## Tech Stack & Key Dependencies

- **Framework**: Next.js 15 (App Router with static export)
- **Language**: TypeScript (strict mode enabled)
- **Styling**: Tailwind CSS 3.4 with custom luxury theme
- **Animations**: Framer Motion 11.15
- **State Management**: Zustand 5.0 with localStorage persistence
- **UI Components**: Radix UI (Accordion, Slider), Heroicons
- **Carousel**: Embla Carousel React
- **Fonts**: Next/Font with Cormorant Garamond (serif) + Inter (sans-serif)

## Architecture

### Static Export Configuration
- `next.config.js` has `output: 'export'` for Netlify static hosting
- All pages are pre-rendered at build time
- Images use `unoptimized: true` (required for static export)
- Remote images from Unsplash are configured in `remotePatterns`

### Path Aliases
- `@/*` maps to `./src/*` (configured in tsconfig.json)
- Always use `@/` imports for src files: `import { Product } from '@/types'`

### Directory Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with Header/Footer
│   ├── page.tsx           # Homepage route (/)
│   ├── products/page.tsx  # Product listing route (/products)
│   ├── fonts.ts           # Font configuration
│   └── globals.css        # Tailwind directives + global styles
├── components/
│   ├── layout/            # Header, Footer
│   ├── home/              # Homepage sections (HeroSection, TrustBar, etc.)
│   ├── products/          # Product components (ProductCard, ProductGrid, etc.)
│   ├── ui/                # Reusable UI components (Button, Card, Badge, Input)
│   └── shared/            # Shared components (StarRating, SearchBar, CartIcon)
├── data/                  # Mock data files
│   ├── mock-products.ts   # 20 sample products
│   ├── categories.ts      # 6 categories
│   └── testimonials.ts    # 6 customer testimonials
├── lib/
│   ├── constants.ts       # App-wide constants (BRAND_NAME, etc.)
│   └── utils.ts           # Utility functions (cn, formatPrice, debounce, etc.)
├── store/
│   └── cartStore.ts       # Zustand cart store with localStorage persistence
└── types/
    └── index.ts           # TypeScript type definitions
```

### Type System
All types are defined in `src/types/index.ts`:
- `Product`: Core product data with images, attributes, pricing, ratings
- `CartItem`: Product + quantity
- `Category`, `Testimonial`
- `FilterOptions`, `SortOption`: For product filtering/sorting
- `HairType`, `Concern`, `CategoryType`: String literal unions

### State Management
**Cart Store** (`src/store/cartStore.ts`):
- Zustand store with localStorage persistence (key: `cart-storage`)
- Methods: `addItem`, `removeItem`, `updateQuantity`, `clearCart`, `getTotal`, `getItemCount`
- Usage: `const { items, addItem } = useCartStore()`
- State persists across sessions via `zustand/middleware/persist`

### Styling Approach
- **Utility-first**: Tailwind CSS with custom luxury theme
- **Color Palette**: Warm neutrals (cream #FAF8F5, taupe #8B7355, charcoal #1A1614) + gold accent (#D4AF37)
- **Typography**: Cormorant Garamond for headings, Inter for body text
- **Spacing**: Generous padding/margins (80px+ for sections)
- **Responsive**: Mobile-first with sm/md/lg/xl breakpoints
- **cn() utility**: Use `cn()` from `@/lib/utils` to merge Tailwind classes with clsx

### Component Patterns
- All components are functional components with TypeScript
- Use Next.js `<Link>` for internal navigation
- Use Next.js `<Image>` for optimized images (with unoptimized flag for static export)
- Animations use Framer Motion's `motion` components
- Form inputs use controlled components with React state

## Data Flow

### Current Implementation (Mock Data)
Products are imported from `@/data/mock-products` and filtered/sorted client-side on the products page. No API calls are made.

### Future Square Integration
When integrating Square:
1. Create Netlify Functions in `/netlify/functions/` for API routes
2. Fetch products from Square Catalog API server-side
3. Replace mock data imports with API calls
4. Add environment variables via Netlify dashboard
5. Consider switching from static export to ISR (Incremental Static Regeneration) if dynamic data needed

## Key Features Implementation

### Product Filtering (PLP)
- Client-side filtering in `src/app/products/page.tsx`
- Filters: category, hair type, concerns, price range, attributes (vegan, sulfate-free, organic)
- Sorting: best-selling, price (low/high), newest, top-rated
- Filter state managed with React useState hooks

### Shopping Cart
- Zustand store persists cart to localStorage
- Cart count badge in Header updates reactively
- Add to cart from ProductCard components
- Cart data structure supports quantity updates

### Product Card Interactions
- Image swap on hover (main → gallery[0])
- Grayscale → color transition
- "Add to Cart" button slides up on hover
- Wishlist toggle (heart icon, not persisted yet)
- Badge overlays for "New", "Best Seller", "Sale"

### Animations
- Framer Motion for page transitions and micro-interactions
- Ken Burns effect on hero image (slow zoom + pan)
- Staggered fade-in for product grids
- Smooth hover state transitions

## Deployment (Netlify)

### Build Settings
- Build command: `npm run build`
- Publish directory: `out`
- Node version: 18+

### Configuration Files
- `netlify.toml`: Security headers, cache headers, 404 redirects
- `next.config.js`: Static export, image settings, trailing slash

### Performance Optimizations
- Static site generation for fast initial load
- Font preloading via next/font
- Tailwind CSS purging (automatic)
- Image lazy loading (Next.js Image component)
- Cache headers for static assets (1 year) and HTML (revalidate)

## Brand Customization

### Change Brand Name
Edit `src/lib/constants.ts`:
```typescript
export const BRAND_NAME = 'Your Brand Name'
```

### Update Color Palette
Edit `tailwind.config.ts` color definitions and `src/app/globals.css` CSS variables

### Replace Mock Products
Replace `src/data/mock-products.ts` with real product data (maintain same type structure)

## Common Development Tasks

### Adding a New Page
1. Create `src/app/[route]/page.tsx`
2. Follow Next.js App Router conventions
3. Import layout components from `@/components/layout`

### Creating a New Component
1. Add to appropriate folder (`components/ui`, `components/shared`, etc.)
2. Use TypeScript with proper prop types
3. Use `cn()` utility for conditional Tailwind classes
4. Export as default or named export

### Adding Product Attributes
1. Update `ProductAttributes` type in `src/types/index.ts`
2. Update mock products in `src/data/mock-products.ts`
3. Update filter UI in `src/app/products/page.tsx`

## UI/UX Requirements

- Mobile-first responsive design
- Sticky purchase controls on mobile PDP
- Quick "Add to Cart" from product cards
- Breadcrumb navigation throughout
- Persistent header with search, cart icon with count, and account access
- Clear trust signals and CTAs on all conversion pages

## Notes for Future Development

- Product Detail Pages (PDP) not yet implemented - will need dynamic routes at `/products/[slug]`
- Checkout flow not implemented - needs separate pages for cart review, shipping, payment
- Account management not implemented - needs authentication system
- Search functionality UI exists but not connected to search logic
- Wishlist toggles work but don't persist to storage yet
