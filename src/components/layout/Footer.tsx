import Link from 'next/link'
import { BRAND_NAME, FOOTER_LINKS, SOCIAL_LINKS } from '@/lib/constants'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-primary-50 pt-16 pb-8">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-12">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-serif font-semibold mb-4">
              {BRAND_NAME}
            </h2>
            <p className="text-primary-200 mb-6 leading-relaxed">
              Premium hair care products crafted with clean, ethically-sourced ingredients. Transform your hair care routine with luxury you can feel.
            </p>

            {/* Newsletter */}
            <div className="mt-8">
              <h3 className="text-sm font-sans font-semibold uppercase tracking-wider mb-4">
                Join Our Newsletter
              </h3>
              <form className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-primary-800 border-primary-700 text-white placeholder:text-primary-400"
                />
                <Button variant="primary" type="submit">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>

          {/* Shop Links */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-sans font-semibold uppercase tracking-wider mb-4">
              Shop
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-200 hover:text-white transition-colors link-underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-sans font-semibold uppercase tracking-wider mb-4">
              Help
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.help.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-200 hover:text-white transition-colors link-underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Social */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-sans font-semibold uppercase tracking-wider mb-4">
              Follow Us
            </h3>
            <div className="flex gap-4 mb-8">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-800 flex items-center justify-center hover:bg-accent-500 transition-colors"
                  aria-label={link.name}
                >
                  <span className="text-sm font-semibold">
                    {link.icon[0].toUpperCase()}
                  </span>
                </a>
              ))}
            </div>

            <div className="space-y-2">
              {FOOTER_LINKS.legal.map((link) => (
                <div key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-800 pt-8 text-center">
          <p className="text-sm text-primary-300">
            © {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
