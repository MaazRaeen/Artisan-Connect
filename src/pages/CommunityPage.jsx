import React from 'react'

export default function CommunityPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Community</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Discussion Forums */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Discussion Forums</h2>
          <div className="space-y-4">
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-medium text-gray-900">Craft Techniques</h3>
              <p className="text-gray-600">Share and learn traditional craft techniques</p>
              <span className="text-sm text-gray-500">125 active discussions</span>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-medium text-gray-900">Business Tips</h3>
              <p className="text-gray-600">Exchange business growth strategies</p>
              <span className="text-sm text-gray-500">89 active discussions</span>
            </div>
            <div className="pb-4">
              <h3 className="text-lg font-medium text-gray-900">Market Trends</h3>
              <p className="text-gray-600">Stay updated with market trends</p>
              <span className="text-sm text-gray-500">93 active discussions</span>
            </div>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Upcoming Events</h2>
          <div className="space-y-4">
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-medium text-gray-900">Artisan Meet 2024</h3>
              <p className="text-gray-600">Annual gathering of artisans</p>
              <span className="text-sm text-gray-500">Dec 15, 2024 • Delhi</span>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-medium text-gray-900">Craft Workshop</h3>
              <p className="text-gray-600">Learn traditional weaving techniques</p>
              <span className="text-sm text-gray-500">Jan 5, 2025 • Online</span>
            </div>
            <div className="pb-4">
              <h3 className="text-lg font-medium text-gray-900">Trade Exhibition</h3>
              <p className="text-gray-600">Showcase your products</p>
              <span className="text-sm text-gray-500">Feb 20, 2025 • Mumbai</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}