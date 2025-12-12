import type { Category } from '@/types'

export const categories: Category[] = [
  {
    id: 'cat_001',
    name: 'Shampoos',
    slug: 'shampoos',
    description: 'Gentle cleansers for every hair type and concern',
    image: 'https://images.unsplash.com/photo-1571875257727-256c39da42af?w=800&h=1000&fit=crop',
    hairTypes: ['all'],
  },
  {
    id: 'cat_002',
    name: 'Conditioners',
    slug: 'conditioners',
    description: 'Nourishing formulas that soften and detangle',
    image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=800&h=1000&fit=crop',
    hairTypes: ['all'],
  },
  {
    id: 'cat_003',
    name: 'Treatments',
    slug: 'treatments',
    description: 'Intensive care for damaged and dry hair',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&h=1000&fit=crop',
    hairTypes: ['all'],
  },
  {
    id: 'cat_004',
    name: 'Styling',
    slug: 'styling',
    description: 'Create and hold your perfect look',
    image: 'https://images.unsplash.com/photo-1629195861437-e5cd1dc7c451?w=800&h=1000&fit=crop',
    hairTypes: ['all'],
  },
  {
    id: 'cat_005',
    name: 'For Curly Hair',
    slug: 'curly-hair',
    description: 'Specialized products for curls and coils',
    image: 'https://images.unsplash.com/photo-1619451334792-150fd785ee74?w=800&h=1000&fit=crop',
    hairTypes: ['curly', 'coily'],
  },
  {
    id: 'cat_006',
    name: 'Color Care',
    slug: 'color-care',
    description: 'Protect and preserve your vibrant color',
    image: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=800&h=1000&fit=crop',
    hairTypes: ['all'],
  },
]

export const featuredCategories = categories.slice(0, 4)
