import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './layout/Layout'
import PackageDetails from './pages/PackageDetails'
import TourPurchase from './pages/TourPurchase'
import NotFound from './pages/NotFound'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes> 
      <Route element={<Layout/>}>
      <Route path='/' element={<Home/>}></Route>
       <Route path='/packagedetails/:id' element={<PackageDetails/>}></Route>
       <Route path='/packages' element={<TourPurchase/>}/>
       <Route path='/*' element={<NotFound/>}></Route>
      </Route>
       </Routes>
    </>
  )
}

export default App
