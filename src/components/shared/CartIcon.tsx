'use client'

import { ShoppingBagIcon } from '@heroicons/react/24/outline'
import { useCartStore } from '@/store/cartStore'
import { cn } from '@/lib/utils'

interface CartIconProps {
  className?: string
}

export default function CartIcon({ className }: CartIconProps) {
  const itemCount = useCartStore((state) => state.getItemCount())

  return (
    <div className={cn('relative', className)}>
      <ShoppingBagIcon className="w-6 h-6 text-primary-900" />
      {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-accent-500 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center animate-fade-in">
          {itemCount}
        </span>
      )}
    </div>
  )
}
