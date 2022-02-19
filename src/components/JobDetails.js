import React from 'react';
import 'animate.css';


import {BiRightArrow} from 'react-icons/bi';


const JobDetails = ({jobData}) => {
    return (
        <div className = 'text-white font-serif animate__animated  animate__fadeIn'>
            <p className = 'text-xl font-bold text-title_colors'>{jobData.title} <span className = 'text-light_green'>@ {jobData.company}</span></p>
            <p className = 'mt-3 text-banner_grey'>{jobData.period}</p>
            
            <div className = 'mt-7 text-banner_light w-11/12'>
                {
                    jobData.points.map(point => (
                        <p className = 'w-full flex mt-2'> 
                        <span>< BiRightArrow className='text-sm text-light_green mr-5 mt-1' /></span>{point}
                    </p>
                    ))
                }
                
            </div>

            
        </div>
    )
}

export default JobDetails
