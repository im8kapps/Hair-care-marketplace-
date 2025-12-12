import type { Metadata } from 'next'
import { cormorant, inter } from './fonts'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Luxe Hair Care - Premium Natural Hair Products',
  description: 'Transform your hair care routine with luxury products crafted from clean, ethically-sourced ingredients.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
