import React, { useState } from 'react'
import Tooltip from '@/components/Tooltip'

export default function Button({ href, text, type = "primary", icon = undefined, disabled = false, tooltipText }) {

    const [hover, setHover] = useState(false);

    if(type.toLocaleLowerCase() == "primary") return (
        <a 
            className={`mt-6 px-4 py-2 ${disabled ? "bg-teal-800" : "bg-teal-600"} rounded-3xl text-zinc-50 inline-block relative w-max`}
            href={href}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            target="_blank"
            rel="noreferrer"
        >
            {icon}
            {text}
            {disabled && hover &&
                <Tooltip
                    text={tooltipText}
                />
            }
        </a>
    )

    if(type.toLocaleLowerCase() == "secondary") return (
        <a className='text-md text-teal-500 font-medium' 
            href={href}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            {text}
            <i className={`fa-solid fa-arrow-right ml-2 text-teal-500 ${hover && "translate-x-2"} ease-in duration-75`}></i>
        </a>
    )
}
