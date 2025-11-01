import { Link } from 'react-router-dom'
import { StarIcon } from '@heroicons/react/20/solid'
import { HeartIcon } from '@heroicons/react/24/outline'

export default function ProductCard({ product }) {
  return (
    <div className="card overflow-hidden">
      <div className="relative">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="h-64 w-full object-cover hover:opacity-75 transition-opacity duration-200"
          />
        </Link>
        <button
          type="button"
          className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-50"
        >
          <HeartIcon className="h-5 w-5 text-gray-400" />
        </button>
      </div>
      <div className="p-4">
        <Link to={`/product/${product.id}`} className="group">
          <h3 className="text-lg font-medium text-gray-900 group-hover:text-primary-400">
            {product.name}
          </h3>
        </Link>
        <div className="mt-1 flex justify-between items-center">
          <p className="text-lg font-semibold text-gray-900">
            ₹{product.price.toLocaleString()}
          </p>
          <div className="flex items-center">
            <StarIcon className="h-5 w-5 text-yellow-400" />
            <p className="ml-1 text-sm text-gray-600">
              {product.rating} ({product.reviews})
            </p>
          </div>
        </div>
        <div className="mt-2 flex items-center">
          <Link
            to={`/artisan/${product.artisan.id}`}
            className="text-sm text-gray-600 hover:text-primary-400"
          >
            By {product.artisan.name}
          </Link>
          <span className="mx-2 text-gray-400">•</span>
          <span className="text-sm text-gray-500">
            {product.artisan.location}
          </span>
        </div>
        <div className="mt-4 flex space-x-2">
          <button className="btn flex-1">
            Add to Cart
          </button>
          <Link 
            to={`/product/${product.id}`}
            className="btn-outline flex-1 justify-center"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  )
}