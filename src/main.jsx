import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Books from './components/Books.jsx'
import Jokes from './components/Jokes.jsx'
import Home from './Home.jsx'
import DankJokes from './components/DankJokes.jsx'
import Quotes from './components/Quotes.jsx'
import Dogs from './components/Dogs.jsx'
import Cats from './components/Cats.jsx'
import Meals from './components/Meals.jsx'
import { Provider } from 'react-redux'
import { store } from './store/store.js'


const router = createBrowserRouter([
  {
    path:'/',
    element: <App />,
    children:[
      {
        path:'/',
        element:<Home />
      },
      {
        path:'/jokes',
        element:<Jokes /> 
      },
      {
        path:'/books',
        element:<Books /> 
      },
      {
        path:"/dankJokes",
        element:<DankJokes />
      },
      {
        path:"/quotes",
        element:<Quotes />
      },
      {
        path:"/dog",
        element:<Dogs />
      },
      {
        path:"/cat",
        element:<Cats /> 
      },
      {
        path:"/meal",
        element:<Meals />
      }
  ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    
  </StrictMode>,
)
