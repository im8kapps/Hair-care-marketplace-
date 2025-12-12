'use client'

import { motion } from 'framer-motion'
import { TruckIcon, ShieldCheckIcon, SparklesIcon } from '@heroicons/react/24/outline'
import { TRUST_SIGNALS } from '@/lib/constants'

const icons = {
  truck: TruckIcon,
  shield: ShieldCheckIcon,
  leaf: SparklesIcon,
}

export default function TrustBar() {
  return (
    <section className="py-12 bg-primary-50 border-y border-primary-100">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TRUST_SIGNALS.map((signal, index) => {
            const Icon = icons[signal.icon as keyof typeof icons]

            return (
              <motion.div
                key={signal.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-accent-500/10 flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8 text-accent-600" />
                </div>
                <h3 className="text-lg font-serif font-semibold text-primary-900 mb-2">
                  {signal.title}
                </h3>
                <p className="text-sm text-primary-600">
                  {signal.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
