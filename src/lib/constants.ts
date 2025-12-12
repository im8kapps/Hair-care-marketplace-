export const BRAND_NAME = 'Byntleys Beauty Boutique'

export const COLORS = {
  primary: {
    50: '#FDF8FC',
    100: '#F9F0F7',
    900: '#1A1614',
  },
  accent: {
    500: '#DA6FC4',
    600: '#CD37B1',
  },
  luxury: {
    pink: '#E7A7D7',
    purple: '#CD37B1',
    lavender: '#EDD2E7',
    silver: '#C0C0C0',
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
  { name: 'Categories', href: '/products?filter=categories' },
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
    { name: 'Beauty Guide', href: '/guide' },
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
