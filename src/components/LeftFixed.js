import React from 'react'

import {BsInstagram} from 'react-icons/bs';
import {FiGithub} from 'react-icons/fi';
import {FiTwitter} from 'react-icons/fi';
import {FiLinkedin} from 'react-icons/fi';

const LeftFixed = () => {
    return (
        <div className='hidden md:flex flex-col text-xl justify-between items-center fixed bottom-0 md:left-5 lg:left-11 w-10 h-72 text-text_grey '>
          <a href = '#' target='blank'> <FiGithub className='hover:text-light_green hover:-translate-y-2' />  </a>
          <a href = '#' target='blank'> <BsInstagram className='hover:text-light_green hover:-translate-y-2' />  </a>
          <a href = '#' target='blank'> <FiTwitter className='hover:text-light_green hover:-translate-y-2' />  </a>
          <a href = '#' target='blank'> <FiLinkedin className='hover:text-light_green hover:-translate-y-2' />  </a>
          <div className = 'w-0.5 bg-text_grey h-24'> </div>

        </div>
    )
}

export default LeftFixed
