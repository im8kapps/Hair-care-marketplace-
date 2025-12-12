export type CategoryType = 'skincare' | 'makeup' | 'haircare' | 'bodycare' | 'fragrance' | 'accessories'

export type SkinType = 'normal' | 'dry' | 'oily' | 'combination' | 'sensitive' | 'all'

export type Concern =
  | 'anti-aging'
  | 'hydration'
  | 'brightening'
  | 'acne'
  | 'sensitivity'
  | 'fine-lines'
  | 'dark-spots'
  | 'dryness'

export interface ProductImage {
  main: string
  gallery: string[]
  thumbnail: string
}

export interface ProductAttributes {
  size: string
  vegan: boolean
  crueltyFree: boolean
  organic: boolean
  paraben_free: boolean
  natural: boolean
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
  skinTypes: SkinType[]
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
  productTypes?: CategoryType[]
}

export interface Testimonial {
  id: string
  name: string
  rating: number
  text: string
  productName?: string
  productCategory?: CategoryType
  verified: boolean
  location?: string
}

export interface CartItem {
  product: Product
  quantity: number
}

export interface FilterOptions {
  categories: CategoryType[]
  skinTypes: SkinType[]
  concerns: Concern[]
  priceRange: [number, number]
  inStock: boolean
  vegan?: boolean
  crueltyFree?: boolean
  organic?: boolean
  natural?: boolean
}

export type SortOption = 'best-selling' | 'price-low-high' | 'price-high-low' | 'newest' | 'top-rated'
