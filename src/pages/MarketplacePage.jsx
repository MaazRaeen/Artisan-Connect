import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline'
import ProductFilters from '../components/marketplace/ProductFilters'
import ProductGrid from '../components/marketplace/ProductGrid'
import SortOptions from '../components/marketplace/SortOptions'

const defaultFilters = {
  categories: [],
  priceRange: [0, 100000],
  artisanLocation: '',
  rating: 0
}

export default function MarketplacePage() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [filters, setFilters] = useState(defaultFilters)
  const [sortBy, setSortBy] = useState('newest')

  return (
    <div className="bg-white">
      {/* Mobile filter dialog */}
      <Transition.Root show={mobileFiltersOpen} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
                <div className="flex items-center justify-between px-4">
                  <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                  <button
                    type="button"
                    className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    onClick={() => setMobileFiltersOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                <div className="px-4">
                  <ProductFilters filters={filters} setFilters={setFilters} />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Page header */}
        <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            Artisan Products
          </h1>
          <div className="flex items-center">
            <SortOptions sortBy={sortBy} setSortBy={setSortBy} />
            <button
              type="button"
              className="ml-4 p-2 text-gray-400 hover:text-gray-500 lg:hidden"
              onClick={() => setMobileFiltersOpen(true)}
            >
              <span className="sr-only">Filters</span>
              <AdjustmentsHorizontalIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Product grid + filters */}
        <section aria-labelledby="products-heading" className="pb-24 pt-6">
          <h2 id="products-heading" className="sr-only">Products</h2>
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
            {/* Filters */}
            <div className="hidden lg:block">
              <ProductFilters filters={filters} setFilters={setFilters} />
            </div>

            {/* Product grid */}
            <div className="lg:col-span-3">
              <ProductGrid filters={filters} sortBy={sortBy} />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}