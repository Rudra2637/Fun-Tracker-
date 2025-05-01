"use client"

import { useState } from "react"
import service from "../Services/fun"
import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"

function Books() {
  const [book, setBook] = useState("")
  const [content, setContent] = useState("")
  const [image, setImage] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleClick = () => {
    setLoading(true)
    setError(null)
    service
      .randomBook()
      .then((response) => {
        setBook(response.volumeInfo.title)
        setContent(response.volumeInfo.description || "No description available.")
        setImage(response.volumeInfo.imageLinks?.smallThumbnail || "")
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error fetching book:", error)
        setError("Failed to fetch a book. Please try again.")
        setLoading(false)
      })
  }

  return (
    <div className="w-full max-w-[1920px] mx-auto px-4 md:px-8 py-8">
      <div className="w-full max-w-[1920px] mx-auto px-4 md:px-8 py-8">
        <Link to="/" className="inline-flex items-center text-purple-600 hover:text-purple-800 mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-white-900 dark:text-white mb-4">
            Discover Your Next <span className="text-purple-600 dark:text-purple-400">Great Read</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Looking for something new to read? Let us help you discover your next literary adventure!
          </p>
          <button
            onClick={handleClick}
            disabled={loading}
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
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
                Finding a book...
              </>
            ) : (
              "Discover a Random Book"
            )}
          </button>
        </div>

        {error && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded shadow-md max-w-4xl mx-auto">
            <p>{error}</p>
          </div>
        )}

        {book && !loading && (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden transition-all duration-500 transform hover:scale-[1.01] max-w-4xl mx-auto">
            <div className="md:flex">
              <div className="md:flex-shrink-0 flex justify-center items-center p-6 bg-gray-50 dark:bg-gray-700">
                {image ? (
                  <img
                    src={image || "/placeholder.svg"}
                    alt={book}
                    className="h-48 w-auto object-cover shadow-md rounded"
                  />
                ) : (
                  <div className="h-48 w-32 bg-gray-200 dark:bg-gray-600 flex items-center justify-center rounded">
                    <svg
                      className="w-12 h-12 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      ></path>
                    </svg>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{book}</h2>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p
                    className="text-gray-600 dark:text-gray-300 mb-4"
                    dangerouslySetInnerHTML={{ __html: content }}
                  ></p>
                </div>
                <div className="mt-6">
                  <button
                    onClick={handleClick}
                    className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-purple-600 bg-purple-100 rounded-md hover:bg-purple-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300"
                  >
                    Find Another Book
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Books
