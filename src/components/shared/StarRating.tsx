'use client'

import { StarIcon } from '@heroicons/react/24/solid'
import { StarIcon as StarOutlineIcon } from '@heroicons/react/24/outline'
import { cn } from '@/lib/utils'

interface StarRatingProps {
  rating: number
  maxRating?: number
  size?: 'sm' | 'md' | 'lg'
  showValue?: boolean
  className?: string
}

export default function StarRating({
  rating,
  maxRating = 5,
  size = 'md',
  showValue = false,
  className,
}: StarRatingProps) {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  }

  const stars = Array.from({ length: maxRating }, (_, index) => {
    const starValue = index + 1
    const isFilled = starValue <= Math.floor(rating)
    const isHalf = !isFilled && starValue === Math.ceil(rating)

    return (
      <div key={index} className="relative">
        {isFilled ? (
          <StarIcon className={cn(sizes[size], 'text-luxury-gold')} />
        ) : isHalf ? (
          <>
            <StarOutlineIcon className={cn(sizes[size], 'text-luxury-gold')} />
            <StarIcon
              className={cn(sizes[size], 'text-luxury-gold absolute top-0 left-0')}
              style={{ clipPath: 'inset(0 50% 0 0)' }}
            />
          </>
        ) : (
          <StarOutlineIcon className={cn(sizes[size], 'text-primary-300')} />
        )}
      </div>
    )
  })

  return (
    <div className={cn('flex items-center gap-1', className)}>
      <div className="flex gap-0.5">{stars}</div>
      {showValue && (
        <span className="text-sm font-sans text-primary-600 ml-2">
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  )
}
