export type CategoryType = 'shampoo' | 'conditioner' | 'treatment' | 'styling' | 'tools'

export type HairType = 'straight' | 'wavy' | 'curly' | 'coily' | 'all'

export type Concern =
  | 'dryness'
  | 'frizz'
  | 'damage'
  | 'color-protection'
  | 'volume'
  | 'scalp-health'

export interface ProductImage {
  main: string
  gallery: string[]
  thumbnail: string
}

export interface ProductAttributes {
  size: string
  vegan: boolean
  sulfateFree: boolean
  crueltyfree: boolean
  organic: boolean
}

export interface ProductRating {
  average: number
  count: number
}

export interface Product {
  id: string
  name: string
  brand: string
  slug: string
  description: string
  longDescription: string
  price: number
  compareAtPrice?: number
  images: ProductImage
  category: CategoryType
  hairTypes: HairType[]
  concerns: Concern[]
  attributes: ProductAttributes
  rating: ProductRating
  inStock: boolean
  featured: boolean
  new: boolean
  bestSeller: boolean
  ingredients?: string[]
}

export interface Category {
  id: string
  name: string
  slug: string
  description: string
  image: string
  hairTypes?: HairType[]
}

export interface Testimonial {
  id: string
  name: string
  rating: number
  text: string
  productName?: string
  hairType?: HairType
  verified: boolean
  location?: string
}

export interface CartItem {
  product: Product
  quantity: number
}

export interface FilterOptions {
  categories: CategoryType[]
  hairTypes: HairType[]
  concerns: Concern[]
  priceRange: [number, number]
  inStock: boolean
  vegan?: boolean
  sulfateFree?: boolean
  organic?: boolean
}

export type SortOption = 'best-selling' | 'price-low-high' | 'price-high-low' | 'newest' | 'top-rated'
