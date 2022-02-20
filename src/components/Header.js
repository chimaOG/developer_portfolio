import React, {useState} from 'react';
import { HashLink as Link } from 'react-router-hash-link';


import {BiMenuAltRight} from 'react-icons/bi';
import 'animate.css';

import HeaderLink from './HeaderLink';
import SliderNav from './SliderNav';

import logo from '../assets/logo.png';
import resume from '../assets/samuel_ogbonna_resume_CV.pdf'

const Header = () => {

    const [showMenu, setShowMenu] = useState(false);

    const setMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <div className='h-20 sm:h-24 flex w-full bg-background bg-opacity-50 z-40'>
            <nav className='w-full flex items-center justify-between px-8'>
                <div className='text-light_green'>
                    <Link to = '#banner' smooth>
                        <img src={logo} className = 'w-14'/>
                    </Link>
                </div>

                <div className = ' hidden md:flex items-center' >
                    <HeaderLink address = {'about'} num = {'01.'} title = {'About'}/>
                    <HeaderLink address = {'work_experience'} num = {'02.'} title = {'Experience'}/>
                    <HeaderLink address = {'projects'} num = {'03.'} title = {'Projects'}/>
                    <HeaderLink address = {'contact'} num = {'04.'} title = {'Contact'}/>
                    <a href={resume} download>
                        <button className = 'border border-light_green text-light_green text-sm ml-5 rounded-lg py-2 w-24 font-serif hover:bg-dark_green'>
                            Resume
                        </button>
                    </a>
                </div>

                <div className='flex md:hidden text-light_green text-4xl' onClick={setMenu}>
                    <BiMenuAltRight className='cursor-pointer' />
                </div>

                <div className = {`${showMenu ? 'flex': 'hidden'} md:hidden`} >
                {
                    showMenu && (
                        <SliderNav className = "animate__animated animate__slideInRight animate__slower z-30" hideMenu ={setMenu}/>
                    )
                }
                </div>

                


            </nav>
        </div>
    )
}

export default Header
