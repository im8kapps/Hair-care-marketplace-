import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-sans font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'

    const variants = {
      primary: 'bg-accent-500 text-white hover:bg-accent-600 shadow-md hover:shadow-lg',
      secondary: 'bg-primary-900 text-white hover:bg-primary-900/90 shadow-md hover:shadow-lg',
      outline: 'border-2 border-accent-500 text-accent-600 hover:bg-accent-500 hover:text-white',
      ghost: 'text-primary-900 hover:bg-primary-100',
    }

    const sizes = {
      sm: 'text-sm px-4 py-2 rounded-md',
      md: 'text-base px-6 py-3 rounded-lg',
      lg: 'text-lg px-8 py-4 rounded-lg',
    }

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
