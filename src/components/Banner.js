import React from 'react';

import { HashLink as Link } from 'react-router-hash-link';


const Banner = () => {
    return (
        <div className='my-5 sm:my-36' id='banner'>
            <p className = 'text-light_green text-base md:text-xl tracking-widest'>Hi, my name is</p>

            <h1 className = 'text-title_colors text-6xl md:text-7xl mt-7'>Samuel Ogbonna.</h1>

            <p className = 'text-banner_grey text-3xl md:text-5xl mt-7 w-5/6 xl:w-5/5 lg:w-4/6'>Full stack web developer,</p>
            <p className = 'text-banner_grey text-3xl md:text-5xl mt-x w-5/6 xl:w-5/5 lg:w-4/6'>Computer vision engineer.</p>


            <p className = 'text-banner_grey text-sm md:text-base mt-5 sm:mt-10 w-5/6 md:w-4/6  '>
            I use my skills as a full stack web developer and computer vision engineer to build consumer ready computer vision products. 
        
            </p>

            <Link to = '#about' smooth>
                <button className = 'mt-6 sm:mt-12 border border-light_green text-light_green text-base tracking-wide rounded-lg px-7 py-4 w-56 font-serif hover:bg-dark_green'>
                    Learn about me!
                </button>
            </Link>
            
            
        </div>
    )
}

export default Banner
