// components/Header.jsx
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/themeSlice";
import { Sun, Moon,Coffee } from "lucide-react";

function Header() {
  const dispatch = useDispatch();
  const { isDarkMode } = useSelector((state) => state.theme);

  return (
    <header 
    // style={{ backgroundColor: isDarkMode ? "#242424" : "#ffffff" }}
    className={`w-full py-6 px-4 sm:px-6 ${isDarkMode ? "bg-gray-800" : "bg-white"} shadow-md`}>
        <div className="w-full max-w-[1920px] mx-auto flex justify-between items-center px-4 md:px-8">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Coffee className="h-6 w-6" />
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Fun Explorer
            </span>
          </h1>
          <button
            onClick={() => dispatch(toggleTheme())}
            className={`p-2 rounded-full ${isDarkMode ? "bg-gray-700 text-yellow-300" : "bg-gray-100 text-gray-700"} transition-all duration-300 hover:scale-110`}
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        </div>
      </header>
  );
}

export default Header;
