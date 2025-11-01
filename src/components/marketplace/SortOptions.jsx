export default function SortOptions({ sortBy, setSortBy }) {
  const sortOptions = [
    { value: 'newest', label: 'Newest Arrivals' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'popular', label: 'Most Popular' },
  ]

  return (
    <div className="flex items-center space-x-4">
      <label htmlFor="sort" className="text-sm font-medium text-gray-900">
        Sort by
      </label>
      <select
        id="sort"
        name="sort"
        className="input"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}