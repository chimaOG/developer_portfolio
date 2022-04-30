import React from 'react';

import LeftProject from './LeftProject';
import RightProject from './RightProject';

const projectData = [
    {
        name: 'ReactMeals App',
        description: "An e-commerce websites where customers can view all the available meals, get pricing information, add them to cart and eventually place an order. ",
        technologies: ['React', 'TailwindCSS', 'FireBase', 'Heroku', 'Context'],
        gitLink: 'https://github.com/chimaOG/React-Meals-Project.git',
        projLink: 'https://reactmealscart.herokuapp.com/',
        imgLink: 'https://res.cloudinary.com/dhdzo61wo/image/upload/v1651332317/Screenshot_2022-04-30_at_4.23.57_PM_ddhtac.png'
    },
    {
        name: 'Photography Website',
        description: 'A website for a photography business to interact with customers. It gives potential customers the ability to view the portfolio and contact the business for potential deals.',
        technologies: ['React', 'TailwindCSS', 'AnimateCSS', 'Heroku'],
        gitLink: 'https://github.com/chimaOG/paulstart.git',
        projLink: 'https://paulstar.herokuapp.com/',
        imgLink: 'https://res.cloudinary.com/dhdzo61wo/image/upload/v1645479936/Screenshot_2022-02-21_at_10.43.20_PM_zdwgsc.png'
    },
    
    
]


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
                <LeftProject projectDetails = {projectData[0]}  />
            </div>

            <div className = 'mt-20'>
                <RightProject projectDetails = {projectData[1]} />
            </div>
        </div>
    )
}

export default Project
