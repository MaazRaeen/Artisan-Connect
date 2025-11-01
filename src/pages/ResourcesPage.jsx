import React from 'react'

export default function ResourcesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Resources</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Training Resources */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Training & Education</h2>
          <ul className="space-y-3">
            <li>
              <a href="#" className="text-primary-600 hover:text-primary-800">
                Craftsmanship Workshops
              </a>
            </li>
            <li>
              <a href="#" className="text-primary-600 hover:text-primary-800">
                Business Skills Training
              </a>
            </li>
            <li>
              <a href="#" className="text-primary-600 hover:text-primary-800">
                Online Courses
              </a>
            </li>
          </ul>
        </div>

        {/* Market Access */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Market Access</h2>
          <ul className="space-y-3">
            <li>
              <a href="#" className="text-primary-600 hover:text-primary-800">
                Export Guidelines
              </a>
            </li>
            <li>
              <a href="#" className="text-primary-600 hover:text-primary-800">
                Trade Fair Calendar
              </a>
            </li>
            <li>
              <a href="#" className="text-primary-600 hover:text-primary-800">
                Market Research Reports
              </a>
            </li>
          </ul>
        </div>

        {/* Financial Support */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Financial Support</h2>
          <ul className="space-y-3">
            <li>
              <a href="#" className="text-primary-600 hover:text-primary-800">
                Government Schemes
              </a>
            </li>
            <li>
              <a href="#" className="text-primary-600 hover:text-primary-800">
                Microfinance Options
              </a>
            </li>
            <li>
              <a href="#" className="text-primary-600 hover:text-primary-800">
                Grant Opportunities
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}