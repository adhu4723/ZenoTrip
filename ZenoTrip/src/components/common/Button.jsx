import React from 'react'

function Button({label,onClick,outlined}) {
  return (
    <button onClick={onClick} className={` ${outlined?'bg-white border-amber-500 text-amber-500 hover:bg-[#FA8B02] hover:text-white  ':'bg-[#FA8B02] text-white hover:border-[#FA8B02] hover:bg-transparent hover:text-[#FA8B02] '}  rounded border border-[#FA8B02] w-full  px-4 py-2`}>{label}</button>
  )
}

export default Button
