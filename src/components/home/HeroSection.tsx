'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-primary-100">
      {/* Background Image with Ken Burns Effect */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=1920&h=1080&fit=crop"
          alt="Luxury beauty products"
          fill
          priority
          className="object-cover animate-ken-burns"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/40 via-primary-900/20 to-primary-900/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-light text-white mb-6 leading-tight tracking-tight text-balance"
        >
          Affordable Beauty
          <br />
          That Never Fades
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-xl md:text-2xl text-white/90 mb-10 font-light leading-relaxed max-w-2xl mx-auto"
        >
          Discover premium, ethically-sourced beauty products for every need
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            delay: 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/products">
            <Button size="lg" variant="primary" className="min-w-[200px]">
              Shop Collection
            </Button>
          </Link>
          <Link href="/about">
            <Button size="lg" variant="outline" className="min-w-[200px] bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary-900">
              Our Story
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDownIcon className="w-8 h-8 text-white animate-bounce" />
      </motion.div>
    </section>
  )
}
