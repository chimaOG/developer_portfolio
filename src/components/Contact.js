import React from 'react'

const Contact = () => {
    return (
        <div className = 'mt-20 py-40 flex flex-col items-center'>
            <p className = 'text-light_green text-base'> 04.  <span className = 'ml-2'>What's Next?</span></p>
            <p className = 'mt-5 font-bold text-5xl text-title_colors'>Get In Touch</p>
            <p className = 'mt-7 w-8/12 text-banner_grey text-center'>
                Although I’m not currently looking for any new opportunities, my inbox is always open. 
                Whether you have a question or just want to say hi, I’ll try my best to get back to you!
            </p>
            <a href="#" target='blank'>
                <button className = 'mt-16 border border-light_green text-light_green text-base rounded-lg py-4  w-36 font-serif hover:bg-dark_green'>
                    Say Hello
                </button>
            </a>
            
        </div>
    )
}

export default Contact
