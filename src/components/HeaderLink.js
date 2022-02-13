import React from 'react'

const HeaderLink = ({address, num, title, aligning}) => {
    return (

         <a href = {address} className='ml-5'>
            <p className={`text-text_grey hover:text-light_green text-sm font-serif ${aligning} `}> 
                 <span className='text-light_green mr-0.5'>{num} </span> {title}
            </p>
        </a>
    )
}

export default HeaderLink
