import React from 'react'

function Home() {
    document.title = 'Home Page'
    return (
        <div className='h-full w-full flex flex-col justify-center items-center bg-black  text-white'>
            <span className='text-xl font-semibold  animate-bounce '>
                Home World !
            </span>
            <span>
                Created by Muhammed Rashid
            </span>
        </div>
    )
}

export default Home