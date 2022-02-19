import React from 'react'

import {BiRightArrow} from 'react-icons/bi';

import headImage from '../assets/personal_image.jpg';
import styles from '../css/about.module.css';

const About = () => {
    return (
        <div className='text-banner_light mt-96 md:ml-10'>

            <div className='flex items-center'>
                <p className={`text-title_colors  text-2xl md:text-3xl font-serif w-52`}> 
                    <span className='text-light_green mr-3'>01. </span> About Me
                </p>

                <div className = 'h-px w-52 bg-text_dark_grey' style={{backgroundColor:'#233554'}}>
                </div>
            </div>

            <div className='w-full flex flex-col md:flex-row  font-serif text-banner_light text-base tracking-widest leading-loose'>
                <div className={` w-5/5 md:w-3/5  mt-16`}>
                    <p>
                        Hello! My name is Brittany and I enjoy creating things that live on the internet. 
                        My interest in web development started back in 2012 when I decided to try editing 
                        custom Tumblr themes — turns out hacking together a custom reblog button taught me 
                        a lot about HTML & CSS!
                    </p>
                    <p className = 'mt-7'>
                        Fast-forward to today, and I’ve had the privilege of working at an advertising agency, 
                        a start-up, a huge corporation, and a student-led design studio. My main focus these 
                        days is building accessible, inclusive products and digital experiences at Upstatement 
                        for a variety of clients.
                    </p>
                    <p className = 'mt-7'>
                        I also recently launched a course that covers everything you need to build a web app with
                         the Spotify API using Node & React
                    </p>
                    <div className = 'flex mt-7 w-full text-sm'>
                        <div className='w-1/2'>
                            <p className = 'w-full flex items-center'> 
                                <span>< BiRightArrow className='text-sm text-light_green mr-5' /></span>JavaScripters
                            </p>
                            
                            <p className = 'w-full flex items-center mt-3'> 
                                <span>< BiRightArrow className='text-sm text-light_green mr-5' /></span>JavaScripters
                            </p>
                        </div>
                        <div className='w-1/2'>
                            <p className = 'w-full flex items-center'> 
                                <span>< BiRightArrow className='text-sm text-light_green mr-5' /></span>JavaScripters
                            </p>
                            
                            <p className = 'w-full flex items-center mt-3'> 
                                <span>< BiRightArrow className='text-sm text-light_green mr-5' /></span>JavaScripters
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
