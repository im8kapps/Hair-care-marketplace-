'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import Breadcrumbs from '@/components/products/Breadcrumbs'
import ProductGrid from '@/components/products/ProductGrid'
import { mockProducts } from '@/data/mock-products'
import type { Product, SortOption, CategoryType, SkinType, Concern } from '@/types'

export default function ProductsPage() {
  const [sortBy, setSortBy] = useState<SortOption>('best-selling')
  const [selectedCategories, setSelectedCategories] = useState<CategoryType[]>([])
  const [selectedSkinTypes, setSelectedSkinTypes] = useState<SkinType[]>([])
  const [selectedConcerns, setSelectedConcerns] = useState<Concern[]>([])
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100])
  const [showFilters, setShowFilters] = useState(false)

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...mockProducts]

    // Apply category filter
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((p) => selectedCategories.includes(p.category))
    }

    // Apply skin type filter
    if (selectedSkinTypes.length > 0) {
      filtered = filtered.filter((p) =>
        p.skinTypes.some((type) => selectedSkinTypes.includes(type) || type === 'all')
      )
    }

    // Apply concerns filter
    if (selectedConcerns.length > 0) {
      filtered = filtered.filter((p) =>
        p.concerns.some((concern) => selectedConcerns.includes(concern))
      )
    }

    // Apply price range filter
    filtered = filtered.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    )

    // Sort products
    switch (sortBy) {
      case 'price-low-high':
        filtered.sort((a, b) => a.price - b.price)
        break
      case 'price-high-low':
        filtered.sort((a, b) => b.price - a.price)
        break
      case 'newest':
        filtered.sort((a, b) => (a.new === b.new ? 0 : a.new ? -1 : 1))
        break
      case 'top-rated':
        filtered.sort((a, b) => b.rating.average - a.rating.average)
        break
      case 'best-selling':
      default:
        filtered.sort((a, b) => (a.bestSeller === b.bestSeller ? 0 : a.bestSeller ? -1 : 1))
        break
    }

    return filtered
  }, [sortBy, selectedCategories, selectedSkinTypes, selectedConcerns, priceRange])

  const toggleCategory = (category: CategoryType) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    )
  }

  const toggleSkinType = (skinType: SkinType) => {
    setSelectedSkinTypes((prev) =>
      prev.includes(skinType) ? prev.filter((h) => h !== skinType) : [...prev, skinType]
    )
  }

  const toggleConcern = (concern: Concern) => {
    setSelectedConcerns((prev) =>
      prev.includes(concern) ? prev.filter((c) => c !== concern) : [...prev, concern]
    )
  }

  const clearAllFilters = () => {
    setSelectedCategories([])
    setSelectedSkinTypes([])
    setSelectedConcerns([])
    setPriceRange([0, 100])
  }

  const activeFilterCount =
    selectedCategories.length + selectedSkinTypes.length + selectedConcerns.length

  return (
    <div className="min-h-screen bg-primary-50">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumbs */}
        <div className="mb-6">
          <Breadcrumbs items={[{ name: 'All Products' }]} />
        </div>

        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-primary-900 mb-4">
            All Products
          </h1>
          <p className="text-lg text-primary-600">
            Discover our complete collection of premium beauty products
          </p>
        </motion.div>

        {/* Filters & Sort Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden px-4 py-2 bg-white rounded-lg shadow-md text-sm font-medium text-primary-900 hover:bg-primary-100 transition-colors"
            >
              Filters {activeFilterCount > 0 && `(${activeFilterCount})`}
            </button>
            <p className="text-sm text-primary-600">
              {filteredAndSortedProducts.length} products
            </p>
          </div>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            className="px-4 py-2 bg-white rounded-lg border border-primary-200 text-sm font-medium text-primary-900 focus:outline-none focus:ring-2 focus:ring-accent-500"
          >
            <option value="best-selling">Best Selling</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
            <option value="newest">Newest</option>
            <option value="top-rated">Top Rated</option>
          </select>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside
            className={`${
              showFilters ? 'block' : 'hidden'
            } lg:block w-full lg:w-64 flex-shrink-0`}
          >
            <div className="bg-white rounded-lg shadow-luxury p-6 sticky top-24">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-serif font-semibold text-primary-900">
                  Filters
                </h2>
                {activeFilterCount > 0 && (
                  <button
                    onClick={clearAllFilters}
                    className="text-xs text-accent-600 hover:text-accent-700 font-medium"
                  >
                    Clear All
                  </button>
                )}
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <h3 className="text-sm font-sans font-semibold uppercase tracking-wider text-primary-900 mb-3">
                  Category
                </h3>
                <div className="space-y-2">
                  {(['skincare', 'makeup', 'haircare', 'bodycare', 'fragrance', 'accessories'] as CategoryType[]).map((category) => (
                    <label key={category} className="flex items-center cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category)}
                        onChange={() => toggleCategory(category)}
                        className="w-4 h-4 text-accent-500 border-primary-300 rounded focus:ring-accent-500"
                      />
                      <span className="ml-3 text-sm text-primary-700 group-hover:text-primary-900 capitalize">
                        {category === 'bodycare' ? 'Body Care' : category}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Skin Type Filter */}
              <div className="mb-6">
                <h3 className="text-sm font-sans font-semibold uppercase tracking-wider text-primary-900 mb-3">
                  Skin Type
                </h3>
                <div className="space-y-2">
                  {(['normal', 'dry', 'oily', 'combination', 'sensitive'] as SkinType[]).map((skinType) => (
                    <label key={skinType} className="flex items-center cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={selectedSkinTypes.includes(skinType)}
                        onChange={() => toggleSkinType(skinType)}
                        className="w-4 h-4 text-accent-500 border-primary-300 rounded focus:ring-accent-500"
                      />
                      <span className="ml-3 text-sm text-primary-700 group-hover:text-primary-900 capitalize">
                        {skinType}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Concerns Filter */}
              <div className="mb-6">
                <h3 className="text-sm font-sans font-semibold uppercase tracking-wider text-primary-900 mb-3">
                  Concerns
                </h3>
                <div className="space-y-2">
                  {(['anti-aging', 'hydration', 'brightening', 'acne', 'sensitivity', 'fine-lines', 'dark-spots', 'dryness'] as Concern[]).map((concern) => (
                    <label key={concern} className="flex items-center cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={selectedConcerns.includes(concern)}
                        onChange={() => toggleConcern(concern)}
                        className="w-4 h-4 text-accent-500 border-primary-300 rounded focus:ring-accent-500"
                      />
                      <span className="ml-3 text-sm text-primary-700 group-hover:text-primary-900 capitalize">
                        {concern.replace('-', ' ')}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="text-sm font-sans font-semibold uppercase tracking-wider text-primary-900 mb-3">
                  Price Range
                </h3>
                <div className="space-y-3">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-primary-600">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            <ProductGrid products={filteredAndSortedProducts} />
          </div>
        </div>
      </div>
    </div>
  )
}
