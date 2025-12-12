'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import ProductCard from '@/components/products/ProductCard'
import Button from '@/components/ui/Button'
import type { Product } from '@/types'

interface ProductShowcaseProps {
  title: string
  subtitle?: string
  products: Product[]
  viewAllHref?: string
}

export default function ProductShowcase({
  title,
  subtitle,
  products,
  viewAllHref = '/products',
}: ProductShowcaseProps) {
  return (
    <section className="py-20 bg-primary-50">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-primary-900 mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-primary-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link href={viewAllHref}>
            <Button variant="outline" size="lg">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
