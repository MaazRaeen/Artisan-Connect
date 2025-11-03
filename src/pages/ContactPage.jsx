import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

export default function ContactPage() {
  const formRef = useRef(null)
  const [status, setStatus] = useState({ loading: false, success: null, message: '' })

  const SERVICE_ID = 'service_wv0ogmi'
  const TEMPLATE_ID = 'template_c2muxkn'
  const PUBLIC_KEY = '5Z_JaR5TUW6fjrAYS'

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus({ loading: false, success: false, message: 'Email service is not configured. Please set the environment keys.' })
      console.error('Missing EmailJS env vars: VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY')
      return
    }

    setStatus({ loading: true, success: null, message: '' })

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      setStatus({ loading: false, success: true, message: 'Message sent successfully — thank you!' })
      // reset form fields
      formRef.current.reset()
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus({ loading: false, success: false, message: 'Failed to send message. Please try again later.' })
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Contact Us</h1>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="from_name"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="reply_to"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                required
              />
            </div>

            {status.message && (
              <div
                className={`text-sm ${status.success ? 'text-green-600' : 'text-red-600'}`}
                role="status"
              >
                {status.message}
              </div>
            )}

            <div>
              <button
                type="submit"
                disabled={status.loading}
                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                  status.loading ? 'bg-gray-400' : 'bg-primary-600 hover:bg-primary-700'
                } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500`}
              >
                {status.loading ? 'Sending…' : 'Send Message'}
              </button>
            </div>
          </form>

          <p className="mt-4 text-xs text-gray-500">
            This site uses EmailJS to deliver messages. Your message will be sent directly to the site administrator.
          </p>
        </div>
      </div>
    </div>
  )
}