import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Navbar  />
      <main className="flex-grow my-5 ">
        <Outlet />
      </main>
      <Footer />
     
    </div>
  )
}

export default Layout
