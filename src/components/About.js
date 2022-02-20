import React from 'react'

import {BiRightArrow} from 'react-icons/bi';

import headImage from '../assets/personal_image.jpeg';
import styles from '../css/about.module.css';

const About = () => {
    return (
        <div className='text-banner_light mt-96 md:ml-10' id='about'>

            <div className='flex items-center'>
                <p className={`text-title_colors  text-2xl md:text-3xl font-serif w-44`}> 
                    <span className='text-light_green mr-3'>01. </span> About Me
                </p>

                <div className = 'h-px  w-44 md:w-52 bg-text_dark_grey' style={{backgroundColor:'#233554'}}>
                </div>
            </div>

            <div className='w-full flex flex-col md:flex-row  font-serif text-banner_light text-lg tracking-wide leading-loose'>
                <div className={` w-5/5 md:w-3/5  mt-16`}>
                    <p>
                        Hello! My name is Samuel, a <span class='text-light_green'>Full stack web developer</span> and <span class='text-light_green'>Computer Vision Engineer</span>. 
                        I took my first coding class in 2015 and in the 6 years since then, I have gone on to become proficient in a 
                        wide range of programming languages and technologies. 
                    </p>
                    <p className = 'mt-7'>
                        I currently work as a <span class='text-light_green'>computer vision at the Africa Innovation center of Anheuser-Busch InBev - the worlds biggest brewer.</span> My 
                        early work at the company involved managing the end-to-end computer vision model development process from dataset curation 
                        to algorithm selection, model training, model testing and deployment. In my current position, I lead a team of AI and IOT engineers 
                        to tackle the challenge of revolutionising the African retail sector.
                    </p>
                    <p className = 'mt-7'>
                        I also serve as the <span class='text-light_green'>Lead Backend Engineer at Jamly Africa,</span> where we're building solutions that will help small businesses to easily establish an online presence.
                    </p>
                    <div className = 'flex mt-7 w-full text-sm'>
                        <div className='w-1/2'>
                            <p className = 'w-full flex items-center'> 
                                <span>< BiRightArrow className='text-sm text-light_green mr-5' /></span>JavaScript (ES6+)
                            </p>
                            
                            <p className = 'w-full flex items-center mt-3'> 
                                <span>< BiRightArrow className='text-sm text-light_green mr-5' /></span>React
                            </p>
                        </div>
                        <div className='w-1/2'>
                            <p className = 'w-full flex items-center'> 
                                <span>< BiRightArrow className='text-sm text-light_green mr-5' /></span>Python
                            </p>
                            
                            <p className = 'w-full flex items-center mt-3'> 
                                <span>< BiRightArrow className='text-sm text-light_green mr-5' /></span>Django
                            </p>
                        </div>
                    </div>
                </div>
                

                <div className={`h-80 w-4/5 md:w-2/5 px-2 ml-5 mt-20`}>
                    <div className = {`${styles.contains} relative`}>
                        <img src={headImage} className = ' relative top-0 left-0 w-full  rounded-lg' style={{zIndex: '20'}} />

                        <div className='highlight h-full w-full  absolute top-0 left-0 hover:bg-transparent bg-light_green opacity-50 rounded-lg' style={{zIndex: '30'}}>
                        </div>

                        <div id='edges' className={`edges ${styles.edges} h-full w-full absolute  top-8 left-8 border-2 border-light_green  rounded-lg `} style={{zIndex: '1'}}>

                        </div>
                    </div>
                </div>
            </div>

            
        </div>
    )
}

export default About
