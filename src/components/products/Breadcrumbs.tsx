import Link from 'next/link'
import { ChevronRightIcon } from '@heroicons/react/24/outline'

interface BreadcrumbItem {
  name: string
  href?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center space-x-2 text-sm">
      <Link
        href="/"
        className="text-primary-600 hover:text-primary-900 transition-colors link-underline"
      >
        Home
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1

        return (
          <div key={item.name} className="flex items-center space-x-2">
            <ChevronRightIcon className="w-4 h-4 text-primary-400" />
            {isLast || !item.href ? (
              <span className="text-primary-900 font-medium uppercase tracking-wide text-xs">
                {item.name}
              </span>
            ) : (
              <Link
                href={item.href}
                className="text-primary-600 hover:text-primary-900 transition-colors link-underline uppercase tracking-wide text-xs"
              >
                {item.name}
              </Link>
            )}
          </div>
        )
      })}
    </nav>
  )
}
