import React from 'react';

import { HashLink as Link } from 'react-router-hash-link';


const HeaderLink = ({address, num, title, aligning}) => {
    return (

         <Link 
            smooth
            className='ml-8'
            to={`#${address}`}>
            <p className={`text-text_grey hover:text-light_green text-sm font-serif ${aligning} `}> 
                 <span className='text-light_green mr-0.5'>{num} </span> {title}
            </p>
        </Link>
    )
}

export default HeaderLink

// activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500}