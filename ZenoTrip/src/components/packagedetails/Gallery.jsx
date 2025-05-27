import React from 'react'

function Gallery() {
    return (
        <div>
            <h1 className='text-2xl font-bold mb-5'>Gallery</h1>
            <div className="grid grid-cols-4 grid-rows-4  h-[500px]">
                <div  className="col-span-2 row-span-4 bg-[url(https://images.unsplash.com/flagged/photo-1573998594056-53123f2fedec?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]  bg-no-repeat bg-cover "></div>
                <div className="row-span-2 col-start-3 bg-[url(https://images.unsplash.com/photo-1500154040473-d91a2e21a6ea?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]  bg-no-repeat bg-cover "></div>
                <div className="row-span-2 col-start-3 row-start-3 bg-[url(https://images.unsplash.com/photo-1599139497467-3e7f6e244c8a?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]  bg-no-repeat bg-cover"></div>
                <div className="row-span-4 col-start-4 row-start-1 bg-[url(https://images.unsplash.com/photo-1627822933128-e838e37e65a5?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]  bg-no-repeat bg-cover"></div>
            </div>

        </div>
    )
}

export default Gallery
