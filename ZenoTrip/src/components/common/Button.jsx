import React from 'react'

function Button({label,onClick}) {
  return (
    <button onClick={onClick} className='bg-[#FA8B02] rounded border border-[#FA8B02] w-full hover:border-[#FA8B02] hover:bg-transparent hover:text-[#FA8B02] text-white px-4 py-2'>{label}</button>
  )
}

export default Button
