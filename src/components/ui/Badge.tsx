import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'new' | 'sale' | 'best-seller' | 'featured'
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    const variants = {
      default: 'bg-primary-900 text-white',
      new: 'bg-luxury-sage text-white',
      sale: 'bg-semantic-error text-white',
      'best-seller': 'bg-luxury-gold text-primary-900',
      featured: 'bg-accent-500 text-white',
    }

    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center px-3 py-1 text-xs font-sans font-semibold uppercase tracking-wider rounded-full',
          variants[variant],
          className
        )}
        {...props}
      >
        {children}
      </span>
    )
  }
)

Badge.displayName = 'Badge'

export default Badge
