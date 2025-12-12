'use client'

import { useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import Input from '@/components/ui/Input'
import { cn } from '@/lib/utils'

interface SearchBarProps {
  onSearch?: (query: string) => void
  placeholder?: string
  className?: string
}

export default function SearchBar({
  onSearch,
  placeholder = 'Search products...',
  className,
}: SearchBarProps) {
  const [query, setQuery] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (onSearch) {
      onSearch(query)
    }
  }

  return (
    <form onSubmit={handleSubmit} className={cn('relative w-full max-w-md', className)}>
      <div className="relative">
        <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary-400" />
        <Input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="pl-12"
        />
      </div>
    </form>
  )
}
