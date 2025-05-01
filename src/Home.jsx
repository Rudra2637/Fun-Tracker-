"use client"

import { Link } from "react-router-dom"
import { toggleTheme } from "./store/themeSlice"
import { useDispatch, useSelector } from "react-redux"
import { Sun, Moon, Book, Smile, Coffee, Dog, Cat, Utensils } from "lucide-react"

function Home() {
  const dispatch = useDispatch()
  const { isDarkMode } = useSelector((state) => state.theme)

  return (
    <div
      className={`w-full min-h-screen transition-colors duration-300 ${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"}`}
    >
      {/* Header */}
      

      {/* Hero Section */}
      <section className="w-full py-12 px-4 sm:px-6">
        <div className="w-full max-w-[1920px] mx-auto text-center px-4 md:px-8">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Discover Something Fun Today
          </h2>
          <p className={`text-lg max-w-3xl mx-auto mb-12 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
            Bored? We've got you covered! Explore random books, jokes, quotes, cute animals, and delicious meal ideas
            with just a click.
          </p>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-[1920px] mx-auto px-4 md:px-8">
            {/* Books */}
            <Link
              to="/books"
              className={`group p-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl ${isDarkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-white hover:bg-gray-50"}`}
            >
              <div className="flex flex-col items-center">
                <div className={`p-4 rounded-full mb-4 ${isDarkMode ? "bg-purple-900" : "bg-purple-100"}`}>
                  <Book className={`h-8 w-8 ${isDarkMode ? "text-purple-300" : "text-purple-600"}`} />
                </div>
                <h3 className="text-xl font-bold mb-2">Books</h3>
                <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                  Discover your next great read
                </p>
              </div>
            </Link>

            {/* Jokes */}
            <Link
              to="/jokes"
              className={`group p-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl ${isDarkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-white hover:bg-gray-50"}`}
            >
              <div className="flex flex-col items-center">
                <div className={`p-4 rounded-full mb-4 ${isDarkMode ? "bg-blue-900" : "bg-blue-100"}`}>
                  <Smile className={`h-8 w-8 ${isDarkMode ? "text-blue-300" : "text-blue-600"}`} />
                </div>
                <h3 className="text-xl font-bold mb-2">Jokes</h3>
                <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                  Laugh out loud with random jokes
                </p>
              </div>
            </Link>

            {/* Dank Jokes */}
            <Link
              to="/dankJokes"
              className={`group p-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl ${isDarkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-white hover:bg-gray-50"}`}
            >
              <div className="flex flex-col items-center">
                <div className={`p-4 rounded-full mb-4 ${isDarkMode ? "bg-green-900" : "bg-green-100"}`}>
                  <Smile className={`h-8 w-8 ${isDarkMode ? "text-green-300" : "text-green-600"}`} />
                </div>
                <h3 className="text-xl font-bold mb-2">Dank Jokes</h3>
                <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>Edgy humor for the brave</p>
              </div>
            </Link>

            {/* Quotes */}
            <Link
              to="/quotes"
              className={`group p-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl ${isDarkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-white hover:bg-gray-50"}`}
            >
              <div className="flex flex-col items-center">
                <div className={`p-4 rounded-full mb-4 ${isDarkMode ? "bg-yellow-900" : "bg-yellow-100"}`}>
                  <Coffee className={`h-8 w-8 ${isDarkMode ? "text-yellow-300" : "text-yellow-600"}`} />
                </div>
                <h3 className="text-xl font-bold mb-2">Quotes</h3>
                <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                  Find inspiration in wisdom
                </p>
              </div>
            </Link>

            {/* Dog */}
            <Link
              to="/dog"
              className={`group p-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl ${isDarkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-white hover:bg-gray-50"}`}
            >
              <div className="flex flex-col items-center">
                <div className={`p-4 rounded-full mb-4 ${isDarkMode ? "bg-red-900" : "bg-red-100"}`}>
                  <Dog className={`h-8 w-8 ${isDarkMode ? "text-red-300" : "text-red-600"}`} />
                </div>
                <h3 className="text-xl font-bold mb-2">Dogs</h3>
                <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                  Adorable dogs to brighten your day
                </p>
              </div>
            </Link>

            {/* Cat */}
            <Link
              to="/cat"
              className={`group p-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl ${isDarkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-white hover:bg-gray-50"}`}
            >
              <div className="flex flex-col items-center">
                <div className={`p-4 rounded-full mb-4 ${isDarkMode ? "bg-pink-900" : "bg-pink-100"}`}>
                  <Cat className={`h-8 w-8 ${isDarkMode ? "text-pink-300" : "text-pink-600"}`} />
                </div>
                <h3 className="text-xl font-bold mb-2">Cats</h3>
                <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                  Cute felines to make you smile
                </p>
              </div>
            </Link>

            {/* Meal */}
            <Link
              to="/meal"
              className={`group p-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl ${isDarkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-white hover:bg-gray-50"}`}
            >
              <div className="flex flex-col items-center">
                <div className={`p-4 rounded-full mb-4 ${isDarkMode ? "bg-orange-900" : "bg-orange-100"}`}>
                  <Utensils className={`h-8 w-8 ${isDarkMode ? "text-orange-300" : "text-orange-600"}`} />
                </div>
                <h3 className="text-xl font-bold mb-2">Meals</h3>
                <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                  Discover delicious recipe ideas
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`w-full py-6 px-4 sm:px-6 ${isDarkMode ? "bg-gray-800" : "bg-white"} shadow-inner mt-12`}>
        <div className="w-full max-w-[1920px] mx-auto text-center px-4 md:px-8">
          <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
            © {new Date().getFullYear()} Fun Explorer. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Home
