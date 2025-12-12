'use client'

import ProductCard from './ProductCard'
import type { Product } from '@/types'

interface ProductGridProps {
  products: Product[]
}

export default function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="col-span-full text-center py-20">
        <p className="text-xl text-primary-600">No products found.</p>
        <p className="text-sm text-primary-500 mt-2">
          Try adjusting your filters or search criteria.
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
