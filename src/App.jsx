import { useState } from 'react'
import Jokes from './components/Jokes'
import Books from './components/Books'
import { Link,Outlet,useNavigate } from 'react-router-dom'

import './App.css'
import Layout from './components/Layout'

function App() {
  

  return (
    <Layout>
        <Outlet /> 
    </Layout>
    
  )
}

export default App
