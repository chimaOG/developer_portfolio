import React, {useState} from 'react'

import {BiMenuAltRight} from 'react-icons/bi';
import 'animate.css';

import HeaderLink from './HeaderLink';
import SliderNav from './SliderNav';

import logo from '../assets/logo.png';

const Header = () => {

    const [showMenu, setShowMenu] = useState(false);

    const setMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <div className='h-24 flex w-full bg-background bg-opacity-50 z-40'>
            <nav className='w-full flex items-center justify-between px-8'>
                <div className='text-light_green'>
                    <img src={logo} className = 'w-14'/>
                </div>

                <div className = ' hidden md:flex items-center' >
                    <HeaderLink address = {'#'} num = {'01.'} title = {'About'}/>
                    <HeaderLink address = {'#'} num = {'02.'} title = {'Experience'}/>
                    <HeaderLink address = {'#'} num = {'03.'} title = {'Projects'}/>
                    <HeaderLink address = {'#'} num = {'04.'} title = {'Contact'}/>
                    <button className = 'border border-light_green text-light_green text-sm ml-5 rounded-lg px-7 py-2 w-24 font-serif hover:bg-dark_green'>
                        Resume
                    </button>
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
