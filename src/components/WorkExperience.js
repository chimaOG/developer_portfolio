import React, {useState} from 'react'
import {Link, Route, Routes} from 'react-router-dom';

import 'animate.css';

import JobDetails from './JobDetails';

const WorkExperience = () => {

    const [jobPath, setJobPath] = useState('jamly');

    const jobs = [
        {
            title: 'Lead Backend Developer',
            company: 'Jamly',
            period: 'Oct 2021 - present',
            points: [
                'System architecture and solution design for a scalable SaaS solution.',
                'Write modern, performant, maintainable code that perfectly satisfies the user requiremetns.',
                'Backend development with Django and Frontend development with ReactJS',
            ]
        },
        {
            title: 'Artificial Intelligence Specialist',
            company: 'AbInBev',
            period: 'April 2021 - present',
            points: [
                'Designing & implementing extended functionality for existing computer vision models',
                'Technical lead for a Retail Project collects a live stream of images from retail stores and extract insights about consumer behavior using object detection and tracking.',
                'Implemented features include human detection, object tracking, handling object occlusion and the integrating IOT device output with web dashboards in real time.',
            ]
        },
        {
            title: 'Artificial Intelligence Trainee',
            company: 'AbInBev',
            period: 'February 2022 - April,2021',
            points: [
                'Trained, tested, and deployed instance segmentation and object detection models to track product visibility, pricing information and marketing effectiveness. Deployment of these models led to a 13% increase in sales volume in Nigeria (930k USD).',
                'Managed the end-to-end computer vision model development process from dataset curation to algorithm selection, model training, model testing and deployment.',
                'Implemented custom OCR model for extracting pricing information from price posters in key sales venues.',
            ]
        },
        {
            title: 'Technology Research Analyst',
            company: 'FMDQ Group',
            period: 'February 2019 - October, 2019',
            points: [
                'Carried out global benchmarking for a fin-tech company. This served as a guide for the definition of organizational structure, product offerings, revenue model and targets/KPIs.',
                'Used statistical software to analyze financial and economic data relevant for corporate strategy.',
            ]
        },

    ]

    return (
        <div className = 'md:ml-36 mt-48' id='work_experience'>
            <div className = 'flex items-center'>
                <p className={`text-title_colors  text-2xl md:text-3xl font-serif w-96`}> 
                    <span className='text-light_green mr-3'>02. </span> Where I've Worked
                </p>
                <div className = 'h-px w-32 md:w-52 bg-text_dark_grey ml-3 md:ml-5' style={{backgroundColor:'#233554'}}>
                </div>
            </div>
            <div className = 'flex flex-col md:flex-row mt-10'>
                <div className = 'w-full md:w-1/6 flex md:flex-col text-banner_light mr-5'>
                    <Link
                        to={'/'}
                        className = {`h-14 w-1/4 md:w-full md:pl-5 flex justify-center md:justify-start items-center hover:text-light_green hover:bg-tab_bg border-b-2 md:border-0 md:border-l-2 ${jobPath === 'jamly' ? 'border-light_green text-light_green bg-tab_bg' : 'border-light_border'}`}
                        onClick = { () => {setJobPath('jamly');}}
                    >
                        Jamly
                    </Link>

                    <Link
                        to={'/abi1'}
                        className = {`h-14 w-1/4 md:w-full md:pl-5 flex justify-center md:justify-start  items-center hover:text-light_green hover:bg-tab_bg border-b-2 md:border-0 md:border-l-2 ${jobPath === 'abi1' ? 'border-light_green text-light_green bg-tab_bg' : 'border-light_border'}`}
                        onClick = { () => {setJobPath('abi1');}}
                    >
                        AbinBev
                    </Link>
                    <Link
                        to={'/abi2'}
                        className = {`h-14 w-1/4 md:w-full md:pl-5 flex justify-center md:justify-start items-center hover:text-light_green hover:bg-tab_bg border-b-2 md:border-0 md:border-l-2 ${jobPath === 'abi2' ? 'border-light_green text-light_green bg-tab_bg' : 'border-light_border'}`}
                        onClick = { () => {setJobPath('abi2');}}
                    >
                        AbinBev
                    </Link>
                    <Link
                        to={'/fmdq'}
                        className = {`h-14 w-1/4 md:w-full md:pl-5 flex justify-center md:justify-start items-center hover:text-light_green hover:bg-tab_bg border-b-2 md:border-0 md:border-l-2 ${jobPath === 'fmdq' ? 'border-light_green text-light_green bg-tab_bg' : 'border-light_border'}`}
                        onClick = { () => {setJobPath('fmdq');}}
                    >
                        FMDQ 
                    </Link>
                </div>
                <div className = 'w-4/5  mt-8 md:mt-2'>
                    <Routes>
                        <Route path = '/' element = { <JobDetails  jobData={jobs[0]} />} />
                        <Route path = '/abi1' element = { <JobDetails jobData={jobs[1]}  />} />
                        <Route path = '/abi2' element = { <JobDetails jobData={jobs[2]}   />}/>
                        <Route path = '/fmdq' element = { <JobDetails jobData={jobs[3]}   />}/>
                    </Routes>
                </div>
            </div>
        </div>
        
    )
}

export default WorkExperience
