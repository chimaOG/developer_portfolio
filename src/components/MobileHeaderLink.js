import React from 'react';

import { HashLink as Link } from 'react-router-hash-link';


const MobileHeaderLink = ({address, num, title, aligning, hideMenu}) => {
    return (

         <Link 
            smooth
            className='ml-8'
            onClick={() => hideMenu('false')}
            to={`#${address}`}>
            <p className={`text-text_grey hover:text-light_green text-sm font-serif ${aligning} `}> 
                 <span className='text-light_green mr-0.5'>{num} </span> {title}
            </p>
        </Link>
    )
}

export default MobileHeaderLink

// activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500}