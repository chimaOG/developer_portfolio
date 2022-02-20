import React from 'react'

import {AiOutlineClose} from 'react-icons/ai';

import MobileHeaderLink from './MobileHeaderLink';
import resume from '../assets/samuel_ogbonna_resume_CV.pdf'


const SliderNav = ({hideMenu}) => {
    return (
        <div className='flex fixed top-0 right-0 h-screen w-full'>
            <div className='w-1/4  sm:w-2/4 blur-lg' onClick={() => hideMenu('false')} > 

            </div>

            <div className='flex flex-col items-center w-3/4 sm:w-2/4 bg-menu_background p-12' > 
                <div className='w-full text-light_green flex justify-end h-1/6 text-4xl cursor-pointer' onClick={() => hideMenu('false')} >
                    <AiOutlineClose />
                </div>

                <div className='justify-around h-5/6'>
                    <MobileHeaderLink 
                        address = {'about'} num = {'01.'} title = {'About'} aligning = {'flex flex-col items-center text-xl'} 
                        hideMenu = {hideMenu}
                        />

                    <MobileHeaderLink 
                        address = {'work_experience'} num = {'02.'} title = {'Experience'} aligning = {'flex flex-col items-center text-xl mt-5' } 
                        hideMenu = {hideMenu}
                        />

                    <MobileHeaderLink 
                        address = {'projects'} num = {'03.'} title = {'Projects'} aligning = {'flex flex-col items-center text-xl mt-5'} 
                        hideMenu = {hideMenu}
                        />

                    <MobileHeaderLink 
                        address = {'contact'} num = {'04.'} title = {'Contact'} aligning = {'flex flex-col items-center text-xl mt-5'} 
                        hideMenu = {hideMenu}
                        />
                    
                    <a href={resume} download>
                        <button className = 'border border-light_green text-light_green mt-20 rounded-lg p-4 w-44 w-full font-serif '>
                            Resume
                        </button>
                    </a>
                    
                </div>

                
            </div>
        </div>
    )
}

export default SliderNav
