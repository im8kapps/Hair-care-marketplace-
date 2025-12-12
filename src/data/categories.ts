import type { Category } from '@/types'

export const categories: Category[] = [
  {
    id: 'cat_001',
    name: 'Skincare',
    slug: 'skincare',
    description: 'Nourishing products for healthy, radiant skin',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&h=1000&fit=crop',
    productTypes: ['skincare'],
  },
  {
    id: 'cat_002',
    name: 'Makeup',
    slug: 'makeup',
    description: 'Premium cosmetics for every look and occasion',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&h=1000&fit=crop',
    productTypes: ['makeup'],
  },
  {
    id: 'cat_003',
    name: 'Haircare',
    slug: 'haircare',
    description: 'Luxurious care for beautiful, healthy hair',
    image: 'https://images.unsplash.com/photo-1571875257727-256c39da42af?w=800&h=1000&fit=crop',
    productTypes: ['haircare'],
  },
  {
    id: 'cat_004',
    name: 'Body Care',
    slug: 'bodycare',
    description: 'Pamper yourself with indulgent body essentials',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&h=1000&fit=crop',
    productTypes: ['bodycare'],
  },
  {
    id: 'cat_005',
    name: 'Fragrance',
    slug: 'fragrance',
    description: 'Captivating scents for every personality',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&h=1000&fit=crop',
    productTypes: ['fragrance'],
  },
  {
    id: 'cat_006',
    name: 'Accessories',
    slug: 'accessories',
    description: 'Essential tools and beauty accessories',
    image: 'https://images.unsplash.com/photo-1629195861437-e5cd1dc7c451?w=800&h=1000&fit=crop',
    productTypes: ['accessories'],
  },
]

export const featuredCategories = categories.slice(0, 4)
