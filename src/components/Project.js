import React from 'react';

import LeftProject from './LeftProject';
import RightProject from './RightProject';

const Project = () => {
    return (
        <div className = 'mt-72' id = 'projects'>
            <div className = 'flex items-center'>
                <p className={`text-title_colors  text-2xl md:text-3xl font-serif w-96`}> 
                    <span className='text-light_green mr-3'>03. </span> Some Things I've Built
                </p>
                <div className = 'h-px w-52 bg-text_dark_grey ml-5' style={{backgroundColor:'#233554'}}>
                </div>
            </div>
            <div className = 'mt-20'>
                <LeftProject />
                <RightProject />
            </div>
        </div>
    )
}

export default Project
