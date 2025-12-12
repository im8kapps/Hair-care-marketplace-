'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { testimonials } from '@/data/testimonials'
import StarRating from '@/components/shared/StarRating'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const goToPrevious = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -50 : 50,
      opacity: 0,
    }),
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-primary-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-primary-600">
            Real reviews from our community
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative min-h-[300px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="text-center"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <svg
                  className="w-12 h-12 mx-auto text-luxury-gold"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M10 8c-3.3 0-6 2.7-6 6v8h8v-8h-4c0-2.2 1.8-4 4-4V8zm14 0c-3.3 0-6 2.7-6 6v8h8v-8h-4c0-2.2 1.8-4 4-4V8z" />
                </svg>
              </div>

              {/* Rating */}
              <div className="flex justify-center mb-4">
                <StarRating rating={currentTestimonial.rating} size="md" />
              </div>

              {/* Review Text */}
              <p className="text-xl md:text-2xl font-light text-primary-900 mb-6 leading-relaxed italic max-w-2xl mx-auto">
                "{currentTestimonial.text}"
              </p>

              {/* Author Info */}
              <div className="space-y-1">
                <p className="text-lg font-serif font-semibold text-primary-900">
                  {currentTestimonial.name}
                </p>
                {currentTestimonial.productName && (
                  <p className="text-sm text-primary-600">
                    {currentTestimonial.productName}
                  </p>
                )}
                {currentTestimonial.location && (
                  <p className="text-xs text-primary-500">
                    {currentTestimonial.location}
                  </p>
                )}
                {currentTestimonial.verified && (
                  <p className="text-xs text-luxury-sage font-medium">
                    ✓ Verified Purchase
                  </p>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary-100 hover:bg-primary-200 flex items-center justify-center transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeftIcon className="w-5 h-5 text-primary-900" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary-100 hover:bg-primary-200 flex items-center justify-center transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRightIcon className="w-5 h-5 text-primary-900" />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1)
                setCurrentIndex(index)
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-accent-500 w-8'
                  : 'bg-primary-300 hover:bg-primary-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
