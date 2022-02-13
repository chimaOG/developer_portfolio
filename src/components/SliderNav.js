import React from 'react'

import {AiOutlineClose} from 'react-icons/ai';

import HeaderLink from './HeaderLink';


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
                    <HeaderLink address = {'#'} num = {'01.'} title = {'About'} aligning = {'flex flex-col items-center text-xl'} />
                    <HeaderLink address = {'#'} num = {'02.'} title = {'Experience'} aligning = {'flex flex-col items-center text-xl mt-5' } />
                    <HeaderLink address = {'#'} num = {'03.'} title = {'Projects'} aligning = {'flex flex-col items-center text-xl mt-5'} />
                    <HeaderLink address = {'#'} num = {'04.'} title = {'Contact'} aligning = {'flex flex-col items-center text-xl mt-5'} />
                    <button className = 'border border-light_green text-light_green mt-20 rounded-lg p-4 w-44 w-full font-serif '>
                        Resume
                    </button>
                </div>

                
            </div>
        </div>
    )
}

export default SliderNav
