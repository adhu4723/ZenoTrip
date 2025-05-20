import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './layout/Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes> 
      <Route element={<Layout/>}>
      <Route path='/' element={<Home/>}></Route>
      </Route>
       </Routes>
    </>
  )
}

export default App
