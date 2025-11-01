import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const categories = [
  { id: 'textiles', name: 'Textiles & Fabrics' },
  { id: 'pottery', name: 'Pottery & Ceramics' },
  { id: 'jewelry', name: 'Jewelry & Accessories' },
  { id: 'woodwork', name: 'Wood Crafts' },
  { id: 'paintings', name: 'Paintings & Art' },
  { id: 'metalwork', name: 'Metal Work' },
  { id: 'bamboo', name: 'Bamboo Crafts' },
  { id: 'leather', name: 'Leather Work' },
]

const locations = [
  'Delhi NCR',
  'Rajasthan',
  'Gujarat',
  'West Bengal',
  'Uttar Pradesh',
  'Maharashtra',
  'Tamil Nadu',
  'Kerala',
]

export default function ProductFilters({ filters, setFilters }) {
  function updateFilter(key, value) {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }))
  }

  return (
    <form className="sticky top-6">
      <h2 className="sr-only">Product filters</h2>

      {/* Categories */}
      <Disclosure as="div" className="border-b border-gray-200 py-6" defaultOpen>
        {({ open }) => (
          <>
            <h3 className="-my-3 flow-root">
              <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                <span className="font-medium text-gray-900">Categories</span>
                <span className="ml-6 flex items-center">
                  <ChevronDownIcon
                    className={`h-5 w-5 ${open ? '-rotate-180' : 'rotate-0'}`}
                    aria-hidden="true"
                  />
                </span>
              </Disclosure.Button>
            </h3>
            <Disclosure.Panel className="pt-6">
              <div className="space-y-4">
                {categories.map((category) => (
                  <div key={category.id} className="flex items-center">
                    <input
                      id={category.id}
                      name={`category-${category.id}`}
                      value={category.id}
                      type="checkbox"
                      checked={filters.categories.includes(category.id)}
                      onChange={(e) => {
                        const value = e.target.value
                        updateFilter('categories', 
                          e.target.checked 
                            ? [...filters.categories, value]
                            : filters.categories.filter(c => c !== value)
                        )
                      }}
                      className="h-4 w-4 rounded border-gray-300 text-primary-400 focus:ring-primary-500"
                    />
                    <label
                      htmlFor={category.id}
                      className="ml-3 text-sm text-gray-600"
                    >
                      {category.name}
                    </label>
                  </div>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      {/* Price Range */}
      <Disclosure as="div" className="border-b border-gray-200 py-6" defaultOpen>
        {({ open }) => (
          <>
            <h3 className="-my-3 flow-root">
              <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                <span className="font-medium text-gray-900">Price Range</span>
                <span className="ml-6 flex items-center">
                  <ChevronDownIcon
                    className={`h-5 w-5 ${open ? '-rotate-180' : 'rotate-0'}`}
                    aria-hidden="true"
                  />
                </span>
              </Disclosure.Button>
            </h3>
            <Disclosure.Panel className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <input
                    type="number"
                    value={filters.priceRange[0]}
                    onChange={(e) => updateFilter('priceRange', [
                      Number(e.target.value),
                      filters.priceRange[1]
                    ])}
                    className="input"
                    placeholder="Min"
                  />
                  <span>to</span>
                  <input
                    type="number"
                    value={filters.priceRange[1]}
                    onChange={(e) => updateFilter('priceRange', [
                      filters.priceRange[0],
                      Number(e.target.value)
                    ])}
                    className="input"
                    placeholder="Max"
                  />
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      {/* Location */}
      <Disclosure as="div" className="border-b border-gray-200 py-6" defaultOpen>
        {({ open }) => (
          <>
            <h3 className="-my-3 flow-root">
              <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                <span className="font-medium text-gray-900">Location</span>
                <span className="ml-6 flex items-center">
                  <ChevronDownIcon
                    className={`h-5 w-5 ${open ? '-rotate-180' : 'rotate-0'}`}
                    aria-hidden="true"
                  />
                </span>
              </Disclosure.Button>
            </h3>
            <Disclosure.Panel className="pt-6">
              <div className="space-y-4">
                <select
                  value={filters.artisanLocation}
                  onChange={(e) => updateFilter('artisanLocation', e.target.value)}
                  className="input"
                >
                  <option value="">All Locations</option>
                  {locations.map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      {/* Rating */}
      <Disclosure as="div" className="border-b border-gray-200 py-6" defaultOpen>
        {({ open }) => (
          <>
            <h3 className="-my-3 flow-root">
              <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                <span className="font-medium text-gray-900">Rating</span>
                <span className="ml-6 flex items-center">
                  <ChevronDownIcon
                    className={`h-5 w-5 ${open ? '-rotate-180' : 'rotate-0'}`}
                    aria-hidden="true"
                  />
                </span>
              </Disclosure.Button>
            </h3>
            <Disclosure.Panel className="pt-6">
              <div className="space-y-4">
                {[4, 3, 2, 1].map((rating) => (
                  <div key={rating} className="flex items-center">
                    <input
                      id={`rating-${rating}`}
                      name="rating"
                      type="radio"
                      value={rating}
                      checked={filters.rating === rating}
                      onChange={(e) => updateFilter('rating', Number(e.target.value))}
                      className="h-4 w-4 border-gray-300 text-primary-400 focus:ring-primary-500"
                    />
                    <label
                      htmlFor={`rating-${rating}`}
                      className="ml-3 text-sm text-gray-600"
                    >
                      {rating}+ Stars
                    </label>
                  </div>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      {/* Clear Filters */}
      <div className="py-6">
        <button
          type="button"
          onClick={() => setFilters(defaultFilters)}
          className="btn-outline w-full"
        >
          Clear Filters
        </button>
      </div>
    </form>
  )
}