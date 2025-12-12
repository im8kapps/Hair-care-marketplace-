import { InputHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        className={cn(
          'flex h-12 w-full rounded-lg border border-primary-200 bg-white px-4 py-3 text-base font-sans text-primary-900 placeholder:text-primary-400 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        {...props}
      />
    )
  }
)

Input.displayName = 'Input'

export default Input
