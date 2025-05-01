"use client"

import { useState } from "react"
import service from "../Services/fun"
import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"

function DankJokes() {
  const [joke, setJoke] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const generateRandom = () => {
    return Math.floor(Math.random() * 10)
  }

  const handleClick = () => {
    setLoading(true)
    setError(null)
    service
      .fetchJoke()
      .then((response) => {
        const arr = response.data
        const num = generateRandom()
        setJoke(arr[num].content)
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
        <Link to="/" className="inline-flex items-center text-green-600 hover:text-green-800 mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-white-900 dark:text-white mb-4">
            <span className="text-green-600 dark:text-green-400">Edgy Humor</span> Zone
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Warning: These jokes are for mature audiences only. Expect the unexpected and prepare to laugh!
          </p>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8 rounded-md dark:bg-yellow-900/30 dark:border-yellow-600 max-w-3xl mx-auto">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-yellow-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700 dark:text-yellow-200">
                  These jokes may contain adult content. Viewer discretion is advised.
                </p>
              </div>
            </div>
          </div>
          <button
            onClick={handleClick}
            disabled={loading}
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
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
              "Get a Dank Joke"
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
                className="w-12 h-12 text-green-500"
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
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-green-600 bg-green-100 rounded-md hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-300"
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

export default DankJokes
