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
import ProtectRoute from './components/ProtectRoute'
import AboutUs from './pages/AboutUs'
import ScrollToTop from './components/ScrollToTop'
import TourPackages from './pages/TourPackages'
import SearchResult from './pages/SearchResult'
import Mytickets from './pages/Mytickets'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />}></Route>
          <Route path='/packagedetails/:id' element={<PackageDetails />}></Route>
          <Route element={<ProtectRoute />}>
            <Route path='/purchase' element={<TourPurchase />} />
            <Route path='/mytickets' element={<Mytickets />} />

          </Route>
          <Route path='/about' element={<AboutUs />}></Route>
          <Route path='/search' element={<SearchResult />}></Route>
          <Route path='/packages' element={<TourPackages />}></Route>
          <Route path='/*' element={<NotFound />}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
