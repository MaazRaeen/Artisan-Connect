import { useEffect, useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { motion } from 'framer-motion'
import products from '../../data/products'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ProductGrid({ filters, sortBy }) {
  const [filteredProducts, setFilteredProducts] = useState(products)

  useEffect(() => {
    let result = [...products]

    // Apply category filters
    if (filters.categories.length > 0) {
      result = result.filter(product => 
        filters.categories.includes(product.category)
      )
    }

    // Apply price range filter
    result = result.filter(product => 
      product.price >= filters.priceRange[0] && 
      product.price <= filters.priceRange[1]
    )

    // Apply location filter
    if (filters.artisanLocation) {
      result = result.filter(product => 
        product.artisanLocation === filters.artisanLocation
      )
    }

    // Apply rating filter
    if (filters.rating > 0) {
      result = result.filter(product => 
        product.rating >= filters.rating
      )
    }

    // Apply sorting
    result.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price
        case 'price-high':
          return b.price - a.price
        case 'rating':
          return b.rating - a.rating
        case 'popular':
          return b.popularity - a.popularity
        case 'newest':
          return new Date(b.dateAdded) - new Date(a.dateAdded)
        default:
          return 0
      }
    })

    setFilteredProducts(result)
  }, [filters, sortBy])

  if (filteredProducts.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium text-gray-900">No products found</h3>
        <p className="mt-1 text-sm text-gray-500">
          Try adjusting your filters to find what you're looking for.
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
      {filteredProducts.map((product, idx) => (
        <motion.div
          key={product.id}
          className="group relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: idx * 0.1 }}
        >
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover object-center group-hover:opacity-75"
            />
          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="text-sm text-gray-700">
                <a href="#">
                  <span aria-hidden="true" className="absolute inset-0" />
                  {product.name}
                </a>
              </h3>
              <p className="mt-1 text-sm text-gray-500">{product.artisan}</p>
              <p className="mt-1 text-sm text-gray-500">{product.artisanLocation}</p>
              <div className="mt-1 flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <StarIcon
                    key={rating}
                    className={classNames(
                      product.rating > rating ? 'text-yellow-400' : 'text-gray-200',
                      'h-4 w-4 flex-shrink-0'
                    )}
                    aria-hidden="true"
                  />
                ))}
                <p className="ml-1 text-sm text-gray-500">
                  {product.rating.toFixed(1)}
                </p>
              </div>
            </div>
            <p className="text-sm font-medium text-gray-900">₹{product.price.toLocaleString()}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}