"use client"

import { useState } from "react"
import service from "../Services/fun"
import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"

function Meals() {
  const [meal, setMeal] = useState("")
  const [pic, setPic] = useState("")
  const [recipe, setRecipe] = useState("")
  const [video, setVideo] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleClick = () => {
    setLoading(true)
    setError(null)
    service
      .randomMeal()
      .then((response) => {
        setMeal(response.strMeal)
        setPic(response.strMealThumb)
        setRecipe(response.strInstructions)
        setVideo(response.strYoutube)
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error fetching meal:", error)
        setError("Failed to fetch a meal. Please try again.")
        setLoading(false)
      })
  }

  return (
    <div className="w-full max-w-[1920px] mx-auto px-4 md:px-8 py-8">
      <div className="w-full max-w-[1920px] mx-auto px-4 md:px-8 py-8">
        <Link to="/" className="inline-flex items-center text-orange-600 hover:text-orange-800 mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-white-900 dark:text-white mb-4">
            Discover <span className="text-orange-600 dark:text-orange-400">Delicious Meals</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Can't decide what to cook? Let us inspire your next culinary adventure with delicious recipes from around
            the world!
          </p>
          <button
            onClick={handleClick}
            disabled={loading}
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
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
                Finding a meal...
              </>
            ) : (
              "Discover a Random Meal"
            )}
          </button>
        </div>

        {error && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded shadow-md max-w-4xl mx-auto">
            <p>{error}</p>
          </div>
        )}

        {meal && !loading && (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden transition-all duration-500 max-w-4xl mx-auto">
            <div className="relative pb-[50%]">
              <img src={pic || "/placeholder.svg"} alt={meal} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <h2 className="text-3xl font-bold text-white p-6">{meal}</h2>
              </div>
            </div>
            <div className="p-6">
              <div className="prose prose-lg dark:prose-invert max-w-none mb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Instructions</h3>
                <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line">{recipe}</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                <a
                  href={video}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-300"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path
                      fillRule="evenodd"
                      d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Watch Video Tutorial
                </a>
                <button
                  onClick={handleClick}
                  className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-orange-600 bg-orange-100 rounded-md hover:bg-orange-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-300"
                >
                  Find Another Meal
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Meals
