import React from 'react'

const Banner = () => {
    return (
        <div className='my-5 sm:my-36'>
            <p className = 'text-light_green text-base md:text-xl tracking-widest'>Hi, my name is</p>

            <h1 className = 'text-title_colors text-6xl md:text-7xl mt-7'>Samuel Ogbonna.</h1>

            <p className = 'text-banner_grey text-3xl md:text-5xl mt-7 w-5/6 xl:w-5/5 lg:w-4/6'>Full stack web developer, computer vision engineer.</p>

            <p className = 'text-banner_grey text-sm md:text-base mt-5 sm:mt-10 w-5/6 md:w-4/6  '>
                I’m a software engineer specializing in building (and occasionally designing) exceptional digital
                experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.
            </p>

            <button className = 'mt-6 sm:mt-12 border border-light_green text-light_green text-base tracking-wide rounded-lg px-7 py-4 w-56 font-serif hover:bg-dark_green'>
                Learn about me!
            </button>
            
        </div>
    )
}

export default Banner
