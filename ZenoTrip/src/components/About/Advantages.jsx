import React from 'react'

function Advantages() {
    const advData=[
        {
          title:'Complete Packages For All Your Wishes',
          img:'/ZenoTrip/icon/Layer 2.png'
        },
        {
          title:'Over 30 Years Of Experience',
          img:'/ZenoTrip/icon/Layer 2 (1).png'
        },{
          title:'Expert Guides For You',
          img:'/ZenoTrip/icon/Layer 1.png'
        },{
          title:'Guaranteed fun at the best price!',
          img:'/ZenoTrip/public/icon/icon_best price.png'
        },
]
  return (
    <div className='bg-[#e0ac69] flex justify-evenly gap-5 flex-wrap py-10'>
        {advData.map(items=>(
            <div className='w-[292px] bg-orange-100/50 px-10 py-4 flex flex-col gap-5 justify-center items-center text-center'>
                <img src={items.img} alt="" />
                <h1>{items.title}</h1>
            </div>
        ))}
      
    </div>
  )
}

export default Advantages
