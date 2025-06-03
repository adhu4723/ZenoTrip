import React from 'react'
import Loader from './Loader'

function Button({label,onClick,outlined,loading}) {
  return (
    <button onClick={onClick} className={`${loading?'bg-gray-300 border-white text-white':'bg-[#FA8B02] '} ${outlined?'bg-white border-amber-500 text-amber-500 ':'bg-[#FA8B02] text-white  '}  rounded border border-[#FA8B02] w-full  px-4 py-2`}>{loading?<Loader/>: label}</button>
  )
}

export default Button
