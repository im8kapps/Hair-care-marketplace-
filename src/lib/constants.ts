export const BRAND_NAME = 'Luxe Hair Care'

export const COLORS = {
  primary: {
    50: '#FAF8F5',
    100: '#F5F1E8',
    900: '#1A1614',
  },
  accent: {
    500: '#8B7355',
    600: '#6B5742',
  },
  luxury: {
    gold: '#D4AF37',
    sage: '#9CAF88',
    rose: '#E8D5D0',
  },
} as const

export const EASINGS = {
  luxury: 'cubic-bezier(0.22, 1, 0.36, 1)',
  smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
} as const

export const ANIMATION_DURATIONS = {
  fast: 0.2,
  normal: 0.4,
  slow: 0.6,
  verySlow: 1.2,
} as const

export const FREE_SHIPPING_THRESHOLD = 50

export const TRUST_SIGNALS = [
  {
    title: 'Free Shipping',
    description: `Orders over $${FREE_SHIPPING_THRESHOLD}`,
    icon: 'truck',
  },
  {
    title: '30-Day Guarantee',
    description: 'Love it or return it',
    icon: 'shield',
  },
  {
    title: 'Ethically Sourced',
    description: 'Clean ingredients only',
    icon: 'leaf',
  },
] as const

export const NAVIGATION_LINKS = [
  { name: 'Shop All', href: '/products' },
  { name: 'By Hair Type', href: '/products?filter=hair-type' },
  { name: 'Brands', href: '/brands' },
  { name: 'About', href: '/about' },
] as const

export const FOOTER_LINKS = {
  shop: [
    { name: 'All Products', href: '/products' },
    { name: 'Best Sellers', href: '/products?filter=best-sellers' },
    { name: 'New Arrivals', href: '/products?filter=new' },
    { name: 'Sale', href: '/products?filter=sale' },
  ],
  help: [
    { name: 'Contact Us', href: '/contact' },
    { name: 'Shipping & Returns', href: '/shipping' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Hair Care Guide', href: '/guide' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
} as const

export const SOCIAL_LINKS = [
  { name: 'Instagram', href: 'https://instagram.com', icon: 'instagram' },
  { name: 'Facebook', href: 'https://facebook.com', icon: 'facebook' },
  { name: 'Pinterest', href: 'https://pinterest.com', icon: 'pinterest' },
] as const
