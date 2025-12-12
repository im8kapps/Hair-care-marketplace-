'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { UserIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import SearchBar from '@/components/shared/SearchBar'
import CartIcon from '@/components/shared/CartIcon'
import { BRAND_NAME, NAVIGATION_LINKS } from '@/lib/constants'
import { cn } from '@/lib/utils'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/bbbLogo.png"
              alt={BRAND_NAME}
              width={180}
              height={60}
              className="h-12 md:h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-sans font-medium text-primary-900 hover:text-accent-600 transition-colors link-underline"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Search & Icons */}
          <div className="flex items-center gap-4">
            {/* Desktop Search */}
            <div className="hidden md:block">
              <SearchBar className="w-64" />
            </div>

            {/* Icons */}
            <div className="flex items-center gap-4">
              <Link
                href="/account"
                className="hover:text-accent-600 transition-colors"
                aria-label="Account"
              >
                <UserIcon className="w-6 h-6 text-primary-900" />
              </Link>

              <Link
                href="/cart"
                className="hover:text-accent-600 transition-colors"
                aria-label="Shopping Cart"
              >
                <CartIcon />
              </Link>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <XMarkIcon className="w-6 h-6 text-primary-900" />
                ) : (
                  <Bars3Icon className="w-6 h-6 text-primary-900" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <SearchBar />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-primary-100">
          <nav className="px-4 py-6 space-y-4">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block text-base font-sans font-medium text-primary-900 hover:text-accent-600 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
