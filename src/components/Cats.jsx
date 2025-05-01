"use client"

import { useState } from "react"
import service from "../Services/fun"
import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"

function Cats() {
  const [cat, setCat] = useState("")
  const [pic, setPic] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleClick = () => {
    setLoading(true)
    setError(null)
    service
      .randomCat()
      .then((response) => {
        setCat(response.name)
        setPic(response.image)
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error fetching cat:", error)
        setError("Failed to fetch a cat. Please try again.")
        setLoading(false)
      })
  }

  return (
    <div className="w-full max-w-[1920px] mx-auto px-4 md:px-8 py-8">
      <div className="w-full max-w-[1920px] mx-auto px-4 md:px-8 py-8">
        <Link to="/" className="inline-flex items-center text-pink-600 hover:text-pink-800 mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-white-900 dark:text-white mb-4">
            Discover <span className="text-pink-600 dark:text-pink-400">Fascinating Felines</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Curious about cats? Click below to discover amazing cat breeds with unique personalities and
            characteristics!
          </p>
          <button
            onClick={handleClick}
            disabled={loading}
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Finding a cat...
              </>
            ) : (
              "Discover a Random Cat Breed"
            )}
          </button>
        </div>

        {error && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded shadow-md max-w-3xl mx-auto">
            <p>{error}</p>
          </div>
        )}

        {cat && !loading && (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden transition-all duration-500 transform hover:scale-[1.02] max-w-3xl mx-auto">
            <div className="relative pb-[56.25%]">
              <img src={pic || "/placeholder.svg"} alt={cat} className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{cat}</h2>
              <p className="text-gray-600 dark:text-gray-300">
                This magnificent cat breed has its own unique traits and characteristics. Learn more about their
                personality, care needs, and history.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cats
