import HeroSection from '@/components/home/HeroSection'
import TrustBar from '@/components/home/TrustBar'
import FeaturedCategories from '@/components/home/FeaturedCategories'
import ProductShowcase from '@/components/home/ProductShowcase'
import Testimonials from '@/components/home/Testimonials'
import { mockProducts } from '@/data/mock-products'

export default function HomePage() {
  // Get best sellers (first 8 products marked as best sellers)
  const bestSellers = mockProducts.filter((product) => product.bestSeller).slice(0, 8)

  // Get new arrivals (first 8 products marked as new)
  const newArrivals = mockProducts.filter((product) => product.new).slice(0, 8)

  // If we don't have enough new products, just take the first 8
  const displayNewArrivals = newArrivals.length >= 4 ? newArrivals : mockProducts.slice(0, 8)

  return (
    <>
      <HeroSection />
      <TrustBar />
      <FeaturedCategories />
      <ProductShowcase
        title="Best Sellers"
        subtitle="Our most-loved products, chosen by customers like you"
        products={bestSellers}
        viewAllHref="/products?filter=best-sellers"
      />
      <Testimonials />
      {displayNewArrivals.length > 0 && (
        <ProductShowcase
          title="New Arrivals"
          subtitle="Discover the latest additions to our collection"
          products={displayNewArrivals}
          viewAllHref="/products?filter=new"
        />
      )}
    </>
  )
}
