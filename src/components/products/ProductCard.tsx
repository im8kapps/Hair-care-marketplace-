'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { HeartIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid'
import type { Product } from '@/types'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import StarRating from '@/components/shared/StarRating'
import { useCartStore } from '@/store/cartStore'
import { formatPrice, formatDiscount } from '@/lib/utils'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [imageIndex, setImageIndex] = useState(0)
  const addItem = useCartStore((state) => state.addItem)

  const hasDiscount = product.compareAtPrice && product.compareAtPrice > product.price
  const discountPercent = hasDiscount
    ? formatDiscount(product.compareAtPrice!, product.price)
    : 0

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    addItem(product, 1)
  }

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsWishlisted(!isWishlisted)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Link href={`/products/${product.slug}`}>
        <div className="group relative bg-white rounded-lg overflow-hidden shadow-luxury hover:shadow-lift transition-all duration-500 hover:-translate-y-1">
          {/* Image Container */}
          <div
            className="relative aspect-[3/4] overflow-hidden bg-primary-50"
            onMouseEnter={() => {
              if (product.images.gallery.length > 1) {
                setImageIndex(1)
              }
            }}
            onMouseLeave={() => setImageIndex(0)}
          >
            <Image
              src={product.images.gallery[imageIndex] || product.images.main}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Badges */}
            <div className="absolute top-3 left-3 flex flex-col gap-2">
              {product.new && <Badge variant="new">New</Badge>}
              {product.bestSeller && <Badge variant="best-seller">Best Seller</Badge>}
              {hasDiscount && <Badge variant="sale">-{discountPercent}%</Badge>}
            </div>

            {/* Wishlist Button */}
            <button
              onClick={handleToggleWishlist}
              className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-all duration-300 shadow-md"
              aria-label="Add to wishlist"
            >
              {isWishlisted ? (
                <HeartSolidIcon className="w-5 h-5 text-semantic-error" />
              ) : (
                <HeartIcon className="w-5 h-5 text-primary-900" />
              )}
            </button>

            {/* Add to Cart Button - Slides up on hover */}
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <Button
                onClick={handleAddToCart}
                className="w-full"
                variant="primary"
                size="md"
              >
                <ShoppingBagIcon className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>
            </div>
          </div>

          {/* Product Info */}
          <div className="p-4">
            {/* Brand */}
            <p className="text-xs font-sans font-medium text-primary-600 uppercase tracking-wider mb-1">
              {product.brand}
            </p>

            {/* Product Name */}
            <h3 className="text-lg font-serif font-semibold text-primary-900 mb-2 line-clamp-2 group-hover:text-accent-600 transition-colors">
              {product.name}
            </h3>

            {/* Description */}
            <p className="text-sm text-primary-600 line-clamp-2 mb-3">
              {product.description}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-3">
              <StarRating rating={product.rating.average} size="sm" />
              <span className="text-xs text-primary-500">
                ({product.rating.count})
              </span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-serif font-semibold text-accent-600">
                {formatPrice(product.price)}
              </span>
              {hasDiscount && (
                <span className="text-sm font-sans text-primary-400 line-through">
                  {formatPrice(product.compareAtPrice!)}
                </span>
              )}
            </div>

            {/* Attributes */}
            <div className="flex flex-wrap gap-1 mt-3">
              {product.attributes.vegan && (
                <span className="text-xs px-2 py-1 bg-luxury-sage/20 text-luxury-sage rounded-full">
                  Vegan
                </span>
              )}
              {product.attributes.crueltyFree && (
                <span className="text-xs px-2 py-1 bg-primary-100 text-primary-700 rounded-full">
                  Cruelty-Free
                </span>
              )}
              {product.attributes.paraben_free && (
                <span className="text-xs px-2 py-1 bg-primary-100 text-primary-700 rounded-full">
                  Paraben-Free
                </span>
              )}
              {product.attributes.organic && (
                <span className="text-xs px-2 py-1 bg-primary-100 text-primary-700 rounded-full">
                  Organic
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
