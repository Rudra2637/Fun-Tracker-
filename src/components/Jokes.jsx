"use client"

import { useState } from "react"
import service from "../Services/fun"
import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"

function Jokes() {
  const [joke, setJoke] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleClick = () => {
    setLoading(true)
    setError(null)
    service
      .randomJoke()
      .then((response) => {
        setJoke(response)
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error fetching joke:", error)
        setError("Failed to fetch a joke. Please try again.")
        setLoading(false)
      })
  }

  return (
    <div className="w-full max-w-[1920px] mx-auto px-4 md:px-8 py-8">
      <div className="w-full max-w-[1920px] mx-auto px-4 md:px-8 py-8">
        <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-white-900 dark:text-white mb-4">
            Need a <span className="text-blue-600 dark:text-blue-400">Good Laugh?</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Laughter is the best medicine! Click below to get a random joke that will brighten your day.
          </p>
          <button
            onClick={handleClick}
            disabled={loading}
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
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
                Finding a joke...
              </>
            ) : (
              "Get a Random Joke"
            )}
          </button>
        </div>

        {error && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded shadow-md max-w-3xl mx-auto">
            <p>{error}</p>
          </div>
        )}

        {joke && !loading && (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 transition-all duration-500 transform hover:scale-[1.02] max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <svg
                className="w-12 h-12 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <p className="text-xl text-center font-medium text-gray-900 dark:text-white mb-4">{joke}</p>
            <div className="flex justify-center mt-6">
              <button
                onClick={handleClick}
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-blue-600 bg-blue-100 rounded-md hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300"
              >
                Another Joke
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Jokes
