import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Outlet } from 'react-router-dom'
import Account from './Auth/Account'

function ProtectRoute() {
    const {isAuth}=useContext(AuthContext)
  return (
    <div>
        {isAuth?<Outlet/>:<Account/>}
      
    </div>
  )
}

export default ProtectRoute
