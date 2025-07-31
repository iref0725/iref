import React from 'react'

export default function Scrolltop() {
  return (
    <div>
      {/* Scroll to Top Button */}
      <div className="fixed bottom-6 right-6">
        <button
          className="bg-red-700 hover:bg-red-800 text-white p-3 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-red-400 transition-colors duration-200"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
          </svg>
        </button>
      </div>
    </div>
  )
}
