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
            period: 'Dec 2021 - present',
            points: [
                'System architecture and solution design for a SaaS solution',
                'Designing and implementing client dashboards with Python and React. This involves data cleaning, analysis, and visualization',
                'Backend development with Django and Frontend development with React',
            ]
        },
        {
            title: 'Artificial Intelligence Specialist',
            company: 'AbInBev',
            period: 'April 2021 - present',
            points: [
                'System architecture and solution design for a SaaS solution',
                'Designing and implementing client dashboards with Python and React. This involves data cleaning, analysis, and visualization',
                'Backend development with Django and Frontend development with React',
            ]
        },
        {
            title: 'Artificial Intelligence Trainee',
            company: 'AbInBev',
            period: 'February 2022 - April,2021',
            points: [
                'System architecture and solution design for a SaaS solution',
                'Designing and implementing client dashboards with Python and React. This involves data cleaning, analysis, and visualization',
                'Backend development with Django and Frontend development with React',
            ]
        },
        {
            title: 'Technology Research Analyst',
            company: 'FMDQ Group',
            period: 'February 2019 - October, 2019',
            points: [
                'System architecture and solution design for a SaaS solution',
                'Designing and implementing client dashboards with Python and React. This involves data cleaning, analysis, and visualization',
                'Backend development with Django and Frontend development with React',
            ]
        },

    ]

    return (
        <div className = 'md:ml-36 mt-48'>
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
                        className = {`h-1/4 w-1/4 md:w-full md:pl-5 flex justify-center md:justify-start items-center hover:text-light_green hover:bg-tab_bg border-b-2 md:border-0 md:border-l-2 ${jobPath === 'jamly' ? 'border-light_green text-light_green bg-tab_bg' : 'border-light_border'}`}
                        onClick = { () => {setJobPath('jamly');}}
                    >
                        Jamly
                    </Link>

                    <Link
                        to={'/abi1'}
                        className = {`h-1/4 w-1/4 md:w-full md:pl-5 flex justify-center md:justify-start  items-center hover:text-light_green hover:bg-tab_bg border-b-2 md:border-0 md:border-l-2 ${jobPath === 'abi1' ? 'border-light_green text-light_green bg-tab_bg' : 'border-light_border'}`}
                        onClick = { () => {setJobPath('abi1');}}
                    >
                        AbinBev
                    </Link>
                    <Link
                        to={'/abi2'}
                        className = {`h-1/4 w-1/4 md:w-full md:pl-5 flex justify-center md:justify-start items-center hover:text-light_green hover:bg-tab_bg border-b-2 md:border-0 md:border-l-2 ${jobPath === 'abi2' ? 'border-light_green text-light_green bg-tab_bg' : 'border-light_border'}`}
                        onClick = { () => {setJobPath('abi2');}}
                    >
                        AbinBev
                    </Link>
                    <Link
                        to={'/fmdq'}
                        className = {`h-1/4 w-1/4 md:w-full md:pl-5 flex justify-center md:justify-start items-center hover:text-light_green hover:bg-tab_bg border-b-2 md:border-0 md:border-l-2 ${jobPath === 'fmdq' ? 'border-light_green text-light_green bg-tab_bg' : 'border-light_border'}`}
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
