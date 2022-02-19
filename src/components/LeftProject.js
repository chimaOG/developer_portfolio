import React from 'react';
import {FiGithub} from 'react-icons/fi';
import {HiExternalLink} from 'react-icons/hi';


const LeftProject = () => {
    return (
        <div className = 'relative min-h-min'>
            <div className = {`relative w-full`}>
                <a href = '#' target='blank' >
                    <img src={'https://res.cloudinary.com/dhdzo61wo/image/upload/v1641462627/sample.jpg'} 
                    className = ' relative w-full h-80 md:h-96 md:w-7/12  rounded-lg'  
                   />

                    <div className='hidden md:flex  highlight h-full w-7/12  absolute top-0 left-0 hover:bg-transparent bg-light_green opacity-50 rounded-lg' >
                    </div>
                </a>
            </div>
            <div className = 'absolute top-0 right-0 p-5 md:p-0 w-full md:w-1/2   h-80 md:h-full flex flex-col items-start md:items-end bg-slate-900/75 md:bg-transparent'>
                <p className = 'text-light_green text-base md:mt-5'>Featured Project</p>
                <a href = '#' target='blank' >
                     <p className = 'md:mt-2 text-title_colors text-xl md:text-3xl hover:text-light_green'>Photography Website</p> 
                </a>
                <div className = 'md:mt-7 rounded-lg py-2 md:p-5 md:bg-tab_bg text-banner_grey text-sm md:text-base'>
                    <p className = 'md:ml-3'>
                    A web app for visualizing personalized Spotify data. View your top artists, 
                    top tracks, recently played tracks, and detailed audio information about each 
                    track. Create and save new playlists of recommended tracks based on your existing 
                    playlists and more.
                    </p>
                </div>
                <div className = 'mt-2 md:mt-5 flex justify-end items-center text-banner_grey text-sm md:text-base'>
                    <span className = ''>React</span>
                    <span className = 'ml-4'>TailwindCSS</span>
                    <span className = 'ml-4'>AnimateCSS</span>
                    <span className = 'ml-4'>Heroku</span>
                </div>
                <div className = 'mt-2 md:mt-3 flex font-bold text-xl md:text-2xl text-banner_grey'>
                    <a href = '#' target='blank'> <FiGithub className='hover:text-light_green' />  </a>
                    <a href = '#' target='blank'> <HiExternalLink className=' ml-5 hover:text-light_green' />  </a>
                </div>
            </div>
        </div>
    )
}

export default LeftProject