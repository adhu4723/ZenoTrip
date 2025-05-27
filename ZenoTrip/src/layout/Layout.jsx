import React, { useContext, useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import Account from '../components/Auth/Account'
import { AuthContext } from '../context/AuthContext'

function Layout() {
  const  {isAuth}=useContext(AuthContext)
  const [show, setShow] = useState(false)
   useEffect(()=>{
 setShow(!isAuth)
   },[isAuth])
  

  const toggleAuth = () => {
    setShow((prev) => !prev)
      console.log(show);
  }

  const closeAuth = () => {
    setShow(false)
  }

  return (
    <div className="flex flex-col min-h-screen relative">
      <Navbar showAuth={toggleAuth} />
      <main className="flex-grow">
        {show && <Account onClose={closeAuth} />}
        <div className='my-5'>
        <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Layout
